import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top px-3">
      {/* Brand / Logo */}
      <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
        <i className="bi bi-award me-2"></i> EduKaro
      </Link>

      {/* Navbar Toggler */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarContent"
        aria-controls="navbarContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Collapsible Content */}
      <div className="collapse navbar-collapse" id="navbarContent">
        {/* Search Bar */}
        <form className="d-flex ms-lg-3 mt-2 mt-lg-0 flex-grow-1 me-auto">
          <div className="input-group">
            <input
              className="form-control"
              type="search"
              placeholder="Search colleges..."
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              <i className="bi bi-search"></i>
            </button>
          </div>
        </form>

        {/* Mobile Navigation */}
        <ul className="navbar-nav d-lg-none mt-3 mb-2">
          <li className="nav-item">
            <HashLink className="nav-link fw-bold" smooth to="/#home">
              <i className="bi bi-house-door-fill me-2"></i> Home
            </HashLink>
          </li>
          <li className="nav-item">
            <HashLink className="nav-link" smooth to="/#about">
              <i className="bi bi-info-circle-fill me-2"></i> About
            </HashLink>
          </li>
          <li className="nav-item">
            <HashLink className="nav-link" smooth to="/#contact">
              <i className="bi bi-telephone-fill me-2"></i> Contact
            </HashLink>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/college-stats">
              <i className="bi bi-pie-chart-fill me-2"></i> College Statistics
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/college-predictor">
              <i className="bi bi-mortarboard-fill me-2"></i> College Predictor
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/college-info">
              <i className="bi bi-trophy-fill me-2"></i> Top Colleges List
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/rankings">
              <i className="bi bi-mortarboard-fill me-2"></i> College Rankings
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/reservation-policy">
              <i className="bi bi-info-circle-fill me-2"></i> Reservation Policy
            </Link>
          </li>
        </ul>
      </div>

      {/* Desktop Navigation */}
      <div className="d-none d-lg-flex align-items-center">
        <ul className="navbar-nav me-3">
          <li className="nav-item">
            <HashLink className="nav-link fw-bold" smooth to="/#home">
              <i className="bi bi-house-door-fill me-1"></i> Home
            </HashLink>
          </li>
          <li className="nav-item">
            <HashLink className="nav-link" smooth to="/#about">
              <i className="bi bi-info-circle-fill me-1"></i> About
            </HashLink>
          </li>
          <li className="nav-item">
            <HashLink className="nav-link" smooth to="/#contact">
              <i className="bi bi-telephone-fill me-1"></i> Contact
            </HashLink>
          </li>
        </ul>

        {/* Action Buttons */}
        <div className="d-flex align-items-center gap-2">
          <Link
            to="/college-stats"
            className="btn btn-outline-light btn-sm d-flex align-items-center"
          >
            <i className="bi bi-pie-chart-fill me-1"></i> College Statistics
          </Link>
          <Link
            to="/college-predictor"
            className="btn btn-outline-light btn-sm d-flex align-items-center"
          >
            <i className="bi bi-mortarboard-fill me-1"></i> College Predictor
          </Link>

          {/* Dropdown */}
          <div className="dropdown">
            <button
              className="btn btn-secondary btn-sm"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="bi bi-three-dots-vertical"></i>
            </button>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="dropdownMenuButton"
            >
              <li>
                <Link className="dropdown-item" to="/college-info">
                  <i className="bi bi-trophy-fill me-2"></i> Top Colleges List
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/rankings">
                  <i className="bi bi-mortarboard-fill me-2"></i> College Rankings
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/reservation-policy">
                  <i className="bi bi-info-circle-fill me-2"></i> Reservation Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
