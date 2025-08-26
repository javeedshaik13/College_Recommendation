import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function ReservationPolicy() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
    <div className="reservation-hero">
  <h2 className="reservation-title">
    ✨ Reservation Policy for Engineering Colleges in Telangana 🎓
  </h2>
  <p className="reservation-subtitle">
    🌟 Find the Best Engineering Colleges for Your Future 🚀
  </p>
  <div className="reservation-emojis">📚 🏆 🔬 🎓</div>

  <style jsx>{`
    .reservation-hero {
      background: linear-gradient(
        90deg,
        #73b1d0ff,
        #57ba46ff,
        #c260a6ff,
        #8d6cd6ff,
        #60cdcbff
      );
      background-size: 300% 300%;
      animation: gradientBG 8s ease infinite;
      border-radius:20px;
      text-align: center;
      color: #222;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
      padding: 40px 15px;
      min-height: 200px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .reservation-title {
      font-size: clamp(1.2rem, 3.5vw, 1.8rem);
      font-weight: 700; /* bold */
      margin-bottom: 8px;
    }

    .reservation-subtitle {
      font-size: clamp(0.9rem, 3vw, 1.1rem);
      font-weight: 600; /* slightly bold */
      margin: 4px 0;
    }

    .reservation-emojis {
      font-size: clamp(0.9rem, 3.5vw, 1.2rem);
    }

    /* Mobile View (smaller hero) */
    @media (max-width: 768px) {
      .reservation-hero {
        margin-top: 0;
        padding: 15px 10px;
        min-height: 120px; /* further decreased */
      }

      .reservation-title {
        font-size: 1.2rem;
      }

      .reservation-subtitle {
        font-size: 0.9rem;
      }

      .reservation-emojis {
        font-size: 1rem;
      }
    }

    @keyframes gradientBG {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
  `}</style>
</div>


      {/* Cards Section */}
      <div className="container mt-4 rounded-4" style={{ backgroundColor: "#96baddff", padding: "20px" }}>
        <div className="text-center mb-4">
          <h3 className="fw-bold">Reservation Policy Details</h3>
          <p className="text-muted">Detailed reservation policy for engineering colleges in Telangana.</p>
        </div>

        <div className="row g-3">
          {[
            { icon: "📚", title: "Economically Weaker Sections", percent: "10%", code: "EWS" },
            { icon: "🏆", title: "Backward Classes", percent: "15%", code: "BC" },
            { icon: "🔬", title: "Scheduled Castes", percent: "5%", code: "SC" },
            { icon: "🎓", title: "Scheduled Tribes", percent: "5%", code: "ST" }
          ].map((item, idx) => (
            <div key={idx} className="col-6 col-md-6 col-lg-3">
              <div className="card h-100 shadow-sm border-2 rounded-4">
                <div className="card-body text-center rounded-4" style={{ boxShadow: "0 4px 15px rgba(0,0,0,0.5)" }}>
                  <div className="fs-2 mb-2">{item.icon}</div>
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text mb-1 fw-bold">{item.percent} Reservation</p>
                  <small className="text-muted">({item.code})</small>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More info card */}
        <div className="card mt-4 shadow-sm border-0 rounded-4">
          <div className="card-body">
            <h5 className="card-title">More Information</h5>
            <p className="card-text">
              For more details, please visit the official website of the Telangana State Council of Higher Education (TSCHE) for updated reservation policies, eligibility, and category guidelines.
            </p>
            <a href="https://www.tsche.ac.in" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              Visit Official Website
            </a>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-whitesmoke py-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="card shadow-sm rounded-4" style={{ backgroundColor: "#87c9c3d1" }}>
                <div className="card-body p-3 p-md-4 rounded-4" style={{ backgroundColor: "#a4d7b0ff" }}>
                  <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between mb-3">
                    <h1 className="h5 mb-2 mb-md-0">Reservation Categories</h1>
                    <span className="text-muted small">Updated</span>
                  </div>

                  <div className="table-responsive">
                    <table className="table table-striped table-hover align-middle">
                      <caption className="text-muted">
                        Category codes with descriptions and whether they fall under General or Reserved type.
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
                        {[
                          { cat: "Open Category", code: "OC", desc: "Open Category", type: "General" },
                          { cat: "Backward Classes", code: "BC_A – BC_E", desc: "Backward Classes (Groups A to E)", type: "Reserved" },
                          { cat: "Scheduled Caste", code: "SC", desc: "Scheduled Caste", type: "Reserved" },
                          { cat: "Scheduled Tribe", code: "ST", desc: "Scheduled Tribe", type: "Reserved" },
                          { cat: "Economically Weaker Section", code: "EWS", desc: "Economically Weaker Section", type: "Reserved" }
                        ].map((item, idx) => (
                          <tr key={idx}>
                            <td>{item.cat}</td>
                            <td><code>{item.code}</code></td>
                            <td>{item.desc}</td>
                            <td>
                              <span className={`badge ${item.type === "General" ? "bg-secondary" : "bg-primary"} fw-semibold`}>
                                {item.type}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-2">
                    <span className="badge bg-secondary fw-semibold me-2">General</span>
                    <span className="badge bg-primary fw-semibold">Reserved</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Responsive styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .hero-section {
            padding: 30px 15px;
            min-height: 150px; /* half height on mobile */
          }
          .hero-title {
            font-size: 1.5rem;
          }
          .hero-subtitle {
            font-size: 1rem;
          }
          .hero-emojis {
            font-size: 1rem;
          }
          .card .fs-2 {
            font-size: 2rem; /* smaller icons in cards */
          }
          .card-title {
            font-size: 1rem;
          }
          .card-text {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </>
  );
}

export default ReservationPolicy;
