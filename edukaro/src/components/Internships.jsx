import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const studentsData = [
  {
    id: 1,
    name: "Virat Kohli",
    img: "https://documents.iplt20.com/ipl/IPLHeadshot2025/2.png",
    college: "IIT Hyderabad",
    branch: "CSE",
    program: "Google Summer of Code Internship",
    type: "Internship",
    year: "3rd Year"
  },
  {
    id: 2,
    name: "Rohit Sharma",
    img: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Prime_Minister_Of_Bharat_Shri_Narendra_Damodardas_Modi_with_Shri_Rohit_Gurunath_Sharma_%28Cropped%29.jpg",
    college: "VNR VJIET",
    branch: "CSD",
    program: "DAAD Research Scholarship",
    type: "Scholarship",
    year: "2nd Year"
  },
  {
    id: 3,
    name: "Bhuvi",
    img: "https://documents.iplt20.com/ipl/IPLHeadshot2025/15.png",
    college: "JNTU Hyderabad",
    branch: "Mechanical Engineering",
    program: "ISRO Internship Program",
    type: "Internship",
    year: "4th Year"
  },
  {
    id: 4,
    name: "Siraj",
    img: "https://upload.wikimedia.org/wikipedia/commons/d/da/Prime_Minister_Of_Bharat_Shri_Narendra_Damodardas_Modi_with_Mohammad_Siraj_%28cropped%29.jpg",
    college: "MALLA REDDY ENGINEERING COLLEGE",
    branch: "Biotechnology",
    program: "Inspire Scholarship by DST",
    type: "Scholarship",
    year: "1st Year"
  },
  {
    id: 5,
    name: "ABD",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLiWCEBmcc1zWwqZyf1oahMZzDyWtl1oF84Q&s",
    college: "CBIT Hyderabad",
    branch: "IT",
    program: "Microsoft Engage Internship",
    type: "Internship",
    year: "3rd Year"
  },
  {
    id: 6,
    name: "Smudge",
    img: "https://images.mykhel.com//webp/images/cricket/players/2/4552.jpg?v=5",
    college: "CVR Hyderabad",
    branch: "Chemical Engineering",
    program: "Reliance Research Fellowship",
    type: "Scholarship",
    year: "2nd Year"
  },
  {
    id: 7,
    name: "Kane Williamson",
    img: "https://d1k8sn41pix00a.cloudfront.net/media/players/photos/kane-williamson-new-hd-wallpapers-high-definition-images-1080p-xuq.png",
    college: "Vasavi Engineering College",
    branch: "AI & ML",
    program: "Amazon Machine Learning Internship",
    type: "Internship",
    year: "3rd Year"
  },
  {
    id: 8,
    name: "Pandya",
    img: "https://documents.bcci.tv/resizedimageskirti/2740_compress.png",
    college: "IIIT Delhi",
    branch: "Electronics and Communication",
    program: "IEEE Men in Tech Scholarship",
    type: "Scholarship",
    year: "2nd Year"
  }
];

function Internships() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="internship-hero">
        <h2 className="internship-title">
          ✨ Internship and Scholarship Opportunities at Top Engineering Colleges in Telangana 🎓
        </h2>
        <p className="internship-subtitle">
          🌟 Make a difference in your career with your exclusive opportunities! 🚀
        </p>
        <div className="internship-emojis">📚 💻 🏆 🔬 🏫 🎓</div>

        <style jsx>{`
          .internship-hero {
            background: linear-gradient(
              90deg,
              #ff9af7ff,
              #ebc4faff,
              #ddc2fbff,
              #a1fdbeff,
              #c2e9fb
            );
            background-size: 300% 300%;
            animation: gradientBG 8s ease infinite;
            border-radius: 0 0 20px 20px;
            text-align: center;
            color: #222;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.7);
            padding: 60px 20px;
            min-height: 250px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          .internship-title {
            font-size: clamp(1.5rem, 4vw, 2rem);
            font-weight: 700;
            margin-bottom: 10px;
          }

          .internship-subtitle {
            font-size: clamp(1rem, 3vw, 1.2rem);
            font-weight: 600;
            margin: 5px 0;
          }

          .internship-emojis {
            font-size: clamp(1rem, 3.5vw, 1.5rem);
          }

          @media (max-width: 768px) {
            .internship-hero {
              padding: 15px 10px;
              min-height: 120px;
            }
            .internship-title {
              font-size: 1.2rem;
            }
            .internship-subtitle {
              font-size: 0.9rem;
            }
            .internship-emojis {
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

      {/* Students Cards */}
      <div className="container mt-4 mb-5">
        <h2 className="text-center fw-bold mb-4">🎓 Student Internships & Scholarships</h2>
        <div className="row g-3">
          {studentsData.map((student) => (
            <div key={student.id} className="col-6 col-md-3">
              <div className="card h-100 shadow-lg rounded-4 student-card">
                <img
                  src={student.img}
                  alt={student.name}
                  className="card-img-top"
                />
                <div className="card-body text-center">
                  <h5 className="fw-bold">{student.name}</h5>
                  <p className="mb-1">🏫 {student.college}</p>
                  <p className="mb-1">📚 {student.branch}</p>
                  <p className="mb-1">📅 {student.year}</p>
                  <span className={`badge ${student.type === "Internship" ? "bg-success" : "bg-primary"} mb-2`}>
                    {student.type}
                  </span>
                  <p className="fw-semibold">{student.program}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* Student Cards & Images Responsive Styles */}
      <style jsx>{`
        .student-card {
          background: whitesmoke;
          border: none;
          borderShadow: 0 4px 15px rgba(0, 0, 0, 0.7);
        }
        .student-card img {
          height: 180px;
          width: 100%;
          object-fit: contain;
          border-top-left-radius: 15px;
          border-top-right-radius: 15px;
        }

        @media (max-width: 768px) {
          .student-card img {
            height: 120px;
          }
          .card-body h5 {
            font-size: 1rem;
          }
          .card-body p, .card-body span, .card-body .fw-semibold {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </>
  );
}

export default Internships;
