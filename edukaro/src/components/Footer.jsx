import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-3">
      <div className="container text-center">
        {/* Row 1: Terms | Contact | Copyright */}
        <div className="d-flex justify-content-center align-items-center flex-wrap gap-2 mb-3 small">
          <Link to="/terms" className="text-light text-decoration-none d-flex align-items-center">
            <i className="bi bi-file-earmark-text me-1"></i> Terms
          </Link>
          <span className="text-secondary">|</span>
          <Link
            to="mailto:support@edukaro.com"
            className="text-light text-decoration-none d-flex align-items-center"
          >
            <i className="bi bi-envelope-fill me-1"></i> Contact
          </Link>
          <span className="text-secondary">|</span>
          <small>© 2023 EduKaro</small>
        </div>

        {/* Row 2: Social Media | Rating */}
        <div className="d-flex justify-content-center align-items-center flex-wrap gap-3">
          {/* Social Media */}
          <div className="d-flex align-items-center gap-3">
            <Link
              to="https://facebook.com/edukaro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light"
              aria-label="Facebook"
            >
              <i className="bi bi-facebook fs-5"></i>
            </Link>
            <Link
              to="https://twitter.com/edukaro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light"
              aria-label="Twitter"
            >
              <i className="bi bi-twitter fs-5"></i>
            </Link>
            <Link
              to="https://instagram.com/edukaro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light"
              aria-label="Instagram"
            >
              <i className="bi bi-instagram fs-5"></i>
            </Link>
            <Link
              to="https://linkedin.com/company/edukaro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light"
              aria-label="LinkedIn"
            >
              <i className="bi bi-linkedin fs-5"></i>
            </Link>
          </div>

          {/* Separator */}
          <span className="text-secondary">|</span>

          {/* Rating */}
          <div className="d-flex align-items-center">
            <span className="me-1 small">Rate us:</span>
            {[1, 2, 3, 4].map((star) => (
              <i
                key={star}
                className="bi bi-star-fill text-warning mx-1"
                style={{ fontSize: "0.9rem" }}
              />
            ))}
            <i
              className="bi bi-star-half text-warning mx-1"
              style={{ fontSize: "0.9rem" }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
