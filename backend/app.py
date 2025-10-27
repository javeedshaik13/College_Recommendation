from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import numpy as np
import os
import sys

# Add the artifacts directory to the path to import the prediction logic
sys.path.append(os.path.join(os.path.dirname(__file__), '..', 'artifacts'))

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# === Paths ===
PROJECT_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATASET_DIR = os.path.join(PROJECT_ROOT, "Datasets", "Cleaned-DS")

# Global variable to store loaded data
df_global = None

def load_data():
    """Load and process the college dataset"""
    global df_global
    if df_global is not None:
        return df_global
    
    df_list = []
    for i in range(1, 7):
        csv_path = os.path.join(DATASET_DIR, f"df{i}_cleaned.csv")
        if os.path.exists(csv_path):
            try:
                df_temp = pd.read_csv(csv_path)
                df_list.append(df_temp)
                print(f"✅ Loaded: {csv_path}")
            except Exception as e:
                print(f"❌ Error loading {csv_path}: {e}")
        else:
            print(f"⚠ Missing file: {csv_path}")

    if df_list:
        df = pd.concat(df_list, ignore_index=True)
    else:
        # Return empty DataFrame if no files found
        return pd.DataFrame()

    # Normalize column names
    df.columns = df.columns.str.strip().str.upper()

    # Remove duplicate columns
    df = df.loc[:, ~df.columns.duplicated()]

    # Fill missing rank columns with high value
    rank_columns = [
        'OC BOYS', 'OC GIRLS',
        'BC_A BOYS', 'BC_A GIRLS',
        'BC_B BOYS', 'BC_B GIRLS',
        'BC_C BOYS', 'BC_C GIRLS',
        'BC_D BOYS', 'BC_D GIRLS',
        'BC_E BOYS', 'BC_E GIRLS',
        'SC BOYS', 'SC GIRLS',
        'ST BOYS', 'ST GIRLS',
        'EWS GEN OU', 'EWS GIRLS OU'
    ]
    for col in rank_columns:
        if col in df.columns:
            df[col] = df[col].fillna(1_000_000)

    df_global = df
    return df

@app.route('/api/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({"status": "healthy", "message": "College Prediction API is running"})

@app.route('/api/colleges', methods=['GET'])
def get_colleges():
    """Get all colleges with basic information"""
    try:
        df = load_data()
        if df.empty:
            return jsonify({"error": "No data available"}), 500
        
        # Get unique colleges
        colleges = []
        if 'INSTITUTE NAME' in df.columns:
            unique_colleges = df['INSTITUTE NAME'].dropna().unique()
            for college_name in unique_colleges:
                college_data = df[df['INSTITUTE NAME'] == college_name].iloc[0]
                colleges.append({
                    "name": college_name,
                    "location": college_data.get('PLACE', 'Unknown'),
                    "district": college_data.get('DIST', 'Unknown'),
                    "type": college_data.get('COLLEGE TYPE', 'Unknown')
                })
        
        return jsonify({
            "colleges": colleges,
            "total_count": len(colleges)
        })
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route('/api/colleges-with-coords', methods=['GET'])
def get_colleges_with_coords():
    """Get all colleges with coordinates if available (reads college_coords.csv)"""
    try:
        df = load_data()
        if df.empty:
            return jsonify({"error": "No data available"}), 500

        # build base colleges list
        colleges = []
        if 'INSTITUTE NAME' in df.columns:
            unique_colleges = df['INSTITUTE NAME'].dropna().unique()

            def sanitize_value(v, default=None):
                # replace numpy/pandas NaN with None and strip strings
                try:
                    if pd.isna(v):
                        return default
                except Exception:
                    pass
                if isinstance(v, str):
                    s = v.strip()
                    return s if s != '' else default
                return v if v is not None else default

            for college_name in unique_colleges:
                college_data = df[df['INSTITUTE NAME'] == college_name].iloc[0]
                colleges.append({
                    "name": str(college_name),
                    "location": sanitize_value(college_data.get('PLACE'), 'Unknown'),
                    "district": sanitize_value(college_data.get('DIST'), 'Unknown'),
                    "type": sanitize_value(college_data.get('COLLEGE TYPE'), 'Unknown'),
                    "lat": None,
                    "lng": None
                })

        # try to read coords file
        coords_path = os.path.join(DATASET_DIR, 'college_coords.csv')
        if os.path.exists(coords_path):
            try:
                df_coords = pd.read_csv(coords_path)
                df_coords['INSTITUTE NAME'] = df_coords['INSTITUTE NAME'].astype(str)

                # helper to safely convert to float or None (NaN is not valid JSON)
                def safe_float(val):
                    try:
                        f = float(val)
                        if np.isfinite(f):
                            return f
                    except Exception:
                        pass
                    return None

                coords_map = {}
                for _, row in df_coords.iterrows():
                    name = str(row.get('INSTITUTE NAME'))
                    lat = safe_float(row.get('lat') if 'lat' in row else row.get('LAT'))
                    lng = safe_float(row.get('lng') if 'lng' in row else row.get('LNG'))
                    coords_map[name] = (lat, lng)

                # attach coords (only if valid numbers exist; otherwise leave as None)
                for c in colleges:
                    key = str(c['name'])
                    if key in coords_map:
                        lat, lng = coords_map[key]
                        if lat is not None and lng is not None:
                            c['lat'], c['lng'] = lat, lng
                        else:
                            # ensure explicit None instead of NaN
                            c['lat'], c['lng'] = None, None
            except Exception as e:
                print(f"❌ Error reading coords file: {e}")

        return jsonify({
            "colleges": colleges,
            "total_count": len(colleges)
        })
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/api/branches', methods=['GET'])
def get_branches():
    """Get all available branches"""
    try:
        df = load_data()
        if df.empty:
            return jsonify({"error": "No data available"}), 500
        
        branches = []
        if 'BRANCH' in df.columns:
            unique_branches = df['BRANCH'].dropna().unique()
            branches = sorted(unique_branches.tolist())
        
        return jsonify({"branches": branches})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/api/locations', methods=['GET'])
def get_locations():
    """Get all available locations"""
    try:
        df = load_data()
        if df.empty:
            return jsonify({"error": "No data available"}), 500
        
        locations = []
        if 'PLACE' in df.columns:
            unique_locations = df['PLACE'].dropna().unique()
            locations = sorted(unique_locations.tolist())
        
        return jsonify({"locations": locations})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/api/predict', methods=['POST'])
def predict_colleges():
    """
    Predict colleges based on user input using the same logic as app.py
    """
    try:
        # Get request data
        data = request.get_json()
        
        # Validate required fields
        required_fields = ['rank', 'branches', 'category']
        for field in required_fields:
            if field not in data or not data[field]:
                return jsonify({"error": f"Missing required field: {field}"}), 400
        
        student_rank = int(data['rank'])
        preferred_branches = data['branches']
        preferred_caste = data['category']
        preferred_place = data.get('location', '')
        preferred_college_type = data.get('collegeType', '')
        
        # Load data
        df = load_data()
        if df.empty:
            return jsonify({"error": "No dataset available"}), 500
        
        # Filter base data (same logic as app.py)
        df_filtered = df.copy()
        
        # Apply filters
        if preferred_place and 'PLACE' in df.columns:
            df_filtered = df_filtered[df_filtered['PLACE'].str.contains(preferred_place, case=False, na=False)]
        
        if preferred_college_type and 'COLLEGE TYPE' in df.columns:
            df_filtered = df_filtered[df_filtered['COLLEGE TYPE'] == preferred_college_type]
        
        # Branch filtering
        if preferred_branches and 'BRANCH' in df.columns:
            df_filtered = df_filtered[df_filtered['BRANCH'].isin(preferred_branches)]
        
        # Determine correct rank column (same logic as app.py)
        if preferred_caste == 'EWS GEN':
            rank_column = 'EWS GEN OU'
        elif preferred_caste == 'EWS GIRLS':
            rank_column = 'EWS GIRLS OU'
        else:
            rank_column = preferred_caste
        
        if rank_column not in df_filtered.columns:
            return jsonify({"error": f"Rank column '{rank_column}' not found in the data"}), 400
        
        # Handle rank & tuition calculations (same logic as app.py)
        max_rank_value = 1_000_000
        df_filtered[rank_column] = df_filtered[rank_column].replace([np.inf, -np.inf], np.nan).fillna(max_rank_value)
        
        df_filtered["Score_Rank"] = df_filtered[rank_column].apply(
            lambda x: max_rank_value - x if x <= max_rank_value else 0
        )
        
        if 'TUITION FEE' in df_filtered.columns:
            max_fee = df_filtered['TUITION FEE'].replace([np.inf, -np.inf], np.nan).fillna(0).max()
            df_filtered["Score_Tuition"] = df_filtered["TUITION FEE"].apply(lambda x: max_fee - x if max_fee > 0 else 0)
        else:
            df_filtered["Score_Tuition"] = 0
        
        # Weighted score (same logic as app.py)
        df_filtered["Total_Score"] = (df_filtered["Score_Rank"] * 0.7) + (df_filtered["Score_Tuition"] * 0.3)
        
        # Only keep colleges where last year's closing rank >= student rank
        df_recommended = df_filtered[df_filtered[rank_column] >= student_rank].sort_values(
            by="Total_Score", ascending=False
        )
        
        if df_recommended.empty:
            return jsonify({
                "predictions": [],
                "message": "No colleges found matching your criteria and rank",
                "total_count": 0
            })
        
        # Format results
        predictions = []
        for _, row in df_recommended.iterrows():
            prediction = {
                "college_name": row.get('INSTITUTE NAME', 'Unknown'),
                "location": row.get('PLACE', 'Unknown'),
                "district": row.get('DIST', 'Unknown'),
                "branch": row.get('BRANCH', 'Unknown'),
                "branch_name": row.get('BRANCH NAME', 'Unknown'),
                "cutoff_rank": int(row[rank_column]) if pd.notna(row[rank_column]) and row[rank_column] != max_rank_value else None,
                "total_score": float(row['Total_Score']) if pd.notna(row['Total_Score']) else 0,
                "tuition_fee": int(row.get('TUITION FEE', 0)) if pd.notna(row.get('TUITION FEE', 0)) else 0,
                "college_type": row.get('COLLEGE TYPE', 'Unknown'),
                "probability": min(95, max(10, int(100 - ((student_rank - row[rank_column]) / row[rank_column]) * 100))) if row[rank_column] > 0 else 50
            }
            predictions.append(prediction)
        
        return jsonify({
            "predictions": predictions[:20],  # Limit to top 20 results
            "total_count": len(predictions),
            "filters_applied": {
                "rank": student_rank,
                "category": preferred_caste,
                "branches": preferred_branches,
                "location": preferred_place or "Any",
                "college_type": preferred_college_type or "Any"
            }
        })
        
    except ValueError as e:
        return jsonify({"error": f"Invalid input: {str(e)}"}), 400
    except Exception as e:
        return jsonify({"error": f"Prediction failed: {str(e)}"}), 500

@app.route('/api/college-rankings', methods=['GET'])
def get_college_rankings():
    """Get college rankings for a specific category"""
    try:
        category = request.args.get('category', 'OC BOYS')
        location = request.args.get('location', '')
        
        df = load_data()
        if df.empty:
            return jsonify({"error": "No data available"}), 500
        
        # Filter by location if specified
        df_filtered = df.copy()
        if location and location != 'All' and 'PLACE' in df.columns:
            df_filtered = df_filtered[df_filtered['PLACE'].str.contains(location, case=False, na=False)]
        
        # Group by college and get best rank for each
        if 'INSTITUTE NAME' in df_filtered.columns and category in df_filtered.columns:
            college_rankings = []
            
            for college_name in df_filtered['INSTITUTE NAME'].dropna().unique():
                college_data = df_filtered[df_filtered['INSTITUTE NAME'] == college_name]
                
                # Get the best (lowest) rank for this college in the category
                ranks = college_data[category].dropna()
                if len(ranks) > 0:
                    best_rank = ranks.min()
                    if best_rank < 1_000_000:  # Only include colleges with valid ranks
                        college_info = college_data.iloc[0]
                        college_rankings.append({
                            "name": college_name,
                            "location": college_info.get('PLACE', 'Unknown'),
                            "district": college_info.get('DIST', 'Unknown'),
                            "type": college_info.get('COLLEGE TYPE', 'Unknown'),
                            "cutoff_rank": int(best_rank),
                            "branches": college_data['BRANCH'].dropna().unique().tolist()
                        })
            
            # Sort by cutoff rank
            college_rankings.sort(key=lambda x: x['cutoff_rank'])
            
            return jsonify({
                "rankings": college_rankings,
                "category": category,
                "location_filter": location or "All",
                "total_count": len(college_rankings)
            })
        
        return jsonify({"rankings": [], "total_count": 0})
        
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/api/dataset-info', methods=['GET'])
def get_dataset_info():
    """Get information about the loaded dataset"""
    try:
        df = load_data()
        if df.empty:
            return jsonify({"error": "No data available"}), 500
        
        info = {
            "total_records": len(df),
            "columns": df.columns.tolist(),
            "unique_colleges": df['INSTITUTE NAME'].nunique() if 'INSTITUTE NAME' in df.columns else 0,
            "unique_branches": df['BRANCH'].nunique() if 'BRANCH' in df.columns else 0,
            "unique_locations": df['PLACE'].nunique() if 'PLACE' in df.columns else 0,
            "data_files_loaded": []
        }
        
        # Check which data files exist
        for i in range(1, 7):
            csv_path = os.path.join(DATASET_DIR, f"df{i}_cleaned.csv")
            if os.path.exists(csv_path):
                info["data_files_loaded"].append(f"df{i}_cleaned.csv")
        
        return jsonify(info)
        
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    print("🚀 Starting College Prediction API...")
    print(f"📁 Dataset directory: {DATASET_DIR}")
    
    # Load data on startup
    try:
        df = load_data()
        print(f"✅ Dataset loaded successfully with {len(df)} records")
        print(f"📊 Available columns: {df.columns.tolist()}")
    except Exception as e:
        print(f"❌ Error loading dataset: {e}")
    
    app.run(debug=True, host='0.0.0.0', port=5000)
