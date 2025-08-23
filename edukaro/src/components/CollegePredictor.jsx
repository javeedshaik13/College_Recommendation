import React, { useState } from "react";

const branchList = [
  { code: "CSE", name: "Computer Science and Engineering" },
  { code: "CSM", name: "Computer Science and Engineering (AI & ML / Mathematics specialization)" },
  { code: "ECE", name: "Electronics and Communication Engineering" },
  { code: "EEE", name: "Electrical and Electronics Engineering" },
  { code: "MEC", name: "Mechanical Engineering" },
  { code: "CIV", name: "Civil Engineering" },
  { code: "CSD", name: "Computer Science and Design" },
  { code: "CSO", name: "Computer Science and Engineering (Cyber Security / Systems)" },
  { code: "INF", name: "Information Technology" },
  { code: "MIN", name: "Mining Engineering" },
  { code: "PHM", name: "Pharmacy" },
  { code: "PHD", name: "Pharmacy Doctoral / Pharmaceutical Technology" },
  { code: "CSC", name: "Computer Science and Engineering (Cloud Computing / Core CS)" },
  { code: "AID", name: "Artificial Intelligence and Data Science" },
  { code: "CSW", name: "Computer Science and Engineering (Software Engineering)" },
  { code: "CSN", name: "Computer Science and Networking" },
  { code: "BME", name: "Biomedical Engineering" },
  { code: "CHE", name: "Chemical Engineering" },
  { code: "CSB", name: "Computer Science and Business Systems" },
  { code: "PHE", name: "Public Health / Pharmaceutical Engineering" },
  { code: "AGR", name: "Agricultural Engineering" },
  { code: "AIM", name: "Artificial Intelligence and Machine Learning" },
  { code: "BIO", name: "Biotechnology" },
  { code: "CIC", name: "Computer and Information Science / Cybersecurity and Communication" },
  { code: "DRG", name: "Drug Technology / Pharmaceutical Drug Design" },
  { code: "FDT", name: "Fashion Design and Technology" },
  { code: "CSG", name: "Computer Science and Game Development / Graphics" },
  { code: "CSI", name: "Computer Science and Information Technology" },
  { code: "EIE", name: "Electronics and Instrumentation Engineering" },
  { code: "AI", name: "Artificial Intelligence" },
  { code: "CST", name: "Computer Science and Technology" },
  { code: "ETM", name: "Electronics and Telematics Engineering" },
  { code: "ANE", name: "Anaesthesiology / Applied Nuclear Engineering" },
  { code: "ECM", name: "Electronics and Computer Engineering" },
  { code: "DTD", name: "Design Technology and Digital Manufacturing" },
  { code: "FSP", name: "Food Science and Processing" },
  { code: "PLG", name: "Plastics / Polymer Engineering" },
  { code: "MET", name: "Metallurgical Engineering" },
  { code: "MMS", name: "Manufacturing Management and Sciences / Materials Science" },
  { code: "MTE", name: "Mechatronics Engineering" },
  { code: "TEX", name: "Textile Engineering" },
  { code: "ECI", name: "Electronics and Computer Science / Control Instrumentation" },
  { code: "MCT", name: "Mechanical and Computer Technology" },
  { code: "MMT", name: "Metallurgy and Materials Technology" },
  { code: "AUT", name: "Automobile Engineering" },
  { code: "CME", name: "Construction Management Engineering" }
];

const categories = [
  "OC BOYS", "OC GIRLS", "BC_A BOYS", "BC_A GIRLS",
  "BC_B BOYS", "BC_B GIRLS", "BC_C BOYS", "BC_C GIRLS",
  "BC_D BOYS", "BC_D GIRLS", "BC_E BOYS", "BC_E GIRLS",
  "SC BOYS", "SC GIRLS", "ST BOYS", "ST GIRLS",
  "EWS GEN OU", "EWS GIRLS OU"
];

const locations = [
  "BANDLAGUDA", "GHATKESAR", "HAYATHNAGAR", "KOTHAGUDEM", "KODAD",
  "BOWRAMPET", "PATANCHERU", "CHILKUR", "UPPAL", "WARANGAL", "HYDERABAD"
];

const coed = ["COED", "GIRLS"];

// Sample college data for prediction
const sampleColleges = [
  {
    name: "IIIT Hyderabad",
    location: "HYDERABAD",
    branches: ["CSE", "ECE", "EEE"],
    cutoffs: { "OC BOYS": 150, "OC GIRLS": 180, "BC_A BOYS": 300 },
    type: "COED",
    logo: "https://cdn.siasat.com/wp-content/uploads/2020/05/IIIT-Hyderabad.jpg"
  },
  {
    name: "JNTUH College of Engineering",
    location: "HYDERABAD",
    branches: ["CSE", "ECE", "MEC", "CIV", "EEE"],
    cutoffs: { "OC BOYS": 800, "OC GIRLS": 900, "BC_A BOYS": 1200 },
    type: "COED",
    logo: "https://pbs.twimg.com/profile_images/1559799667856388096/oNNEFVfk_400x400.jpg"
  },
  {
    name: "CBIT Hyderabad",
    location: "HYDERABAD",
    branches: ["CSE", "INF", "ECE", "MEC"],
    cutoffs: { "OC BOYS": 1200, "OC GIRLS": 1400, "BC_A BOYS": 1800 },
    type: "COED",
    logo: "https://upload.wikimedia.org/wikipedia/en/6/68/Chaitanya_Bharathi_Institute_of_Technology_logo.png"
  },
  {
    name: "VNR VJIET",
    location: "HYDERABAD",
    branches: ["CSE", "ECE", "EEE", "MEC", "INF"],
    cutoffs: { "OC BOYS": 1500, "OC GIRLS": 1700, "BC_A BOYS": 2000 },
    type: "COED",
    logo: "https://images.shiksha.com/mediadata/images/1747210261phpWUDWnz.jpeg"
  },
  {
    name: "Vasavi College of Engineering",
    location: "HYDERABAD",
    branches: ["CSE", "ECE", "EEE", "MEC", "CIV"],
    cutoffs: { "OC BOYS": 2000, "OC GIRLS": 2200, "BC_A BOYS": 2500 },
    type: "COED",
    logo: "https://bajraionline.com/wp-content/uploads/2022/08/Vasavi-College-of-Engineering-logo.gif"
  },
  {
    name: "CVR College of Engineering",
    location: "HYDERABAD",
    branches: ["CSE", "ECE", "EEE", "MEC", "INF"],
    cutoffs: { "OC BOYS": 1800, "OC GIRLS": 2000, "BC_A BOYS": 2300 },
    type: "COED",
    logo: "https://upload.wikimedia.org/wikipedia/en/4/4c/Cvrh.ibp.jpg"
  }
];

function CollegePredictor() {
  const [formData, setFormData] = useState({
    rank: '',
    branches: [],
    category: '',
    location: '',
    collegeType: ''
  });

  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showBranchDropdown, setShowBranchDropdown] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleBranchToggle = (branchCode) => {
    setFormData(prev => ({
      ...prev,
      branches: prev.branches.includes(branchCode)
        ? prev.branches.filter(b => b !== branchCode)
        : [...prev.branches, branchCode]
    }));
  };

  const predictColleges = () => {
    if (!formData.rank || formData.branches.length === 0 || !formData.category) {
      alert('Please fill in your rank, select at least one branch, and choose your category');
      return;
    }

    setIsLoading(true);

    // Simulate prediction logic
    setTimeout(() => {
      const userRank = parseInt(formData.rank);
      const predictions = [];

      sampleColleges.forEach(college => {
        // Check location filter
        if (formData.location && college.location !== formData.location) {
          return;
        }

        // Check college type filter
        if (formData.collegeType && college.type !== formData.collegeType) {
          return;
        }

        // Check if college has any of the selected branches
        const commonBranches = college.branches.filter(branch => 
          formData.branches.includes(branch)
        );

        if (commonBranches.length === 0) {
          return;
        }

        // Check cutoff for the category
        const cutoff = college.cutoffs[formData.category];
        if (cutoff && userRank <= cutoff + 500) { // Adding some buffer
          const probability = Math.max(10, Math.min(95, 100 - ((userRank - cutoff) / cutoff) * 100));
          
          commonBranches.forEach(branch => {
            const branchInfo = branchList.find(b => b.code === branch);
            predictions.push({
              college: college.name,
              logo: college.logo,
              branch: `${branch} - ${branchInfo?.name || branch}`,
              probability: `${Math.round(probability)}%`,
              cutoff: cutoff || "N/A",
              location: college.location
            });
          });
        }
      });

      // Sort by probability
      predictions.sort((a, b) => 
        parseInt(b.probability) - parseInt(a.probability)
      );

      setResults(predictions.slice(0, 10)); // Show top 10 results
      setIsLoading(false);
    }, 2000);
  };

  const getBranchName = (code) => {
    const branch = branchList.find(b => b.code === code);
    return branch ? `${code} - ${branch.name}` : code;
  };

  return (
    <>
      {/* Header Section */}
      <div
        className="container"
        style={{
          background: "linear-gradient(90deg, #ff9afdff, #afe066ff, #9cbabfff, #56abc3ff, #cf6f6fff)",
          backgroundSize: "300% 300%",
          minHeight: "40vh",
          animation: "gradientBG 8s ease infinite",
          borderRadius: "20px",
          textAlign: "center",
          color: "#222",
          boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
          padding: "60px 20px",
          marginTop: "20px"
        }}
      >
        <h2 style={{ fontWeight: "bold", fontSize: "2rem" }}>
          🎓 Welcome To My College Predictor Engineering Colleges ✨
        </h2>
        <p style={{ fontSize: "1.2rem", margin: "10px 0" }}>
          🔍 Explore facilities, and plan your dream career path 🚀
        </p>
      </div>

      {/* Main Form */}
      <div className="container mt-4 mb-5">
        <div 
          className="card rounded-4 p-4 shadow-lg" 
          style={{ 
            background: "linear-gradient(135deg, #6dadedff, #9bb5ff)",
            border: "none"
          }}
        >
          <h2 className="text-center mb-3 text-white fw-bold">🎯 College Predictor</h2>
          <p className="text-center mb-4 text-white opacity-90">
            Use our predictor to find the best engineering colleges in Telangana based on your preferences.
          </p>

          <div
            className="p-4 rounded-3"
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              background: "rgba(255,255,255,0.95)",
              backdropFilter: "blur(10px)",
              boxShadow: "0 8px 25px rgba(0,0,0,0.1)"
            }}
          >
            <div className="row g-4">
              {/* Rank Input */}
              <div className="col-md-6">
                <label className="fw-bold mb-2 d-block">
                  <i className="bi bi-trophy-fill text-warning me-2"></i>
                  Enter Your Rank:
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter your rank (e.g., 1500)"
                  value={formData.rank}
                  onChange={(e) => handleInputChange('rank', e.target.value)}
                  style={{ 
                    height: "50px", 
                    fontSize: "1rem",
                    borderRadius: "10px",
                    border: "2px solid #e9ecef"
                  }}
                  min="1"
                />
              </div>

              {/* Category Selection */}
              <div className="col-md-6">
                <label className="fw-bold mb-2 d-block">
                  <i className="bi bi-person-badge-fill text-info me-2"></i>
                  Select Your Category:
                </label>
                <select
                  className="form-select form-select-lg"
                  value={formData.category}
                  onChange={(e) => handleInputChange('category', e.target.value)}
                  style={{ 
                    height: "50px", 
                    fontSize: "1rem",
                    borderRadius: "10px",
                    border: "2px solid #e9ecef"
                  }}
                >
                  <option value="">Choose Category</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Branch Selection */}
              <div className="col-12">
                <label className="fw-bold mb-2 d-block">
                  <i className="bi bi-diagram-3-fill text-primary me-2"></i>
                  Select Your Preferred Branches:
                </label>
                <div className="position-relative">
                  <button
                    type="button"
                    className="form-control form-control-lg text-start d-flex justify-content-between align-items-center"
                    onClick={() => setShowBranchDropdown(!showBranchDropdown)}
                    style={{ 
                      height: "50px", 
                      fontSize: "1rem",
                      borderRadius: "10px",
                      border: "2px solid #e9ecef",
                      background: "white"
                    }}
                  >
                    <span className="text-muted">
                      {formData.branches.length === 0 
                        ? "Select branches..." 
                        : `${formData.branches.length} branch${formData.branches.length > 1 ? 'es' : ''} selected`
                      }
                    </span>
                    <i className={`bi bi-chevron-${showBranchDropdown ? 'up' : 'down'}`}></i>
                  </button>
                  
                  {showBranchDropdown && (
                    <div 
                      className="position-absolute w-100 bg-white border rounded-3 shadow-lg p-3 mt-2"
                      style={{ 
                        zIndex: 1000, 
                        maxHeight: "300px", 
                        overflowY: "auto",
                        border: "2px solid #e9ecef"
                      }}
                    >
                      <div className="row g-2">
                        {branchList.map(branch => (
                          <div key={branch.code} className="col-md-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id={`branch-${branch.code}`}
                                checked={formData.branches.includes(branch.code)}
                                onChange={() => handleBranchToggle(branch.code)}
                              />
                              <label 
                                className="form-check-label small user-select-none" 
                                htmlFor={`branch-${branch.code}`}
                                style={{ cursor: "pointer", fontSize: "0.85rem" }}
                              >
                                <strong>{branch.code}</strong> - {branch.name}
                              </label>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                {formData.branches.length > 0 && (
                  <div className="mt-2">
                    <small className="text-muted">Selected branches:</small>
                    <div className="d-flex flex-wrap gap-1 mt-1">
                      {formData.branches.map(code => (
                        <span key={code} className="badge bg-primary">
                          {code}
                          <button 
                            type="button"
                            className="btn-close btn-close-white ms-1"
                            style={{ fontSize: "0.6rem" }}
                            onClick={() => handleBranchToggle(code)}
                          ></button>
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Location Selection */}
              <div className="col-md-6">
                <label className="fw-bold mb-2 d-block">
                  <i className="bi bi-geo-alt-fill text-danger me-2"></i>
                  Preferred Location:
                </label>
                <select
                  className="form-select form-select-lg"
                  value={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  style={{ 
                    height: "50px", 
                    fontSize: "1rem",
                    borderRadius: "10px",
                    border: "2px solid #e9ecef"
                  }}
                >
                  <option value="">Any Location</option>
                  {locations.map(location => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
              </div>

              {/* College Type */}
              <div className="col-md-6">
                <label className="fw-bold mb-2 d-block">
                  <i className="bi bi-building text-success me-2"></i>
                  College Type:
                </label>
                <select
                  className="form-select form-select-lg"
                  value={formData.collegeType}
                  onChange={(e) => handleInputChange('collegeType', e.target.value)}
                  style={{ 
                    height: "50px", 
                    fontSize: "1rem",
                    borderRadius: "10px",
                    border: "2px solid #e9ecef"
                  }}
                >
                  <option value="">Any Type</option>
                  {coed.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* Predict Button */}
              <div className="col-12 text-center mt-4">
                <button 
                  className="btn btn-lg px-5 py-3 fw-bold shadow-lg"
                  onClick={predictColleges}
                  disabled={isLoading}
                  style={{
                    background: "linear-gradient(45deg, #28a745, #20c997)",
                    border: "none",
                    borderRadius: "15px",
                    color: "white",
                    fontSize: "1.2rem",
                    minWidth: "250px",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    if (!isLoading) {
                      e.target.style.transform = "translateY(-2px)";
                      e.target.style.boxShadow = "0 8px 25px rgba(40, 167, 69, 0.3)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)";
                  }}
                >
                  {isLoading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                      Predicting Your Colleges...
                    </>
                  ) : (
                    <>
                      <i className="bi bi-search me-2"></i>
                      Predict My College
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div
            className="mt-4 p-4 rounded-3"
            style={{
              minHeight: "200px",
              background: "rgba(255,255,255,0.9)",
              backdropFilter: "blur(10px)",
              boxShadow: "0 8px 25px rgba(0,0,0,0.1)"
            }}
          >
            {results.length === 0 ? (
              <div className="text-center py-5">
                <div className="mb-4">
                  <i className="bi bi-mortarboard display-1 text-muted opacity-50"></i>
                </div>
                <h4 className="text-muted fw-bold">🎯 Predicted Colleges & Branches will appear here...</h4>
                <p className="text-muted">Fill in your details above and click "Predict My College" to see your options</p>
              </div>
            ) : (
              <div>
                <h3 className="text-center mb-4 fw-bold text-dark">
                  🎉 Your Predicted Colleges & Branches
                </h3>
                <div className="row g-3">
                  {results.map((result, index) => (
                    <div key={index} className="col-md-6 col-lg-4">
                      <div 
                        className="card h-100 shadow-sm border-0"
                        style={{ borderRadius: "12px" }}
                      >
                        <div className="card-body p-4">
                          <div className="d-flex align-items-center mb-3">
                            <img
                              src={result.logo}
                              alt={`${result.college} Logo`}
                              style={{
                                width: "50px",
                                height: "50px",
                                borderRadius: "50%",
                                objectFit: "cover",
                                marginRight: "10px",
                              }}
                            />
                            <div className="flex-grow-1">
                              <h6 className="fw-bold text-primary mb-1">{result.college}</h6>
                              <span className="badge bg-success">{result.probability}</span>
                            </div>
                          </div>
                          
                          <div className="mb-2">
                            <small className="text-muted fw-bold">Branch:</small>
                            <p className="mb-1 small">{result.branch}</p>
                          </div>
                          
                          <div className="mb-2">
                            <small className="text-muted fw-bold">Cutoff Rank:</small>
                            <p className="mb-1">{result.cutoff}</p>
                          </div>
                          
                          <div className="mb-3">
                            <small className="text-muted fw-bold">Location:</small>
                            <span className="badge bg-info ms-2">{result.location}</span>
                          </div>

                          <div className="progress" style={{ height: "6px" }}>
                            <div 
                              className="progress-bar bg-success" 
                              role="progressbar" 
                              style={{ width: result.probability }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="text-center mt-4">
                  <button 
                    className="btn btn-outline-primary"
                    onClick={() => {
                      setResults([]);
                      setFormData({
                        rank: '',
                        branches: [],
                        category: '',
                        location: '',
                        collegeType: ''
                      });
                    }}
                  >
                    <i className="bi bi-arrow-counterclockwise me-2"></i>
                    New Search
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes gradientBG {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </>
  );
}

export default CollegePredictor;