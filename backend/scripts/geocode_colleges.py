#!/usr/bin/env python3
"""
Geocode colleges using Google Geocoding API (preferred) with Nominatim fallback.

This script scans the cleaned dataset CSVs in Datasets/Cleaned-DS, extracts unique
college names and place, queries geocoding APIs and writes `college_coords.csv` in
the same folder with columns: INSTITUTE NAME, PLACE, lat, lng, source

Usage:
  python backend/scripts/geocode_colleges.py --api-key YOUR_GOOGLE_API_KEY

You can also set environment variable GOOGLE_MAPS_API_KEY instead of passing --api-key.

Notes:
 - Do not commit your API key. Use environment variables or a local secrets file.
 - Google may charge for geocoding requests. Use responsibly.
"""
import os
import time
import argparse
import re
import pandas as pd
import requests
from pathlib import Path


PROJECT_ROOT = Path(__file__).resolve().parents[2]
DATASET_DIR = PROJECT_ROOT / 'Datasets' / 'Cleaned-DS'


# Helpers copied from clean_coords.py to sanitize PLACE and numeric fields
import numpy as np

def clean_place(val):
    # Normalize place values to a single meaningful string or None
    try:
        if pd.isna(val):
            return None
    except Exception:
        pass
    if not isinstance(val, str):
        return str(val).strip() if val is not None else None

    # Try lines first (take first meaningful line)
    for line in val.splitlines():
        s = line.strip()
        if not s:
            continue
        # If line starts with 'PLACE' drop the label
        m = re.match(r'PLACE\s*[:\s\-]*(.+)', s, flags=re.IGNORECASE)
        if m:
            content = m.group(1).strip()
            if content and content.lower() not in ("nan", "none"):
                return content
            continue
        # ignore metadata lines
        if any(tok in s.lower() for tok in ("name:", "dtype")):
            continue
        if s.lower() not in ("nan", "none"):
            return s

    # fallback: strip known tokens
    cleaned = re.sub(r'PLACE|Name:|dtype.*', '', val, flags=re.IGNORECASE).strip()
    if cleaned and cleaned.lower() not in ("nan", "none"):
        return cleaned
    return None


def safe_float(v):
    try:
        f = float(v)
        if np.isfinite(f):
            return f
    except Exception:
        pass
    return None


def gather_colleges():
    dfs = []
    for i in range(1, 7):
        p = DATASET_DIR / f'df{i}_cleaned.csv'
        if p.exists():
            try:
                dfs.append(pd.read_csv(p))
            except Exception as e:
                print(f"Failed reading {p}: {e}")
    if not dfs:
        return pd.DataFrame()
    df = pd.concat(dfs, ignore_index=True)
    df.columns = df.columns.str.strip().str.upper()
    if 'INSTITUTE NAME' not in df.columns:
        return pd.DataFrame()
    uniq = df[['INSTITUTE NAME', 'PLACE']].drop_duplicates().reset_index(drop=True)
    # Ensure names are strings and PLACE is cleaned
    uniq['INSTITUTE NAME'] = uniq['INSTITUTE NAME'].astype(str)
    if 'PLACE' in uniq.columns:
        uniq['PLACE'] = uniq['PLACE'].apply(clean_place)
    return uniq


def geocode_google(address, api_key):
    url = 'https://maps.googleapis.com/maps/api/geocode/json'
    params = {'address': address, 'key': api_key}
    r = requests.get(url, params=params, timeout=15)
    data = r.json()
    if data.get('status') == 'OK' and data.get('results'):
        loc = data['results'][0]['geometry']['location']
        return loc['lat'], loc['lng'], 'google'
    return None


def geocode_nominatim(address):
    url = 'https://nominatim.openstreetmap.org/search'
    params = {'q': address, 'format': 'json', 'limit': 1}
    headers = {'User-Agent': 'CollegeGeocoder/1.0 (your-email@example.com)'}
    r = requests.get(url, params=params, headers=headers, timeout=15)
    data = r.json()
    if data:
        return float(data[0]['lat']), float(data[0]['lon']), 'nominatim'
    return None


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--api-key', help='Google Geocoding API key (optional)')
    parser.add_argument('--out', default=str(DATASET_DIR / 'college_coords.csv'))
    args = parser.parse_args()

    # Prefer explicit CLI arg, then GOOGLE_MAPS_API_KEY environment variable
    # If not provided via CLI or environment, try loading backend/.env
    env_key = os.environ.get('GOOGLE_MAPS_API_KEY')
    if not args.api_key and not env_key:
        # attempt to read backend/.env
        env_path = PROJECT_ROOT / 'backend' / '.env'
        if env_path.exists():
            try:
                for line in env_path.read_text(encoding='utf-8').splitlines():
                    line = line.strip()
                    if not line or line.startswith('#'):
                        continue
                    if '=' in line:
                        k, v = line.split('=', 1)
                        k = k.strip()
                        v = v.strip().strip('"\'"')
                        if k and v:
                            os.environ.setdefault(k, v)
            except Exception:
                pass

    api_key = args.api_key or os.environ.get('GOOGLE_MAPS_API_KEY')

    def normalize_name(n: str) -> str:
        if not isinstance(n, str):
            return ''
        s = n.replace('\n', ' ').replace('\r', ' ').strip()
        # common fixes
        s = s.replace('COLLGE', 'COLLEGE')
        s = s.replace('INST OF', 'INSTITUTE OF')
        s = s.replace('INST', 'INSTITUTE')
        s = s.replace('TECH', 'TECHNOLOGY')
        s = s.replace(' & ', ' AND ')
        s = ' '.join(s.split())
        return s

    def build_queries(name: str, place: str):
        # Generate multiple query patterns to improve match rate
        name_clean = normalize_name(name)
        place_clean = '' if not isinstance(place, str) else place.strip()
        patterns = []
        if place_clean:
            patterns.append(f"{name_clean}, {place_clean}, Telangana, India")
            patterns.append(f"{name_clean}, {place_clean}")
            patterns.append(f"{name_clean} college, {place_clean}")
        patterns.append(f"{name_clean}, Telangana, India")
        patterns.append(f"{name_clean} college")
        patterns.append(name_clean)
        # dedupe while preserving order
        seen = set()
        out = []
        for p in patterns:
            if p and p not in seen:
                seen.add(p)
                out.append(p)
        return out

    uniq = gather_colleges()
    if uniq.empty:
        print('No college records found in datasets. Exiting.')
        return

    results = []
    total = len(uniq)
    print(f'Found {total} unique institute entries to geocode')

    failed = []
    for idx, row in uniq.iterrows():
        name = row['INSTITUTE NAME']
        place = row.get('PLACE', '')
        # sanitize place again to be safe
        place = clean_place(place)
        latlng = None

        queries = build_queries(name, place)

        # Try each query until success
        for q in queries:
            # Try Google first when key present
            if api_key:
                try:
                    out = geocode_google(q, api_key)
                    if out:
                        latlng = out
                        print(f'[{idx+1}/{total}] Google -> {name} (query: "{q}") => {out[0]:.6f},{out[1]:.6f}')
                        break
                    else:
                        # continue to next pattern
                        pass
                except Exception as e:
                    print(f'Google request failed for {name} (query: "{q}"): {e}')
                time.sleep(0.2)

            # Fallback to Nominatim
            try:
                out = geocode_nominatim(q)
                if out:
                    latlng = out
                    print(f'[{idx+1}/{total}] Nominatim -> {name} (query: "{q}") => {out[0]:.6f},{out[1]:.6f}')
                    break
                else:
                    # no result, try next pattern
                    pass
            except Exception as e:
                print(f'Nominatim failed for {name} (query: "{q}"): {e}')
            # be polite to Nominatim between queries
            time.sleep(1.1)

        if latlng:
            results.append({
                'INSTITUTE NAME': name,
                'PLACE': place,
                'lat': safe_float(latlng[0]) if latlng[0] is not None else None,
                'lng': safe_float(latlng[1]) if latlng[1] is not None else None,
                'source': latlng[2]
            })
        else:
            results.append({
                'INSTITUTE NAME': name,
                'PLACE': place,
                'lat': None,
                'lng': None,
                'source': None
            })
            failed.append({'INSTITUTE NAME': name, 'PLACE': place})

    df_out = pd.DataFrame(results)
    out_path = Path(args.out)
    df_out.to_csv(out_path, index=False)
    print(f'Wrote {len(df_out)} rows to {out_path}')


if __name__ == '__main__':
    main()
