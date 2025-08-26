import React from "react"; 
import { Link } from "react-router-dom"; 
 
function Footer() { 
  return ( 
    <footer className="bg-dark text-light py-4 mt-3"> 
      <div className="container"> 
        {/* Mobile: 2 cols per row, Desktop: Horizontal layout */}
        <div className="row g-2 g-md-3 align-items-center justify-content-center justify-content-md-between text-center text-md-start">
         
          {/* Rate Us - Half width on mobile */}
          <div className="col-6 col-md-auto order-2"> 
            <div className="d-flex justify-content-center justify-content-md-start align-items-center flex-wrap">
              <span className="me-1 small">Rate us:</span> 
              {[1, 2, 3, 4].map((star) => ( 
                <i 
                  key={star} 
                  className="bi bi-star-fill text-warning mx-1" 
                  style={{fontSize: '0.9rem'}}
                  aria-label={`${star} star`} 
                /> 
              ))} 
              <i className="bi bi-star-half text-warning mx-1" style={{fontSize: '0.9rem'}} aria-label="half star" /> 
            </div>
          </div> 
   
          {/* Terms & Contact - Half width on mobile */}
          <div className="col-6 col-md-auto order-3"> 
            <div className="d-flex flex-column justify-content-center justify-content-md-start align-items-center gap-1">
              <Link to="/terms" className="text-light text-decoration-none small"> 
                <i className="bi bi-file-earmark-text me-1"></i> Terms 
              </Link> 
   
              <Link 
                to="mailto:support@edukaro.com" 
                className="text-light text-decoration-none small" 
              > 
                <i className="bi bi-envelope-fill me-1"></i> Contact 
              </Link> 
            </div>
          </div> 
   
          {/* Copyright - Half width on mobile */}
          <div className="col-6 col-md-auto order-4 text-center text-md-start">
            <small>© 2023 EduKaro</small>
          </div> 
          {/* Social Media - Half width on mobile, auto on desktop */}
          <div className="col-6 col-md-auto order-1"> 
            <div className="d-flex justify-content-center justify-content-md-start align-items-center flex-wrap">
              <Link 
                to="https://facebook.com/edukaro" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-light mx-1" 
                aria-label="Facebook" 
              > 
                <i className="bi bi-facebook fs-5"></i> 
              </Link> 
   
              <Link 
                to="https://twitter.com/edukaro" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-light mx-1" 
                aria-label="Twitter" 
              > 
                <i className="bi bi-twitter fs-5"></i> 
              </Link> 
   
              <Link 
                to="https://instagram.com/edukaro" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-light mx-1" 
                aria-label="Instagram" 
              > 
                <i className="bi bi-instagram fs-5"></i> 
              </Link> 
   
              <Link 
                to="https://linkedin.com/company/edukaro" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-light mx-1" 
                aria-label="LinkedIn" 
              > 
                <i className="bi bi-linkedin fs-5"></i> 
              </Link> 
            </div>
          </div> 
        </div>
      </div> 
    </footer> 
  ); 
} 
 
export default Footer;