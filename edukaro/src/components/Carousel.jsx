import React from "react";
import { Link } from "react-router-dom";

function Carousel() {
  return (
    <div className="container" style={{
      background: "linear-gradient(90deg, #ff9afdff, #afe066ff, #9cbabfff, #56abc3ff, #cf6f6fff)",
      backgroundSize: "300% 300%",
      height: "20vh", // Half the original height (was 40vh)
      minHeight: "150px", // Ensure minimum height on very small screens
      animation: "gradientBG 8s ease infinite",
      padding: "20px 15px",
      borderRadius: "20px",
      textAlign: "center",
      color: "#222",
      boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }}>
      {/* Responsive heading - smaller on mobile */}
      <h2 className="mb-2" style={{ 
        fontWeight: "bold", 
        fontSize: "clamp(1.1rem, 4vw, 2rem)" // Responsive font size
      }}>
        🎓 Discover Telangana's Premier Engineering Colleges ✨
      </h2>
      
      {/* Responsive description - smaller on mobile */}
      <p className="mb-3" style={{ 
        fontSize: "clamp(0.9rem, 3vw, 1.2rem)", // Responsive font size
        margin: "5px 0" 
      }}>
        🔍 Compare rankings, explore facilities, and plan your dream career path 🚀
      </p>
      
      {/* Buttons side by side on all screen sizes */}
      <div className="d-flex flex-wrap justify-content-center gap-2">
        <button className="btn btn-success btn-sm">
          Get Started
          <i className="bi bi-arrow-right ms-2"></i>
        </button>
        <Link to="/college-predictor" className="btn btn-primary btn-sm">
          <i className="bi bi-search me-1"></i> 
          <span className="d-none d-sm-inline">Explore </span>College Predictor
        </Link>
      </div>
    </div>
  )
}

export default Carousel;