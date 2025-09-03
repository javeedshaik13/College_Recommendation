import React, { useState } from "react";

const commonDetails = [
  { icon: "bi-briefcase-fill", title: "Placements" },
  { icon: "bi-journal-text", title: "Admissions" },
  { icon: "bi-cash-coin", title: "Fee" },
  { icon: "bi-geo-alt-fill", title: "Location" },
  { icon: "bi-bar-chart-fill", title: "Ranking" },
  { icon: "bi-star-fill", title: "Rating" },
  { icon: "bi-award-fill", title: "NAAC Grade" },
];

const extraDetails = [
  { icon: "bi-globe2", title: "Official Website", key: "website", isLink: true },
  { icon: "bi-building", title: "Affiliated To", key: "affiliation" },
  { icon: "bi-bank", title: "Type of College", key: "type" },
  { icon: "bi-people-fill", title: "Co-education", key: "coeducation" },
  { icon: "bi-trophy-fill", title: "Ranking", key: "rank"}
];

const colleges = [
  {
    id: 1,
    name: "International Institute of Information Technology, Hyderabad (IIIT Hyderabad)",
    logo: "https://cdn.siasat.com/wp-content/uploads/2020/05/IIIT-Hyderabad.jpg",
    description: "One of the premier engineering institutions in Telangana, offering top-notch academics, placements, and facilities.",
    descOverrides: [
      "Top recruiters visit campus every year.",
      "Merit & entrance-based admissions.",
      "₹65,000 per year (approx).",
      "Hyderabad, Telangana.",
      "Top 1 in the state.",
      "4.3 / 5 by students.",
      "A+",
    ],
    website: "https://www.iiit.ac.in",
    affiliation: "Deemed University",
    type: "University",
    coeducation: "Co-educational",
    rank: "1",
  },
  {
    id: 2,
    name: "JNTUH College of Engineering",
    logo: "https://pbs.twimg.com/profile_images/1559799667856388096/oNNEFVfk_400x400.jpg",
    description: "Historic university known for diverse programs and vibrant campus life.",
    descOverrides: [
      "Great opportunities with local industries.",
      "Entrance test & merit based.",
      "₹55,000 per year (approx).",
      "Hyderabad, Telangana.",
      "Top 5 in the state.",
      "4.1 / 5 by students.",
      "A",
    ],
    website: "https://jntuhceh.ac.in",
    affiliation: "JNTUH",
    type: "Government",
    coeducation: "Co-educational",
    rank: "2",
  },
  {
    id: 3,
    name: "Chaitanya Bharathi Institute of Technology (CBIT), Hyderabad",
    logo: "https://upload.wikimedia.org/wikipedia/en/6/68/Chaitanya_Bharathi_Institute_of_Technology_logo.png",
    description: "Focused on research and technology innovation in Hyderabad.",
    descOverrides: [
      "Excellent IT sector placement.",
      "Merit & entrance exams.",
      "₹70,000 per year (approx).",
      "Hyderabad, Telangana.",
      "Top 3 in the state.",
      "4.5 / 5 by students.",
      "A+",
    ],
    website: "https://www.cbit.ac.in",
    affiliation: "OU",
    type: "Private",
    coeducation: "Co-educational",
    rank: "3",
  },
  {
    id: 4,
    name: "VNR Vignana Jyothi Institute of Engineering and Technology (VNRVJIET), Hyderabad",
    logo: "https://images.shiksha.com/mediadata/images/1747210261phpWUDWnz.jpeg",
    description: "Known for its industry collaborations and modern curriculum.",
    descOverrides: [
      "Strong ties with IT companies.",
      "Based on entrance exams.",
      "₹60,000 per year (approx).",
      "Hyderabad, Telangana.",
      "Top 4 in the state.",
      "4.0 / 5 by students.",
      "A",
    ],
    website: "https://vnrvjiet.ac.in",
    affiliation: "JNTUH",
    type: "Private",
    coeducation: "Co-educational",
    rank: "4",
  },
  {
    id: 5,
    name: "Vasavi College of Engineering (VCE), Hyderabad",
    logo: "https://bajraionline.com/wp-content/uploads/2022/08/Vasavi-College-of-Engineering-logo.gif",
    description: "Famous for excellent faculty and student support programs.",
    descOverrides: [
      "Good placement record.",
      "Entrance & merit based.",
      "₹58,000 per year (approx).",
      "Hyderabad, Telangana.",
      "Top 6 in the state.",
      "4.2 / 5 by students.",
      "A",
    ],
    website: "https://www.vce.ac.in",
    affiliation: "OU",
    type: "Private",
    coeducation: "Co-educational",
    rank: "5",
  },
  {
    id: 6,
    name: "CVR College of Engineering (CVRH), Hyderabad",
    logo: "https://upload.wikimedia.org/wikipedia/en/4/4c/Cvrh.ibp.jpg",
    description: "Strong emphasis on practical learning and research.",
    descOverrides: [
      "Excellent placement statistics.",
      "Merit based admissions.",
      "₹67,000 per year (approx).",
      "Hyderabad, Telangana.",
      "Top 2 in the state.",
      "4.4 / 5 by students.",
      "A+",
    ],
    website: "https://www.cvr.ac.in",
    affiliation: "JNTUH",
    type: "Private",
    coeducation: "Co-educational",
    rank: "6",
  },
];

function CollegeCard() {
  const [activeModalId, setActiveModalId] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Handle window resize
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Determine which colleges to display
  const displayedColleges = isMobile && !showAll ? colleges.slice(0, 3) : colleges;

  return (
    <>
      {/* Header Section */}
      <div className="colleges-hero">
        <h2 className="colleges-title">
          ✨ Top Engineering Colleges in Telangana 🎓
        </h2>
        <p className="colleges-subtitle">
          🌟 Explore, Compare & Discover the Best for Your Future 🚀
        </p>
        <div className="colleges-emojis">📚 💻 🏆 🔬 🏫 🎓</div>

        <style jsx>{`
          .colleges-hero {
            background: linear-gradient(
              90deg,
              #ff9a9e,
              #c4fac5ff,
              #fbc2eb,
              #a1c4fd,
              #c2e9fb
            );
            background-size: 300% 300%;
            animation: gradientBG 8s ease infinite;
            border-radius: 0 0 20px 20px;
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

          .colleges-title {
            font-size: clamp(1.2rem, 4vw, 2rem);
            font-weight: 700;
            margin-bottom: 10px;
          }

          .colleges-subtitle {
            font-size: clamp(1rem, 3vw, 1.2rem);
            font-weight: 600;
            margin: 8px 0;
          }

          .colleges-emojis {
            font-size: clamp(1rem, 3.5vw, 1.5rem);
            margin-top: 5px;
          }

          /* Mobile View */
          @media (max-width: 768px) {
            .colleges-hero {
              padding: 20px 12px;
              min-height: 120px;
              border-radius: 0 0 15px 15px;
            }

            .colleges-title {
              font-size: 1.3rem;
            }

            .colleges-subtitle {
              font-size: 1rem;
            }

            .colleges-emojis {
              font-size: 1.2rem;
            }
          }

          @keyframes gradientBG {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}</style>
      </div>

      {/* Colleges Grid */}
      <div className="container mt-4 mb-5">
        <div className="row gy-4">
          {displayedColleges.map((college) => (
            <div key={college.id} className="col-12 col-md-6 col-lg-4">
              <div
                className="card h-100 p-2 p-md-3"
                style={{
                  background: "linear-gradient(135deg, #ffffff, #f8f9fa)",
                  boxShadow: "0px 8px 25px rgba(0,0,0,0.5)",
                  borderRadius: "15px",
                  border: "1px solid #e9ecef",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  minHeight: isMobile ? "380px" : "450px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0px 15px 35px rgba(0,0,0,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0px 8px 25px rgba(0,0,0,0.15)";
                }}
              >
                {/* College Header */}
                <div className="d-flex align-items-start mb-3">
                  <img
                    src={college.logo}
                    alt={`${college.name} Logo`}
                    style={{
                      width: isMobile ? "50px" : "70px",
                      height: isMobile ? "50px" : "70px",
                      borderRadius: "50%",
                      boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
                      objectFit: "cover",
                      marginRight: isMobile ? "10px" : "15px",
                      flexShrink: 0,
                    }}
                  />
                  <div>
                    <h5 className="fw-bold mb-2" style={{ fontSize: isMobile ? "0.9rem" : "1.1rem", lineHeight: "1.3" }}>
                      {college.name}
                    </h5>
                    <div className="d-flex align-items-center mb-1">
                      <span className="badge bg-primary me-2">Rank #{college.rank}</span>
                      <span className="badge bg-success">⭐ {college.descOverrides[5]}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted mb-3" style={{ fontSize: isMobile ? "0.85rem" : "0.95rem", lineHeight: "1.4" }}>
                  {college.description}
                </p>

                {/* Quick Info */}
                <div className="mb-3">
                  <div className="row g-2">
                    <div className="col-12">
                      <div className="d-flex align-items-center mb-1 mb-md-2">
                        <i className="bi bi-cash-coin text-success me-1 me-md-2" style={{fontSize: isMobile ? '0.8rem' : '1rem'}}></i>
                        <small style={{fontSize: isMobile ? '0.75rem' : '0.875rem'}}><strong>Fee:</strong> {college.descOverrides[2]}</small>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="d-flex align-items-center mb-1 mb-md-2">
                        <i className="bi bi-building text-primary me-1 me-md-2" style={{fontSize: isMobile ? '0.8rem' : '1rem'}}></i>
                        <small style={{fontSize: isMobile ? '0.75rem' : '0.875rem'}}><strong>Type:</strong> {college.type} | {college.affiliation}</small>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="d-flex align-items-center mb-1 mb-md-2">
                        <i className="bi bi-briefcase-fill text-warning me-1 me-md-2" style={{fontSize: isMobile ? '0.8rem' : '1rem'}}></i>
                        <small style={{fontSize: isMobile ? '0.75rem' : '0.875rem'}}><strong>Placements:</strong> {college.descOverrides[0]}</small>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Website Link */}
                <div className="mb-3">
                  <a
                    href={college.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none d-flex align-items-center"
                    style={{ color: "#0066cc", fontSize: isMobile ? "0.8rem" : "0.9rem" }}
                  >
                    <i className="bi bi-globe me-2"></i>
                    <span className="text-truncate">Visit Website</span>
                    <i className="bi bi-box-arrow-up-right ms-1" style={{ fontSize: "0.8rem" }}></i>
                  </a>
                </div>

                {/* Action Buttons */}
                <div className="d-flex gap-2 mt-auto">
                  <button 
                    className="btn btn-outline-primary flex-fill"
                    onClick={() => setActiveModalId(college.id)}
                    style={{ borderRadius: "8px", fontSize: isMobile ? "0.8rem" : "0.875rem", padding: isMobile ? "6px 8px" : "8px 12px" }}
                  >
                    <i className="bi bi-info-circle me-1"></i>
                    Details
                  </button>
                  <button 
                    className="btn btn-primary flex-fill"
                    style={{ borderRadius: "8px", fontSize: isMobile ? "0.8rem" : "0.875rem", padding: isMobile ? "6px 8px" : "8px 12px" }}
                  >
                    <i className="bi bi-search me-1"></i>
                    Search
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Show More Button for Mobile */}
        {isMobile && colleges.length > 3 && (
          <div className="text-center mt-4">
            <button 
              className="btn btn-lg px-4 py-2 fw-bold shadow-lg"
              onClick={() => setShowAll(!showAll)}
              style={{
                background: showAll 
                  ? "linear-gradient(45deg, #dc3545, #fd7e14)" 
                  : "linear-gradient(45deg, #28a745, #20c997)",
                border: "none",
                borderRadius: "25px",
                color: "white",
                fontSize: "1rem",
                transition: "all 0.3s ease",
                minWidth: "200px"
              }}
            >
              {showAll ? (
                <>
                  <i className="bi bi-eye-slash me-2"></i>
                  Show Less Colleges
                </>
              ) : (
                <>
                  <i className="bi bi-eye me-2"></i>
                  Show More Colleges ({colleges.length - 3} more)
                </>
              )}
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      {colleges.map(
        (college) =>
          activeModalId === college.id && (
            <div
              key={college.id}
              className="modal fade show"
              style={{ 
                display: "block", 
                backgroundColor: "rgba(0,0,0,0.7)",
                zIndex: 1050 
              }}
              tabIndex="-1"
              onClick={() => setActiveModalId(null)}
            >
              <div
                className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="modal-content" style={{ borderRadius: "15px" }}>
                  <div className="modal-header border-0 pb-0">
                    <div className="d-flex align-items-center">
                      <img
                        src={college.logo}
                        alt={`${college.name} Logo`}
                        style={{
                          width: "60px",
                          height: "60px",
                          borderRadius: "50%",
                          objectFit: "cover",
                          marginRight: "15px",
                        }}
                      />
                      <div>
                        <h5 className="fw-bold mb-1">{college.name}</h5>
                        <div className="d-flex align-items-center">
                          <span className="badge bg-primary me-2">Rank #{college.rank}</span>
                          <span className="badge bg-success">⭐ {college.descOverrides[5]}</span>
                        </div>
                      </div>
                    </div>
                    <button 
                      type="button" 
                      className="btn-close" 
                      onClick={() => setActiveModalId(null)}
                    ></button>
                  </div>

                  <div className="modal-body">
                    <div className="row g-3">
                      {commonDetails.map((item, index) => (
                        <div key={index} className="col-md-6">
                          <div 
                            className="p-3 bg-light rounded h-100" 
                            style={{ 
                              boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
                              border: "1px solid #e9ecef" 
                            }}
                          >
                            <div className="d-flex align-items-center mb-2">
                              <i className={`${item.icon} text-primary fs-5 me-2`}></i>
                              <h6 className="fw-bold mb-0">{item.title}</h6>
                            </div>
                            <p className="mb-0 text-muted">
                              {college.descOverrides[index] || "N/A"}
                            </p>
                          </div>
                        </div>
                      ))}

                      {extraDetails.map((item, index) => (
                        <div key={`extra-${index}`} className="col-md-6">
                          <div 
                            className="p-3 bg-light rounded h-100" 
                            style={{ 
                              boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
                              border: "1px solid #e9ecef" 
                            }}
                          >
                            <div className="d-flex align-items-center mb-2">
                              <i className={`${item.icon} text-success fs-5 me-2`}></i>
                              <h6 className="fw-bold mb-0">{item.title}</h6>
                            </div>
                            {item.isLink ? (
                              <a 
                                href={college[item.key]} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-decoration-none"
                              >
                                <i className="bi bi-box-arrow-up-right me-1"></i>
                                Visit Website
                              </a>
                            ) : (
                              <p className="mb-0 text-muted">
                                {college[item.key] || "N/A"}
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="modal-footer border-0">
                    <button 
                      className="btn btn-secondary" 
                      onClick={() => setActiveModalId(null)}
                    >
                      Close
                    </button>
                    <a 
                      href={college.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      <i className="bi bi-globe me-1"></i>
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )
      )}

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

export default CollegeCard;