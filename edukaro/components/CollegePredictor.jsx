import React, { useState } from "react";
import Select from "react-select";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

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
  "BANDLAGUDA","GHATKESAR","HAYATHNAGAR","KOTHAGUDEM","KODAD",
  "BOWRAMPET","PATANCHERU","CHILKUR","UPPAL","WARANGAL","HYDERABAD"
];

const coed = ["COED", "GIRLS"];

const options = branchList.map((b) => ({
  value: b.code,
  label: `${b.code} - ${b.name}`
}));

function CollegePredictor() {
  const [selectedBranches, setSelectedBranches] = useState([]);

  return (
    <>
      <Navbar />
      <div
        className="container mt-5"
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
          marginTop: "80px"
        }}
      >
        <h2 style={{ fontWeight: "bold", fontSize: "2rem" }}>
          🎓 Welcome To My College Predictor Engineering Colleges ✨
        </h2>
        <p style={{ fontSize: "1.2rem", margin: "10px 0" }}>
          🔍 Explore facilities, and plan your dream career path 🚀
        </p>
      </div>

      <div className="container mt-4">
        <div className="card rounded-4 p-4" style={{ backgroundColor: "#6dadedff" }}>
          <h2 className="text-center mb-3">College Predictor</h2>
          <p className="text-center mb-4">
            Use our predictor to find the best engineering colleges in Telangana based on your preferences.
          </p>

          <div
            style={{
              maxWidth: "600px",
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              gap: "20px"
            }}
          >
            {/* Rank Input */}
            <div>
              <label className="fw-bold mb-2 d-block text-center">Please enter your rank:</label>
              <input
                type="text"
                className="form-control text-center"
                placeholder="Enter your rank(> 0)"
                style={{ height: "50px", fontSize: "1rem" }}
              />
            </div>

            {/* Branch */}
            <div>
              <label className="fw-bold mb-2 d-block text-center">Select your branch:</label>
              <Select
                isMulti
                options={options}
                value={selectedBranches}
                onChange={setSelectedBranches}
                styles={{ container: (base) => ({ ...base, textAlign: "left" }) }}
              />
            </div>

            {/* Caste Select */}
            <div>
              <label className="fw-bold mb-2 d-block text-center">Select your caste:</label>
              <Select options={categories.map((c) => ({ value: c, label: c }))} />
            </div>

            {/* Location Select */}
            <div>
              <label className="fw-bold mb-2 d-block text-center">Select your preferred location:</label>
              <Select options={locations.map((loc) => ({ value: loc, label: loc }))} />
            </div>

            {/* College Type */}
            <div>
              <label className="fw-bold mb-2 d-block text-center">Select College Type:</label>
              <Select options={coed.map((c) => ({ value: c, label: c }))} />
            </div>

            {/* Predict Button */}
            <button className="btn btn-success mt-3" style={{ height: "50px", fontSize: "1.1rem" }}>
              Predict My College
            </button>
          </div>

          {/* Results */}
          <div
            className="mt-5"
            style={{
              minHeight: "150px",
              background: "#f8f9fa",
              borderRadius: "12px",
              padding: "20px",
              textAlign: "center"
            }}
          >
            <h5 className="fw-bold">🎯 Predicted Colleges & Branches will appear here...</h5>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default CollegePredictor;
