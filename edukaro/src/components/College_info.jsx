import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

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
  { icon:"bi-rank-fill", title: "Ranking", key: "rank"}
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

  return (
    <>
      <Navbar />
      <div
        style={{
          marginTop:"100px",
          padding: "100px",
          background: "linear-gradient(90deg, #ff9a9e, #c4fac5ff, #fbc2eb, #a1c4fd, #c2e9fb)",
          backgroundSize: "300% 300%",
          animation: "gradientBG 8s ease infinite",
          padding: "30px 20px",
          borderRadius: "0 0 20px 20px",
          textAlign: "center",
          color: "#222",
          boxShadow: "0 4px 15px rgba(0,0,0,0.5)"
        }}
      >
        <h2 style={{ fontWeight: "bold", fontSize: "2rem" }}>✨ Top Engineering Colleges in Telangana 🎓</h2>
        <p style={{ fontSize: "1.2rem", margin: "10px 0" }}>🌟 Explore, Compare & Discover the Best for Your Future 🚀</p>
        <div style={{ fontSize: "1.5rem" }}>📚 💻 🏆 🔬 🏫 🎓</div>
      </div>

      <div className="container mt-4">
        <div className="row gy-4">
          {colleges.map((college) => (
            <div key={college.id} className="col-12 col-md-6 col-lg-4">
              <div
                className="card h-50 p-3 bg-light d-flex flex-column justify-content-between"
                style={{
                  background: "linear-gradient(135deg, #f0f4f8, #d9e6ecff)",
                  boxShadow: "0px 6px 20px rgba(0,0,0,0.7)",
                  borderRadius: "12px",
                  minHeight: "400px",
                }}
              >
                <div className="d-flex align-items-center mb-3">
                  <img
                    src={college.logo}
                    alt={`${college.name} Logo`}
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                      boxShadow: "0px 6px 20px rgba(0,0,0,0.7)",
                      objectFit: "cover",
                      marginRight: "15px",
                    }}
                  />
                  <h5 className="fw-bold mb-0">{college.name}</h5>
                </div>
                <p className="flex-grow-1">{college.description}</p>
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-globe text-primary me-2"></i>
                  <a
                    href={college.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "#007bff", wordBreak: "break-word" }}
                  >
                    {college.website}
                  </a>
                  <i className="bi bi-building ms-2 text-secondary" title="More Info"></i>
                  {college.affiliation}
                  <i className="bi bi-bank ms-2 text-secondary" title="Type of College"></i>
                  {college.type}
                  <i className="bi bi-people-fill ms-2 text-secondary" title="Co-education"></i>
                  {college.coeducation}
                </div>


                <div className="d-flex gap-2 mt-auto m-auto">
                  <button className="btn btn-success" onClick={() => setActiveModalId(college.id)}>
                    <i className="bi bi-info-circle-fill me-1"></i> More Info
                  </button>
                  <Link to="/college-predictor" className="btn btn-primary">
                    <i className="bi bi-search me-1"></i> Search Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />

      {colleges.map(
        (college) =>
          activeModalId === college.id && (
            <div
              key={college.id}
              className="modal fade show"
              style={{ display: "block", backgroundColor: "rgba(0,0,0,0.7)" }}
              tabIndex="-1"
              onClick={() => setActiveModalId(null)}
            >
              <div
                className="modal-dialog modal-lg modal-dialog-centered"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="modal-content p-3">
                  <div className="d-flex align-items-center mb-3">
                    <img
                      src={college.logo}
                      alt={`${college.name} Logo`}
                      style={{
                        width: "70px",
                        height: "70px",
                        borderRadius: "50%",
                        objectFit: "cover",
                        marginRight: "15px",
                      }}
                    />
                    <h5 className="fw-bold mb-0">{college.name}</h5>
                  </div>

                  <div className="row">
                    {commonDetails.map((item, index) => (
                      <div key={index} className="col-md-6 mb-3">
                        <div className="p-3 bg-white rounded h-100" style={{ boxShadow: "0px 6px 20px rgba(0,0,0,0.7)" }}>
                          <i className={`${item.icon} text-primary fs-4 mb-2`}></i>
                          <h6 className="fw-bold">{item.title}</h6>
                          <p className="mb-0">{college.descOverrides[index] || "N/A"}</p>
                        </div>
                      </div>
                    ))}

                    {extraDetails.map((item, index) => (
                      <div key={`extra-${index}`} className="col-md-6 mb-3">
                        <div className="p-3 bg-white rounded h-100" style={{ boxShadow: "0px 6px 20px rgba(0,0,0,0.7)" }}>
                          <i className={`${item.icon} text-success fs-4 mb-2`}></i>
                          <h6 className="fw-bold">{item.title}</h6>
                          {item.isLink ? (
                            <a href={college[item.key]} target="_blank" rel="noopener noreferrer">
                              {college[item.key]}
                            </a>
                          ) : (
                            <p className="mb-0">{college[item.key] || "N/A"}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="text-end mt-3">
                    <button className="btn btn-danger" onClick={() => setActiveModalId(null)}>Close</button>
                  </div>
                </div>
              </div>
            </div>
          )
      )}
    </>
  );
}

export default CollegeCard;
