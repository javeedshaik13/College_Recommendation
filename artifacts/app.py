import pandas as pd
import numpy as np
import streamlit as st
import os

# === Paths ===
PROJECT_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATASET_DIR = os.path.join(PROJECT_ROOT, "Datasets", "Cleaned-DS")  # fixed path

@st.cache_data
def load_data():
    df_list = []
    for i in range(1, 7):
        csv_path = os.path.join(DATASET_DIR, f"df{i}_cleaned.csv")
        if os.path.exists(csv_path):
            df_list.append(pd.read_csv(csv_path))
        else:
            print(f"⚠ Missing file: {csv_path}")

    if df_list:
        df = pd.concat(df_list, ignore_index=True)
    else:
        df = pd.DataFrame()

    # Normalize column names
    df.columns = df.columns.str.strip().str.upper()

    # Remove duplicate columns (important!)
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

    return df

# === Load dataset ===
df = load_data()

# Debug info
st.write("✅ Available columns:", df.columns.tolist())

# === Streamlit UI ===
st.title("College Recommendation System")
st.header("Enter Your Preferences")

# --- Place filter ---
if 'PLACE' in df.columns:
    place_options = df['PLACE'].dropna().unique().tolist()
else:
    place_options = []
    st.warning("⚠ 'PLACE' column not found in dataset.")
preferred_place = st.selectbox("Preferred Place", ['Select a Place'] + sorted(place_options))

# --- College type filter ---
if 'COLLEGE TYPE' in df.columns:
    college_type_options = df['COLLEGE TYPE'].dropna().unique().tolist()
else:
    college_type_options = []
    st.warning("⚠ 'COLLEGE TYPE' column not found in dataset.")
preferred_college_type = st.selectbox("Preferred College Type", ['Select College Type'] + sorted(college_type_options))

# --- Gender filter ---
preferred_gender = st.radio("Seat Category (Boys/Girls)", ['BOYS', 'GIRLS'])

# --- Branch filter ---
if 'BRANCH' in df.columns:
    branch_options = df['BRANCH'].dropna().unique().tolist()
else:
    branch_options = []
    st.warning("⚠ 'BRANCH' column not found in dataset.")
preferred_branches = st.multiselect("Preferred Branch(es)", sorted(branch_options))

# --- Caste filter ---
caste_categories_options = ['OC', 'BC_A', 'BC_B', 'BC_C', 'BC_D', 'BC_E', 'SC', 'ST', 'EWS GEN']
preferred_caste = st.selectbox("Your Caste Category", ['Select Caste'] + sorted(caste_categories_options))

# --- Rank input ---
student_rank = st.number_input("Your Rank", min_value=1, value=1000)

# === Button Action ===
if st.button("Find Colleges"):
    if preferred_place == 'Select a Place' or preferred_college_type == 'Select College Type' or preferred_caste == 'Select Caste':
        st.warning("Please select all required options.")
    else:
        # Filter base data
        df_filtered = df.copy()

        if 'PLACE' in df.columns:
            df_filtered = df_filtered[df_filtered['PLACE'].str.contains(preferred_place, case=False, na=False)]
        if 'COLLEGE TYPE' in df.columns:
            df_filtered = df_filtered[df_filtered['COLLEGE TYPE'] == preferred_college_type]

        # Branch filtering
        if preferred_branches and 'BRANCH' in df.columns:
            df_filtered = df_filtered[df_filtered['BRANCH'].isin(preferred_branches)]

        # Determine correct rank column
        if preferred_caste == 'EWS GEN':
            rank_column = 'EWS GEN OU' if preferred_gender == 'BOYS' else 'EWS GIRLS OU'
        else:
            rank_column = f"{preferred_caste} {preferred_gender}"

        if rank_column not in df_filtered.columns:
            st.error(f"⚠ Rank column '{rank_column}' not found in the data.")
        else:
            # Handle rank & tuition calculations
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
                st.warning("⚠ 'TUITION FEE' column not found, skipping tuition score.")

            # Weighted score
            df_filtered["Total_Score"] = (df_filtered["Score_Rank"] * 0.7) + (df_filtered["Score_Tuition"] * 0.3)

            # Only keep colleges where last year's closing rank >= student rank
            df_recommended = df_filtered[df_filtered[rank_column] >= student_rank].sort_values(
                by="Total_Score", ascending=False
            )

            if df_recommended.empty:
                st.info("No colleges found matching your criteria.")
            else:
                st.subheader("Recommended Colleges:")

                display_cols = []
                for col in ['INSTITUTE NAME', 'PLACE', 'DIST', 'BRANCH', 'BRANCH NAME', rank_column, 'Total_Score']:
                    if col in df_recommended.columns:
                        display_cols.append(col)

                st.dataframe(df_recommended[display_cols])
                st.markdown("### Note:")
                st.markdown("The scores are calculated based on your preferences and the available data.")
