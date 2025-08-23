import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'


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
    program: "IEEE Men   in Tech Scholarship",
    type: "Scholarship",
    year: "2nd Year"
  }
];

function Internships() {
  return (
    <>
      <div
        style={{
          padding: "100px",
          background: "linear-gradient(90deg, #ff9af7ff, #ebc4faff, #ddc2fbff, #a1fdbeff, #c2e9fb)",
          backgroundSize: "300% 300%",
          animation: "gradientBG 8s ease infinite",
          padding: "30px 20px",
          borderRadius: "0 0 20px 20px",
          textAlign: "center",
          color: "#222",
          boxShadow: "0 4px 15px rgba(0,0,0,0.7)"
        }}
      >
        <h2 style={{ fontWeight: "bold", fontSize: "2rem" }}>✨ Internship and Scholarship Opportunities secured at Top Engineering Colleges in Telangana 🎓</h2>
        <p style={{ fontSize: "1.2rem", margin: "10px 0" }}>🌟Make a difference in your career with your exclusive opportunities! in Colleges 🚀</p>
        <div style={{ fontSize: "1.5rem" }}>📚 💻 🏆 🔬 🏫 🎓</div>
      </div>
      <div className="container mt-5">
        <h2 className="text-center fw-bold mb-4">🎓 Student Internships & Scholarships</h2>
        <div className="row">
          {studentsData.map((student) => (
            <div key={student.id} className="col-md-3 mb-4">
              <div
                className="card h-100 shadow-lg rounded-4"
                style={{ border: "none", background: "whitesmoke" }}
              >
                <img
                  src={student.img}
                  className="card-img-top"
                  alt={student.name}
                  style={{
                    height: "220px",
                    width: "100%",
                    objectFit: "contain",     // fills the space without stretching
                    borderTopLeftRadius: "15px", // rounded corners
                    borderTopRightRadius: "15px"
                  }}
                />

                <div className="card-body text-center">
                  <h5 className="fw-bold">{student.name}</h5>
                  <p className="mb-1">🏫 {student.college}</p>
                  <p className="mb-1">📚 {student.branch}</p>
                  <p className="mb-1">📅 {student.year}</p>
                  <span
                    className={`badge ${student.type === "Internship" ? "bg-success" : "bg-primary"
                      } mb-2`}
                  >
                    {student.type}
                  </span>
                  <p className="fw-semibold">{student.program}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Internships;

