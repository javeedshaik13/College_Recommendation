import React from "react";
import { Link } from "react-router-dom";

function Carousel() {
  return (
    <div className="container mt-5" style={{
      background: "linear-gradient(90deg, #ff9afdff, #afe066ff, #9cbabfff, #56abc3ff, #cf6f6fff)",
      backgroundSize: "300% 300%",
      height: "45vh",
      animation: "gradientBG 8s ease infinite",
      padding: "25px 25px",
      borderRadius: "20px 20px 20px 20px",
      textAlign: "center",
      color: "#222",
      boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
      paddingTop: "100px",
    }}>
      <h2 style={{ fontWeight: "bold", fontSize: "2rem" }}>
        🎓 Discover Telangana’s Premier Engineering Colleges ✨
      </h2>
      <p style={{ fontSize: "1.2rem", margin: "10px 0" }}>
        🔍 Compare rankings, explore facilities, and plan your dream career path 🚀
      </p>
      <div className="carousel-content mt-4">
        <button className="btn btn-success ms-3">Get Started
          <i className="bi bi-arrow-right ms-2"></i>
        </button>
        <Link to="/college-predictor" className="btn btn-primary ms-3">
          <i className="bi bi-search"></i> Explore College Predictor
        </Link>
      </div>
    </div>
  )
}
export default Carousel;