// API service for college prediction backend
const API_BASE_URL = 'http://localhost:5000/api';

class ApiService {
  async request(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || `HTTP error! status: ${response.status}`);
      }

      return data;
    } catch (error) {
      console.error(`API request failed: ${endpoint}`, error);
      throw error;
    }
  }

  // Health check
  async healthCheck() {
    return this.request('/health');
  }

  // Get all colleges
  async getColleges() {
    return this.request('/colleges');
  }

  // Get colleges with coordinates (used by map/location component)
  async getCollegesWithCoords() {
    return this.request('/colleges-with-coords');
  }

  // Get all branches
  async getBranches() {
    return this.request('/branches');
  }

  // Get all locations
  async getLocations() {
    return this.request('/locations');
  }

  // Predict colleges based on user input
  async predictColleges(data) {
    return this.request('/predict', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  // Get college rankings
  async getCollegeRankings(category = 'OC BOYS', location = '') {
    const params = new URLSearchParams();
    if (category) params.append('category', category);
    if (location) params.append('location', location);
    
    return this.request(`/college-rankings?${params.toString()}`);
  }

  // Get dataset information
  async getDatasetInfo() {
    return this.request('/dataset-info');
  }
}

export default new ApiService();
