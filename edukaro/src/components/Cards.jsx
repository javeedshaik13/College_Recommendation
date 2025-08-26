import React from "react";
import { Link } from "react-router-dom";

function Cards() {
  return (
    <div
      className="container m-auto"
      style={{
        background:
          "linear-gradient(90deg, #ff9a9e, #c4fac5ff, #fbc2eb, #a1c4fd, #c2e9fb)",
        backgroundSize: "300% 300%",
        animation: "gradientBG 8s ease infinite",
        padding: "28px",
        borderRadius: "25px",
        textAlign: "center",
        color: "#222",
        boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
        paddingTop: "40px",
        marginTop: "4px",
      }}
    >
   

      <div className="row g-3">
        {/* About Edukaro */}
        <div className="col-6 col-md-4 col-lg-3">
          <div
            className="card h-100 text-center p-2"
            style={{ boxShadow: "0 4px 8px rgba(0,0,0,0.7)" ,borderRadius: "12px"}}
          >
            <i className="bi bi-building-up display-6 text-primary mb-2"></i>
            <div className="card-body d-flex flex-column p-2">
              <h6 className="card-title">About Edukaro</h6>
              <p className="card-text flex-grow-1 d-none d-md-block">
                Edukaro helps students find the best colleges tailored to their
                rank, caste, preferred branches, and location.
              </p>
              <Link
                to="/about"
                className="btn btn-primary mt-auto"
                style={{
                  fontSize: "12px",
                  padding: "6px 10px",
                  borderRadius: "8px",
                }}
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* College Predictor */}
        <div className="col-6 col-md-4 col-lg-3">
          <div
            className="card h-100 text-center p-2"
            style={{ boxShadow: "0 4px 8px rgba(0,0,0,0.7)" ,borderRadius: "12px"}}
          >
            <i className="bi bi-mortarboard-fill display-6 text-success mb-2"></i>
            <div className="card-body d-flex flex-column p-2">
              <h6 className="card-title">College Predictor</h6>
              <p className="card-text flex-grow-1 d-none d-md-block">
                Get accurate college recommendations based on your rank and
                preferences.
              </p>
              <Link
                to="/college-predictor"
                className="btn btn-success mt-auto"
                style={{
                  fontSize: "12px",
                  padding: "6px 10px",
                  borderRadius: "8px",
                }}
              >
                Try Now
              </Link>
            </div>
          </div>
        </div>

        {/* Branch Explorer */}
        <div className="col-6 col-md-4 col-lg-3">
          <div
            className="card h-100 text-center p-2"
            style={{ boxShadow: "0 4px 8px rgba(0,0,0,0.7)",borderRadius: "12px" }}
          >
            <i className="bi bi-journal-bookmark-fill display-6 text-warning mb-2"></i>
            <div className="card-body d-flex flex-column p-2">
              <h6 className="card-title">Branch Explorer</h6>
              <p className="card-text flex-grow-1 d-none d-md-block">
                Explore branches, their scopes, and top colleges.
              </p>
              <Link
                to="/branches"
                className="btn btn-warning mt-auto"
                style={{
                  fontSize: "12px",
                  padding: "6px 10px",
                  borderRadius: "8px",
                }}
              >
                Explore
              </Link>
            </div>
          </div>
        </div>

        {/* Location Search */}
        <div className="col-6 col-md-4 col-lg-3">
          <div
            className="card h-100 text-center p-2"
            style={{ boxShadow: "0 4px 8px rgba(0,0,0,0.7)",borderRadius: "12px" }}
          >
            <i className="bi bi-geo-alt-fill display-6 text-danger mb-2"></i>
            <div className="card-body d-flex flex-column p-2">
              <h6 className="card-title">Location Search</h6>
              <p className="card-text flex-grow-1 d-none d-md-block">
                Filter colleges based on preferred locations.
              </p>
              <Link
                to="/location-search"
                className="btn btn-danger mt-auto"
                style={{
                  fontSize: "12px",
                  padding: "6px 10px",
                  borderRadius: "8px",
                }}
              >
                Search Now
              </Link>
            </div>
          </div>
        </div>

        {/* Reservation Policy */}
        <div className="col-6 col-md-4 col-lg-3">
          <div
            className="card h-100 text-center p-2"
            style={{ boxShadow: "0 4px 8px rgba(0,0,0,0.7)",borderRadius: "12px" }}
          >
            <i className="bi bi-people-fill display-6 text-info mb-2"></i>
            <div className="card-body d-flex flex-column p-2">
              <h6 className="card-title">Caste & Reservation</h6>
              <p className="card-text flex-grow-1 d-none d-md-block">
                Understand seat reservations and quotas.
              </p>
              <Link
                to="/reservation-policy"
                className="btn btn-info mt-auto"
                style={{
                  fontSize: "12px",
                  padding: "6px 10px",
                  borderRadius: "8px",
                }}
              >
                Details
              </Link>
            </div>
          </div>
        </div>

        {/* Rank & Cutoff Trends */}
        <div className="col-6 col-md-4 col-lg-3">
          <div
            className="card h-100 text-center p-2"
            style={{ boxShadow: "0 4px 8px rgba(0,0,0,0.7)",borderRadius: "12px" }}
          >
            <i className="bi bi-bar-chart-line-fill display-6 text-secondary mb-2"></i>
            <div className="card-body d-flex flex-column p-2">
              <h6 className="card-title">Rank & Cutoff Trends</h6>
              <p className="card-text flex-grow-1 d-none d-md-block">
                Analyze historical rank and cutoff trends.
              </p>
              <Link
                to="/rankings"
                className="btn btn-secondary mt-auto"
                style={{
                  fontSize: "12px",
                  padding: "6px 10px",
                  borderRadius: "8px",
                }}
              >
                Analyze
              </Link>
            </div>
          </div>
        </div>

        {/* Scholarships & Internships */}
        <div className="col-6 col-md-4 col-lg-3">
          <div
            className="card h-100 text-center p-2"
            style={{ boxShadow: "0 4px 8px rgba(0,0,0,0.7)",borderRadius: "12px" }}
          >
            <i className="bi bi-currency-dollar display-6 text-success mb-2"></i>
            <div className="card-body d-flex flex-column p-2">
              <h6 className="card-title">Scholarships & Internships</h6>
              <p className="card-text flex-grow-1 d-none d-md-block">
                Find scholarships and internship opportunities.
              </p>
              <Link
                to="/internships"
                className="btn btn-success mt-auto"
                style={{
                  fontSize: "12px",
                  padding: "6px 10px",
                  borderRadius: "8px",
                }}
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* User Reviews */}
        <div className="col-6 col-md-4 col-lg-3">
          <div
            className="card h-100 text-center p-2"
            style={{ boxShadow: "0 4px 8px rgba(0,0,0,0.7)",borderRadius: "12px" }}
          >
            <i className="bi bi-chat-dots-fill display-6 text-primary mb-2"></i>
            <div className="card-body d-flex flex-column p-2">
              <h6 className="card-title">User Reviews</h6>
              <p className="card-text flex-grow-1 d-none d-md-block">
                See reviews and ratings from students.
              </p>
              <Link
                to="/reviews"
                className="btn btn-primary mt-auto"
                style={{
                  fontSize: "12px",
                  padding: "6px 10px",
                  borderRadius: "8px",
                }}
              >
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
