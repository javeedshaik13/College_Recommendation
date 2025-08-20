import React from "react";
import { Link } from "react-router-dom";

function Cards() {
  return (
    <div className="container mt-3" style={{
          background: "linear-gradient(90deg, #ff9a9e, #c4fac5ff, #fbc2eb, #a1c4fd, #c2e9fb)",
          backgroundSize: "300% 300%",
          animation: "gradientBG 8s ease infinite",
          padding: "28px 28px",
          borderRadius: "20px 20px 20px 20px",
          textAlign: "center",
          color: "#222",
          boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
          paddingTop: "100px",
          marginTop: "4px"
        }}>
      <div className="row g-4">
        {/* About Edukaro */}
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="card h-100 text-center p-3" style={{ boxShadow: "0 4px 8px rgba(0,0,0,0.7)" }}>
            <i className="bi bi-building-up display-4 text-primary mb-3"></i>
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">About Edukaro</h5>
              <p className="card-text flex-grow-1">
                Edukaro helps students find the best colleges tailored to their
                rank, caste, preferred branches, and location — making your
                college search simple and personalized.
              </p>
              <Link to="/about" className="btn btn-primary mt-auto">
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* College Predictor */}
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="card h-100 text-center p-3" style={{ boxShadow: "0 4px 8px rgba(0,0,0,0.7)" }}>
            <i className="bi bi-mortarboard-fill display-4 text-success mb-3"></i>
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">College Predictor</h5>
              <p className="card-text flex-grow-1">
                Get accurate college recommendations based on your rank and
                preferences. Discover which colleges you can get admission to,
                branch-wise.
              </p>
              <Link to="/college-predictor" className="btn btn-success mt-auto">
                Try Now
              </Link>
            </div>
          </div>
        </div>

        {/* Branch Explorer */}
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="card h-100 text-center p-3" style={{ boxShadow: "0 4px 8px rgba(0,0,0,0.7)" }}>
            <i className="bi bi-journal-bookmark-fill display-4 text-warning mb-3"></i>
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Branch Explorer</h5>
              <p className="card-text flex-grow-1">
                Explore various engineering and management branches, their
                scopes, and top colleges offering them — making your choice
                easier.
              </p>
              <Link to="/branches" className="btn btn-warning mt-auto">
                Explore
              </Link>
            </div>
          </div>
        </div>

        {/* Location-Based Search */}
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="card h-100 text-center p-3" style={{ boxShadow: "0 4px 8px rgba(0,0,0,0.7)" }}>
            <i className="bi bi-geo-alt-fill display-4 text-danger mb-3"></i>
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Location Search</h5>
              <p className="card-text flex-grow-1">
                Filter colleges based on preferred locations and regions to find
                the best fit for your lifestyle and preferences.
              </p>
              <Link to="/location-search" className="btn btn-danger mt-auto">
                Search Now
              </Link>
            </div>
          </div>
        </div>

        {/* Caste & Reservation */}
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="card h-100 text-center p-3" style={{ boxShadow: "0 4px 8px rgba(0,0,0,0.7)" }}>
            <i className="bi bi-people-fill display-4 text-info mb-3"></i>
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Caste & Reservation</h5>
              <p className="card-text flex-grow-1">
                Understand seat reservations and quotas based on caste categories
                to maximize your admission chances.
              </p>
              <Link to="/reservation-policy" className="btn btn-info mt-auto">
                Details
              </Link>
            </div>
          </div>
        </div>

        {/* Rank & Cutoff Trends */}
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="card h-100 text-center p-3" style={{ boxShadow: "0 4px 8px rgba(0,0,0,0.7)" }}>
            <i className="bi bi-bar-chart-line-fill display-4 text-secondary mb-3"></i>
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Rank & Cutoff Trends</h5>
              <p className="card-text flex-grow-1">
                Analyze historical rank and cutoff trends to plan your
                admission strategy effectively.
              </p>
              <Link to="/rankings" className="btn btn-secondary mt-auto">
                Analyze
              </Link>
            </div>
          </div>
        </div>

        {/* Scholarships & Financial Aid */}
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="card h-100 text-center p-3" style={{ boxShadow: "0 4px 8px rgba(0,0,0,0.7)" }}>
            <i className="bi bi-currency-dollar display-4 text-success mb-3"></i>
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Scholarships & Internships</h5>
              <p className="card-text flex-grow-1">
                Find scholarships and internship opportunities options to support your
                college education and reduce your expenses.
              </p>
              <Link to="/internships" className="btn btn-success mt-auto">
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* User Reviews & Ratings */}
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="card h-100 text-center p-3" style={{ boxShadow: "0 4px 8px rgba(0,0.5,0,0.7)" }}>
            <i className="bi bi-chat-dots-fill display-4 text-primary mb-3"></i>
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">User Reviews</h5>
              <p className="card-text flex-grow-1">
                See reviews and ratings from students who used Edukaro to pick
                their ideal colleges.
              </p>
              <Link to="/reviews" className="btn btn-primary mt-auto">
                Read Reviews
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
