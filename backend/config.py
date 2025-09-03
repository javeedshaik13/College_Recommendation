import os

class Config:
    """Configuration class for the Flask application"""
    
    # Flask settings
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'dev-secret-key-change-in-production'
    DEBUG = os.environ.get('FLASK_DEBUG', 'True').lower() == 'true'
    
    # CORS settings
    CORS_ORIGINS = ['http://localhost:3000', 'http://localhost:5173', 'http://127.0.0.1:3000', 'http://127.0.0.1:5173']
    
    # Dataset settings
    PROJECT_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    DATASET_DIR = os.path.join(PROJECT_ROOT, "Datasets", "Cleaned-DS")
    
    # API settings
    MAX_PREDICTIONS = 50
    DEFAULT_CATEGORY = 'OC BOYS'
    
    # Cache settings
    CACHE_TIMEOUT = 3600  # 1 hour in seconds
