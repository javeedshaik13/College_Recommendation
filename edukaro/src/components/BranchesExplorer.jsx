import React, { useState } from 'react';
import Navbar from './Navbar';

const branchList = [
  {
    code: "CSE",
    name: "Computer Science and Engineering",
    futureApplications: "AI, Machine Learning, Web Development, Cloud Computing, Cyber Security",
    jobs: "Software Engineer, Data Scientist, Cloud Engineer, Cybersecurity Analyst",
    companies: "Google, Microsoft, Amazon, Infosys, TCS",
    images: {
      applications: "https://img.icons8.com/color/96/artificial-intelligence.png",
      jobs: "https://img.icons8.com/color/96/developer.png",
      companies: "https://img.icons8.com/color/96/company.png"
    }
  },
  {
    code: "ECE",
    name: "Electronics and Communication Engineering",
    futureApplications: "IoT, Embedded Systems, Telecommunications, VLSI Design",
    jobs: "Hardware Engineer, Embedded Software Engineer, Telecom Specialist",
    companies: "Intel, Qualcomm, Texas Instruments, Ericsson, Samsung",
    images: {
      applications: "https://img.icons8.com/color/96/electronics.png",
      jobs: "https://img.icons8.com/color/96/microchip.png",
      companies: "https://img.icons8.com/color/96/factory.png"
    }
  },
  {
    code: "EEE",
    name: "Electrical and Electronics Engineering",
    futureApplications: "Power Systems, Renewable Energy, Robotics, Electric Vehicles",
    jobs: "Electrical Engineer, Power Systems Analyst, Automation Engineer",
    companies: "ABB, Siemens, Schneider Electric, Tesla, GE",
    images: {
      applications: "https://img.icons8.com/color/96/charging-station.png",
      jobs: "https://img.icons8.com/color/96/worker-male.png",
      companies: "https://img.icons8.com/color/96/engineering.png"
    }
  },
  {
    code: "MEC",
    name: "Mechanical Engineering",
    futureApplications: "Automobile, Aerospace, Robotics, Manufacturing",
    jobs: "Mechanical Engineer, CAD Designer, Robotics Engineer",
    companies: "L&T, Maruti Suzuki, Boeing, Tata Motors, Hyundai",
    images: {
      applications: "https://img.icons8.com/color/96/robot-2.png",
      jobs: "https://img.icons8.com/color/96/engineer.png",
      companies: "https://img.icons8.com/color/96/industry.png"
    }
  },
  {
    code: "CIV",
    name: "Civil Engineering",
    futureApplications: "Construction, Urban Development, Structural Design, Smart Cities",
    jobs: "Civil Engineer, Structural Designer, Project Manager",
    companies: "Tata Projects, Larsen & Toubro, Shapoorji Pallonji, AECOM",
    images: {
      applications: "https://img.icons8.com/color/96/city-buildings.png",
      jobs: "https://img.icons8.com/color/96/worker-female.png",
      companies: "https://img.icons8.com/color/96/construction.png"
    }
  },
  {
    code: "BT",
    name: "Biotechnology",
    futureApplications: "Genetics, Pharmaceuticals, Bioinformatics, Medical Research",
    jobs: "Biotechnologist, Research Scientist, Lab Technician",
    companies: "Pfizer, Biocon, Novartis, Syngene, Dr. Reddy's",
    images: {
      applications: "https://img.icons8.com/color/96/dna-helix.png",
      jobs: "https://img.icons8.com/color/96/lab-items.png",
      companies: "https://img.icons8.com/color/96/hospital-room.png"
    }
  },
  {
    code: "IT",
    name: "Information Technology",
    futureApplications: "Software Development, Cybersecurity, Cloud, AI",
    jobs: "IT Consultant, Software Engineer, Cloud Engineer",
    companies: "Infosys, Wipro, Accenture, Cognizant, IBM",
    images: {
      applications: "https://img.icons8.com/color/96/cloud-computing.png",
      jobs: "https://img.icons8.com/color/96/computer-support.png",
      companies: "https://img.icons8.com/color/96/organization.png"
    }
  },
  {
    code: "AID",
    name: "Artificial Intelligence and Data Science",
    futureApplications: "Machine Learning, AI Research, Big Data Analytics",
    jobs: "Data Scientist, ML Engineer, AI Researcher",
    companies: "Google, Microsoft, Amazon, IBM, Adobe",
    images: {
      applications: "https://img.icons8.com/color/96/brain.png",
      jobs: "https://img.icons8.com/color/96/data-configuration.png",
      companies: "https://img.icons8.com/color/96/business.png"
    }
  }
];

function BranchesExplorer() {
  const [selectedBranch, setSelectedBranch] = useState(null);

  const handleBranchSelect = (branch) => {
    setSelectedBranch(branch);
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="branches-hero">
        <h2 className="branches-title">🔍 Explore Engineering Branches 🎓</h2>
        <p className="branches-subtitle">Select a branch to view applications, jobs & top companies 🚀</p>
        <div className="branches-emojis">📚 🖥️ 🧪 ⚡ 🏗️</div>
      </div>

      {/* Branch Filter */}
<div className="container my-4">
  <div className="branch-grid">
    {branchList.map((branch, index) => (
      <button
        key={index}
        className={`branch-btn ${
          selectedBranch?.code === branch.code ? "active" : ""
        }`}
        onClick={() => setSelectedBranch(branch)}
      >
        {branch.name}
      </button>
    ))}
  </div>

  <style jsx>{`
    .branch-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr); /* 4 cols on desktop */
      gap: 15px;
      max-width: 1000px;
      margin: 0 auto;
    }

    .branch-btn {
      padding: 14px 10px;
      border: 2px solid #007bff;
      border-radius: 10px;
      background: #fff;
      font-weight: 600;
      font-size: 0.95rem;
      text-align: center;
      color: #007bff;
      transition: all 0.3s ease;
      min-height: 70px; /* keeps even alignment */
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .branch-btn:hover {
      background: #e7f1ff;
    }

    .branch-btn.active {
      background: #007bff;
      color: #fff;
    }

    /* Mobile view (≤768px) */
    @media (max-width: 768px) {
      .branch-grid {
        grid-template-columns: repeat(2, 1fr); /* 2 cols */
        gap: 10px; /* smaller gap */
      }

      .branch-btn {
        padding: 10px 6px; /* reduced padding */
        min-height: 55px;  /* smaller card height */
        font-size: 0.85rem; /* slightly smaller text */
      }
    }
  `}</style>
</div>


      {/* Branch Details (only shows when branch clicked) */}
      {selectedBranch && (
  <div className="container mb-5 mt-5 p-4 rounded-4" style={{ backgroundColor: "#ccd6e1ff" }}>
    <h3 className="fw-bold text-center mb-4">{selectedBranch.name}</h3>
    <div className="row g-4">
      {/* Applications Card */}
      <div className="col-12 col-md-4">
        <div className="card shadow-lg rounded-4 p-3 h-100 text-center mb-4" style={{ boxShadow: "0 10px 15px rgba(0,0,0,0.7)" }}>
          <img src={selectedBranch.images.applications} alt="applications" className="img-fluid mx-auto mb-3 detail-img" />
          <h5 className="fw-bold">Future Applications</h5>
          <p>{selectedBranch.futureApplications}</p>
        </div>
      </div>

            {/* Jobs Card */}
            <div className="col-12 col-md-4">
              <div className="card shadow-lg rounded-4 p-3 h-100 text-center mb-4" style={{boxShadow: "0 10px 15px rgba(0,0,0,0.7)"}}>
                <img src={selectedBranch.images.jobs} alt="jobs" className="img-fluid mx-auto mb-3 detail-img" />
                <h5 className="fw-bold">Jobs</h5>
                <p>{selectedBranch.jobs}</p>
              </div>
            </div>

            {/* Companies Card */}
            <div className="col-12 col-md-4">
              <div className="card shadow-lg rounded-4 p-3 h-100 text-center mb-4" style={{boxShadow: "0 10px 15px rgba(0,0,0,0.7)"}}>
                <img src={selectedBranch.images.companies } alt="companies" className="img-fluid mx-auto mb-3 detail-img" />
                <h5 className="fw-bold">Top Companies</h5>
                <p>{selectedBranch.companies}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .branches-hero {
          background: linear-gradient(90deg, #bb4597ff, #6ed8caff, #9377deff, #a1fdfdff);
          background-size: 300% 300%;
          animation: gradientBG 8s ease infinite;
          border-radius: 0 0 20px 20px;
          text-align: center;
          color: #222;
          box-shadow: 0 4px 15px rgba(0,0,0,0.5);
          margin-top: 0;
          padding:0;
          min-height: 180px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .branches-title { font-size: clamp(1.5rem, 4vw, 2rem); font-weight: 700; margin-bottom: 10px; }
        .branches-subtitle { font-size: clamp(1rem, 3vw, 1.2rem); font-weight: 600; margin: 5px 0; }
        .branches-emojis { font-size: clamp(1rem, 3.5vw, 1.5rem); }

        .branch-btn {
          white-space: normal;
          font-size: 0.85rem;
          font-weight: 600;
          padding: 10px;
        }

        .detail-img {
          max-height: 100px;
          object-fit: contain;
        }

        @media (max-width: 768px) {
          .branches-hero { min-height: 120px; }
          .branches-title { font-size: 1.2rem; }
          .branches-subtitle { font-size: 0.9rem; }
          .branches-emojis { font-size: 1rem; }
          .branch-btn { font-size: 0.75rem; padding: 8px; }
          .detail-img { max-height: 80px; }
        }

        @keyframes gradientBG {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </>
  );
}

export default BranchesExplorer;
