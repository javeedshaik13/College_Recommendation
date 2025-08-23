import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const reviewsData = [
  {
    id: 1,
    name: "Ananya Sharma",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    college: "IIT Hyderabad",
    review: "Thanks to Edukaro, I got clear guidance on my branch preferences and joined my dream college!"
  },
  {
    id: 2,
    name: "Rahul Verma",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    college: "NIT Warangal",
    review: "Edukaro helped me compare colleges easily and take a confident decision. Highly recommended!"
  },
  {
    id: 3,
    name: "Sanya Gupta",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    college: "IIIT Delhi",
    review: "With Edukaro's counselling, I understood my options better and avoided wrong choices."
  },
  {
    id: 4,
    name: "Aditya Rao",
    img: "https://randomuser.me/api/portraits/men/85.jpg",
    college: "JNTU Hyderabad",
    review: "The personalised support from Edukaro made the entire admission process stress-free!"
  },
  {
    id: 5,
    name: "Meera Iyer",
    img: "https://randomuser.me/api/portraits/women/29.jpg",
    college: "Osmania University",
    review: "I was confused between multiple colleges, but Edukaro's expert guidance helped me choose wisely."
  },
  {
    id: 6,
    name: "Karthik Reddy",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    college: "BITS Pilani Hyderabad",
    review: "Edukaro’s resources gave me the clarity I needed to plan my future confidently."
  },
  {
    id: 7,
    name: "Priya Nair",
    img: "https://randomuser.me/api/portraits/women/15.jpg",
    college: "IIIT Hyderabad",
    review: "I loved how Edukaro explained branch selection and future prospects in detail. Very helpful!"
  },
  {
    id: 8,
    name: "Arjun Mehta",
    img: "https://randomuser.me/api/portraits/men/21.jpg",
    college: "SRM University",
    review: "Edukaro simplified the admission process and removed all my confusion. Great experience!"
  }
];

function UserReviews() {
  return (
    <div>
      <div
        style={{
          padding: "100px",
          background: "linear-gradient(90deg, #54c36eff, #9b55b7ff, #c2e7fbff, #eba1fdff, #41c080ff)",
          backgroundSize: "300% 300%",
          animation: "gradientBG 8s ease infinite",
          padding: "30px 20px",
          borderRadius: "0 0 20px 20px",
          textAlign: "center",
          color: "#222",
          boxShadow: "0 4px 15px rgba(0,0,0,0.7)"
        }}
      >
        <h2 className='fw-bold mb-4'>🌟 What Our Students Say About Edukaro 🌟</h2>
        <div className='container mt-4 d-flex flex-wrap justify-content-center'>
          {reviewsData.map((student) => (
            <div key={student.id} className='card m-3 p-3 shadow-lg rounded-4' style={{ width: "280px", border: "none" }}>
              <div className='d-flex align-items-center mb-3'>
                <img
                  src={student.img}
                  alt={student.name}
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    marginRight: "15px"
                  }}
                />
                <div className='text-start'>
                  <h6 className='fw-bold mb-0'>{student.name}</h6>
                  <small className='text-muted'>🏫 {student.college}</small>
                </div>
              </div>
              <p className='fst-italic text-secondary'>" {student.review} "</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default UserReviews;
