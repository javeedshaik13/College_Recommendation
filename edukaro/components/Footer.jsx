import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-3">
      <div className="container d-flex flex-wrap justify-content-between align-items-center">

        {/* Social Media */}
        <div className="d-flex align-items-center mb-2 mb-md-0">
          <Link
            to="https://facebook.com/edukaro"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-2"
            aria-label="Facebook"
          >
            <i className="bi bi-facebook fs-4"></i>
          </Link>

          <Link
            to="https://twitter.com/edukaro"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-2"
            aria-label="Twitter"
          >
            <i className="bi bi-twitter fs-4"></i>
          </Link>

          <Link
            to="https://instagram.com/edukaro"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-2"
            aria-label="Instagram"
          >
            <i className="bi bi-instagram fs-4"></i>
          </Link>

          <Link
            to="https://linkedin.com/company/edukaro"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-2"
            aria-label="LinkedIn"
          >
            <i className="bi bi-linkedin fs-4"></i>
          </Link>

          <Link
            to="https://linkedin.com/company/edukaro"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-2"
            aria-label="LinkedIn filled"
          >
            <i className="bi bi-linkedin-fill fs-4"></i>
          </Link>
        </div>

        {/* Rate Us */}
        <div className="d-flex align-items-center mb-2 mb-md-0">
          <span className="me-2">Rate us:</span>
          {[1, 2, 3, 4].map((star) => (
            <i
              key={star}
              className="bi bi-star-fill text-warning mx-1"
              aria-label={`${star} star`}
            />
          ))}
          <i className="bi bi-star-half text-warning mx-1" aria-label="half star" />
        </div>

        {/* Terms & Contact */}
        <div className="d-flex align-items-center mb-2 mb-md-0">
          <Link to="/terms" className="text-light me-4 text-decoration-none">
            <i className="bi bi-file-earmark-text me-1"></i> Terms & Services
          </Link>

          <Link
            to="mailto:support@edukaro.com"
            className="text-light text-decoration-none"
          >
            <i className="bi bi-envelope-fill me-1"></i> Contact Us
          </Link>
        </div>

        {/* Copyright */}
        <div className="mb-2 mb-md-0">© 2023 EduKaro. All rights reserved.</div>
      </div>
    </footer>
  );
}

export default Footer;
