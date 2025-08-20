import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer' 

function ReservationPolicy() {
  return (
    <>
      <Navbar />
       <div
        style={{
          marginTop:"100px",
          padding: "100px",
          background: "linear-gradient(90deg, #73b1d0ff, #57ba46ff, #c260a6ff, #8d6cd6ff, #60cdcbff)",
          backgroundSize: "300% 300%",
          animation: "gradientBG 8s ease infinite",
          padding: "30px 20px",
          borderRadius: "0 0 20px 20px",
          marginTop:"100px",
          textAlign: "center",
          color: "#222",
          boxShadow: "0 4px 15px rgba(0,0,0,0.5)"
        }}
      >
        <h2 style={{ fontWeight: "bold", fontSize: "2rem" }}>✨ Reservation Policy for Engineering Colleges in Telangana 🎓</h2>
        <p style={{ fontSize: "1.2rem", margin: "10px 0" }}>🌟 Find the Best Engineering Colleges for Your Future 🚀</p>
        <div style={{ fontSize: "1.5rem" }}>📚  🏆 🔬  🎓</div>
      </div>
      <div className="container mt-4 rounded-4" style={{backgroundColor: "#96baddff"}}>
   <div className="container mt-4">
      {/* Page heading */}
      <div className="mb-4 text-center">
        <h3 className="fw-bold">Reservation Policy Details</h3>
        <p className="text-muted">
          Detailed reservation policy for engineering colleges in Telangana.
        </p>
      </div>

      {/* Reservation details in cards */}
      <div className="row g-4">
        <div className="col-12 col-md-6 col-lg-3">
          <div className="card h-100 shadow-sm border-2 rounded-4">
            <div className="card-body text-center rounded-4" style={{boxShadow: "0 4px 15px rgba(0,0,0,0.5)" }}>
              <div className="fs-1 mb-2">📚</div>
              <h5 className="card-title">Economically Weaker Sections</h5>
              <p className="card-text mb-1 fw-bold">10% Reservation</p>
              <small className="text-muted">(EWS)</small>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-3">
          <div className="card h-100 shadow-sm border-2 rounded-4">
            <div className="card-body text-center rounded-4" style={{boxShadow: "0 4px 15px rgba(0,0,0,0.5)" }}>
              <div className="fs-1 mb-2">🏆</div>
              <h5 className="card-title">Backward Classes</h5>
              <p className="card-text mb-1 fw-bold">15% Reservation</p>
              <small className="text-muted">(BC)</small>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-3">
          <div className="card h-100 shadow-sm border-2 rounded-4">
            <div className="card-body text-center rounded-4" style={{boxShadow: "0 4px 15px rgba(0,0,0,0.7)" }}>
              <div className="fs-1 mb-2">🔬</div>
              <h5 className="card-title">Scheduled Castes</h5>
              <p className="card-text mb-1 fw-bold">5% Reservation</p>
              <small className="text-muted">(SC)</small>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-3">
          <div className="card h-100 shadow-sm border-2 rounded-4">
            <div className="card-body text-center rounded-4" style={{boxShadow: "0 4px 15px rgba(0,0,0,0.7)" }}>
              <div className="fs-1 mb-2">🎓</div>
              <h5 className="card-title">Scheduled Tribes</h5>
              <p className="card-text mb-1 fw-bold">5% Reservation</p>
              <small className="text-muted">(ST)</small>
            </div>
          </div>
        </div>
      </div>

      {/* More info card */}
      <div className="card mt-5 shadow-sm border-0 rounded-4 mb-3">
        <div className="card-body">
          <h5 className="card-title">More Information</h5>
          <p className="card-text">
            For more details, please visit the official website of the Telangana
            State Council of Higher Education (TSCHE) for updated reservation
            policies, eligibility, and category guidelines.
          </p>
          <a
            href="https://www.tsche.ac.in"
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Official Website
          </a>
        </div>
      </div>
    </div>
    </div>
    <div className="bg-whitesmoke py-4">
      <div className="container" >
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card shadow-sm rounded-4" style={{ backgroundColor: "#87c9c3d1" }}>
              <div className="card-body p-4 rounded-4" style={{ backgroundColor: "#a4d7b0ff" }}>
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <h1 className="h4 mb-0">Reservation Categories</h1>
                  <span className="text-muted small">Updated</span>
                </div>

                <div className="table-responsive">
                  <table className="table table-striped table-hover align-middle">
                    <caption className="text-muted">
                      Category codes with descriptions and whether they fall
                      under General or Reserved type.
                    </caption>
                    <thead className="table-dark">
                      <tr>
                        <th style={{ width: "18%" }}>Category</th>
                        <th style={{ width: "18%" }}>Code</th>
                        <th>Description</th>
                        <th style={{ width: "18%" }}>Type</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Open Category</td>
                        <td>
                          <code>OC</code>
                        </td>
                        <td>Open Category</td>
                        <td>
                          <span className="badge bg-secondary fw-semibold">
                            General
                          </span>
                        </td>
                      </tr>

                      <tr>
                        <td>Backward Classes</td>
                        <td>
                          <code>BC_A</code> – <code>BC_E</code>
                        </td>
                        <td>Backward Classes (Groups A to E)</td>
                        <td>
                          <span className="badge bg-primary fw-semibold">
                            Reserved
                          </span>
                        </td>
                      </tr>

                      <tr>
                        <td>Scheduled Caste</td>
                        <td>
                          <code>SC</code>
                        </td>
                        <td>Scheduled Caste</td>
                        <td>
                          <span className="badge bg-primary fw-semibold">
                            Reserved
                          </span>
                        </td>
                      </tr>

                      <tr>
                        <td>Scheduled Tribe</td>
                        <td>
                          <code>ST</code>
                        </td>
                        <td>Scheduled Tribe</td>
                        <td>
                          <span className="badge bg-primary fw-semibold">
                            Reserved
                          </span>
                        </td>
                      </tr>

                      <tr>
                        <td>Economically Weaker Section</td>
                        <td>
                          <code>EWS</code>
                        </td>
                        <td>Economically Weaker Section</td>
                        <td>
                          <span className="badge bg-primary fw-semibold">
                            Reserved
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-2">
                  <span className="badge bg-secondary fw-semibold me-2">
                    General
                  </span>
                  <span className="badge bg-primary fw-semibold">Reserved</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default ReservationPolicy
