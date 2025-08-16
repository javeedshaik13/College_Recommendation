import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'


const studentsData = [
  {
    id: 1,
    name: "Aarav Reddy",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    college: "IIT Hyderabad",
    branch: "CSE",
    program: "Google Summer of Code Internship",
    type: "Internship",
    year: "3rd Year"
  },
  {
    id: 2,
    name: "Megha Sharma",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    college: "NIT Warangal",
    branch: "ECE",
    program: "DAAD Research Scholarship",
    type: "Scholarship",
    year: "2nd Year"
  },
  {
    id: 3,
    name: "Rahul Verma",
    img: "https://randomuser.me/api/portraits/men/67.jpg",
    college: "JNTU Hyderabad",
    branch: "Mechanical Engineering",
    program: "ISRO Internship Program",
    type: "Internship",
    year: "4th Year"
  },
  {
    id: 4,
    name: "Priya Nair",
    img: "https://randomuser.me/api/portraits/women/21.jpg",
    college: "Osmania University",
    branch: "Biotechnology",
    program: "Inspire Scholarship by DST",
    type: "Scholarship",
    year: "1st Year"
  },
  {
    id: 5,
    name: "Karan Patel",
    img: "https://randomuser.me/api/portraits/men/12.jpg",
    college: "CBIT Hyderabad",
    branch: "IT",
    program: "Microsoft Engage Internship",
    type: "Internship",
    year: "3rd Year"
  },
  {
    id: 6,
    name: "Sneha Kulkarni",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    college: "BITS Pilani",
    branch: "Chemical Engineering",
    program: "Reliance Research Fellowship",
    type: "Scholarship",
    year: "2nd Year"
  },
  {
    id: 7,
    name: "Vikram Singh",
    img: "https://randomuser.me/api/portraits/men/82.jpg",
    college: "VIT Vellore",
    branch: "AI & ML",
    program: "Amazon Machine Learning Internship",
    type: "Internship",
    year: "3rd Year"
  },
  {
    id: 8,
    name: "Ananya Gupta",
    img: "https://randomuser.me/api/portraits/women/56.jpg",
    college: "IIIT Delhi",
    branch: "Electronics and Communication",
    program: "IEEE Women in Tech Scholarship",
    type: "Scholarship",
    year: "2nd Year"
  }
];

function Internships() {
  return (
    <>
      <Navbar />
      <div
        style={{
          marginTop:"100px",
          padding: "100px",
          background: "linear-gradient(90deg, #ff9af7ff, #ebc4faff, #ddc2fbff, #a1fdbeff, #c2e9fb)",
          backgroundSize: "300% 300%",
          animation: "gradientBG 8s ease infinite",
          padding: "30px 20px",
          borderRadius: "0 0 20px 20px",
          textAlign: "center",
          color: "#222",
          boxShadow: "0 4px 15px rgba(0,0,0,0.5)"
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
                style={{ border: "none", background: "#f9f9f9" }}
              >
                <img
                  src={student.img}
                  className="card-img-top rounded-top-4"
                  alt={student.name}
                  style={{ height: "220px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h5 className="fw-bold">{student.name}</h5>
                  <p className="mb-1">🏫 {student.college}</p>
                  <p className="mb-1">📚 {student.branch}</p>
                  <p className="mb-1">📅 {student.year}</p>
                  <span
                    className={`badge ${
                      student.type === "Internship" ? "bg-success" : "bg-primary"
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
      <Footer />
    </>
  )
}

export default Internships;

