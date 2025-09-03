# College Recommendation System

A comprehensive college recommendation and prediction system for engineering colleges in Telangana, built with React frontend and Flask backend.

## Features

### 🏆 College Rankings
- **Responsive Design**: Shows top 3 colleges on mobile, all colleges on desktop
- **View More Button**: Expandable list for mobile users
- **Real-time Filtering**: Filter by category and location
- **Comprehensive Data**: NIRF rankings, cutoffs, placements, fees

### 🎯 College Predictor
- **Live Predictions**: Based on your `app.py` prediction logic
- **Real Dataset Integration**: Uses your cleaned CSV datasets
- **Smart Filtering**: By rank, branches, category, location, college type
- **Probability Scoring**: Shows admission chances for each college

### 📊 College Statistics
- **Interactive Charts**: Bar, Pie, Line, and Histogram views
- **Dynamic Filtering**: By college, branch, category
- **CSV Data Integration**: Loads from your cleaned datasets

## Architecture

### Frontend (React + Vite)
- **Location**: `edukaro/`
- **Components**: CollegeRankings, CollegePredictor, CollegeStats
- **Responsive**: Mobile-first design with Bootstrap
- **API Integration**: Real-time backend communication

### Backend (Flask)
- **Location**: `backend/`
- **Prediction Logic**: Direct integration of your `artifacts/app.py`
- **Dataset Loading**: Automatic loading of cleaned CSV files
- **RESTful APIs**: Complete API endpoints for all features

## Quick Start

### 1. Start Backend
```bash
# Option 1: Use batch file
start_backend.bat

# Option 2: Manual start
cd backend
pip install -r requirements.txt
python app.py
```

### 2. Start Frontend
```bash
# Option 1: Use batch file
start_frontend.bat

# Option 2: Manual start
cd edukaro
npm install
npm run dev
```

### 3. Open Browser
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

## API Endpoints

### Health Check
- `GET /api/health` - Check backend status

### Data Endpoints
- `GET /api/colleges` - Get all colleges
- `GET /api/branches` - Get all branches
- `GET /api/locations` - Get all locations
- `GET /api/dataset-info` - Dataset information

### Prediction
- `POST /api/predict` - Predict colleges based on user input
- `GET /api/college-rankings` - Get ranked colleges by category

## Dataset Integration

The system automatically loads your cleaned datasets from:
```
Datasets/Cleaned-DS/
├── df1_cleaned.csv
├── df2_cleaned.csv
├── df3_cleaned.csv
├── df4_cleaned.csv
├── df5_cleaned.csv
└── df6_cleaned.csv
```

## Prediction Logic

Uses the exact same logic as your `artifacts/app.py`:
- **Rank-based filtering**: Only shows colleges within reach
- **Weighted scoring**: 70% rank score + 30% tuition score
- **Category mapping**: Handles all caste categories correctly
- **Branch filtering**: Multiple branch selection support

## Mobile Responsiveness

### College Rankings
- **Mobile**: Shows top 3 colleges with "View More" button
- **Desktop**: Shows all colleges in full layout
- **Responsive Cards**: Adapts to screen size

### College Predictor
- **Responsive Forms**: Touch-friendly inputs
- **Collapsible Sections**: Branch selection dropdown
- **Mobile Optimized**: Proper spacing and sizing

## Technologies Used

### Frontend
- React 19.1.1
- Vite 7.1.0
- Bootstrap Icons
- Chart.js & React-ChartJS-2
- React Router DOM
- PapaParse (CSV parsing)

### Backend
- Flask 2.3.3
- Flask-CORS 4.0.0
- Pandas 2.0.3
- NumPy 1.24.3

## File Structure

```
College_Recommendation/
├── edukaro/                    # React Frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── CollegeRankings.jsx
│   │   │   ├── CollegePredictor.jsx
│   │   │   └── CollegeStats.jsx
│   │   └── services/
│   │       └── api.js          # API service
│   └── package.json
├── backend/                    # Flask Backend
│   ├── app.py                  # Main API server
│   ├── config.py               # Configuration
│   └── requirements.txt
├── artifacts/
│   └── app.py                  # Original prediction logic
├── Datasets/
│   └── Cleaned-DS/             # Your CSV datasets
├── start_backend.bat           # Backend startup script
├── start_frontend.bat          # Frontend startup script
└── README.md
```

## Key Features Implemented

✅ **Responsive College Rankings**: Top 3 on mobile, all on desktop  
✅ **View More Button**: Mobile-friendly expansion  
✅ **Backend API**: Complete Flask server with your prediction logic  
✅ **Real Dataset Integration**: Uses your cleaned CSV files  
✅ **Live Predictions**: Real-time college recommendations  
✅ **Error Handling**: Graceful fallbacks and user feedback  
✅ **Modern UI**: Clean, responsive design with animations  

## Usage

1. **College Rankings**: Browse top colleges by category and location
2. **College Predictor**: Enter your rank and preferences for personalized recommendations
3. **College Stats**: Analyze college data with interactive charts

The system maintains your existing UI design while adding powerful backend functionality and responsive features.