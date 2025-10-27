import os
import time
import requests
import pandas as pd
from dotenv import load_dotenv
from tqdm import tqdm
from pathlib import Path
import re
import math

# -------------------------------
# Load environment variables
# -------------------------------
load_dotenv()
API_KEY = os.getenv("GOOGLE_SEARCH_API_KEY")
CX = os.getenv("SEARCH_ENGINE_ID")

# -------------------------------
# Project directories
# -------------------------------
PROJECT_ROOT = Path(__file__).resolve().parents[2]
print(f"📂 Project Root: {PROJECT_ROOT}")

DATASET_DIR = PROJECT_ROOT / "Datasets" / "Cleaned-DS"
INPUT_FILE = DATASET_DIR / "college_coords.csv"
OUTPUT_FILE = DATASET_DIR / "college_enriched.csv"

# -------------------------------
# Helper: Safe string
# -------------------------------
def safe_str(value):
    """Return empty string for NaN or None."""
    if pd.isna(value) or value is None:
        return ""
    return str(value).strip()

# -------------------------------
# Helper: Google Search (with retry & backoff)
# -------------------------------
def google_search(query, search_type=None, num=3, retries=3, backoff=10):
    """Perform Google Custom Search with retry and exponential backoff."""
    if not query or query.lower().startswith("nan"):
        print(f"⚠️ Skipping invalid query: '{query}'")
        return []

    url = "https://www.googleapis.com/customsearch/v1"
    params = {"key": API_KEY, "cx": CX, "q": query, "num": num}
    if search_type:
        params["searchType"] = search_type
    
    for attempt in range(retries):
        try:
            response = requests.get(url, params=params, timeout=10)
            response.raise_for_status()
            return response.json().get("items", [])
        except requests.exceptions.HTTPError as e:
            if e.response.status_code == 429:
                wait_time = backoff * (2 ** attempt)
                print(f"⏳ 429 Too Many Requests — waiting {wait_time}s before retrying...")
                time.sleep(wait_time)
                continue
            else:
                print(f"❌ HTTP Error fetching '{query}': {e}")
                break
        except Exception as e:
            print(f"❌ Network Error fetching '{query}': {e}")
            break
    return []

# -------------------------------
# Helper: Get NAAC details
# -------------------------------
def get_naac_info(college_name):
    if not college_name:
        return {"naacGrade": "N/A", "naacCGPA": "N/A", "source": ""}

    query = f"{college_name} NAAC grade site:naac.gov.in OR collegedunia.com OR shiksha.com"
    items = google_search(query)
    if not items:
        return {"naacGrade": "N/A", "naacCGPA": "N/A", "source": ""}

    snippet = items[0].get("snippet", "")
    link = items[0].get("link", "")

    grade_match = re.search(r"NAAC\s*Grade\s*[:\-]?\s*([A\+\+A]+)", snippet, re.I)
    cgpa_match = re.search(r"CGPA\s*[:\-]?\s*([\d\.]+)", snippet, re.I)

    return {
        "naacGrade": grade_match.group(1) if grade_match else "N/A",
        "naacCGPA": cgpa_match.group(1) if cgpa_match else "N/A",
        "source": link
    }

# -------------------------------
# Helper: Get College Images
# -------------------------------
def get_images(college_name, place):
    if not college_name:
        return []
    query = f"{college_name} {place} campus"
    items = google_search(query, search_type="image", num=3)
    return [item["link"] for item in items[:3] if "link" in item]

# -------------------------------
# Main Function
# -------------------------------
def enrich_colleges():
    df = pd.read_csv(INPUT_FILE)
    enriched_data = []

    print(f"📘 Loaded {len(df)} colleges from {INPUT_FILE}")

    for _, row in tqdm(df.iterrows(), total=len(df)):
        name = safe_str(row.get("INSTITUTE NAME"))
        place = safe_str(row.get("PLACE"))
        lat = row.get("lat")
        lng = row.get("lng")

        # Skip empty or invalid college names
        if not name:
            print(f"⚠️ Skipping row with missing INSTITUTE_NAME")
            continue

        # Get NAAC Info
        naac_info = get_naac_info(name)

        # Get Images
        images = get_images(name, place)

        # Google Maps Link
        if not (isinstance(lat, (int, float)) and isinstance(lng, (int, float))) or math.isnan(lat) or math.isnan(lng):
            maps_link = ""
        else:
            maps_link = f"https://www.google.com/maps?q={lat},{lng}"

        enriched_data.append({
            "INSTITUTE_NAME": name,
            "PLACE": place,
            "lat": lat,
            "lng": lng,
            "image1": images[0] if len(images) > 0 else "",
            "image2": images[1] if len(images) > 1 else "",
            "image3": images[2] if len(images) > 2 else "",
            "NAAC Grade": naac_info["naacGrade"],
            "NAAC CGPA": naac_info["naacCGPA"],
            "Google Maps Link": maps_link,
            "Source": naac_info["source"],
        })

        # Delay between API calls
        time.sleep(1.5)

    out_df = pd.DataFrame(enriched_data)
    out_df.to_csv(OUTPUT_FILE, index=False)
    print(f"✅ Enriched data saved to {OUTPUT_FILE}")

# -------------------------------
# Run
# -------------------------------
if __name__ == "__main__":
    enrich_colleges()
