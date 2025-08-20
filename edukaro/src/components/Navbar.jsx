import React from 'react'
import { Link, NavLink } from 'react-router-dom'



function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand ms-3" to="/">
          <i className="bi bi-award"></i> EduKaro
        </Link>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ms-3 p-2">
            <li className="nav-item active">
              <Link className="nav-link fw-bold" to="/">
                <i className="bi bi-house-door-fill"></i>
                Home <span className="sr-only"></span>
              </Link>
            </li>
            <li className="nav-item">
  <Link className="nav-link" to="/">
    <i className="bi bi-info-circle-fill"></i> About
  </Link>
</li>
<li className="nav-item">
  <Link className="nav-link" to="/">
    <i className="bi bi-telephone-fill"></i> Contact
  </Link>
</li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2 ms-5 w-100"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success ms-2" type="submit">
              Search
            </button>
          </form>
        </div>
        <div>
          <Link
            to="/college-stats"
            className="
              inline-flex items-center gap-2
              border-2 border-white rounded-md
              px-3 py-1
              text-white 
              text-decoration-none
              transition
              duration-300
              ease-in-out
              hover:bg-yellow-400 hover:text-black
              hover:shadow-[0_0_10px_3px_rgba(255,215,0,0.75)]
              focus:bg-yellow-400 focus:text-black
              focus:shadow-[0_0_15px_5px_rgba(255,215,0,0.9)]
              active:shadow-[0_0_20px_7px_rgba(255,215,0,1)]
            "
          >
            <i className="bi bi-pie-chart-fill"></i>
            <span className='ms-2'>College Statistics</span>
          </Link>
        </div>
<div>
     <Link
      to="/college-predictor"
      className="
        inline-flex items-center gap-2
        border-2 border-white rounded-md
        px-3 py-1
        text-white
        text-decoration-none
        transition
        duration-300
        ease-in-out
        hover:bg-yellow-400 hover:text-black
        hover:shadow-[0_0_10px_3px_rgba(255,215,0,0.75)]
        focus:bg-yellow-400 focus:text-black
        focus:shadow-[0_0_15px_5px_rgba(255,215,0,0.9)]
        active:shadow-[0_0_20px_7px_rgba(255,215,0,1)]
        "
      >
      <i className="bi bi-mortarboard-fill text-white text-lg me-2"></i>
      <span>College Predictor</span>
    </Link>
  </div>

<div className='dropdown toggle h-20'>
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="bi bi-info text-white"></i>
          <Link className="nav-link text-white" to="/more">More</Link>
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li><Link className="dropdown-item" to="/college-info"><i className="bi bi-trophy-fill"></i> Top Colleges List</Link></li>
            <li><Link className="dropdown-item" to="/rankings"><i className="bi bi-mortarboard-fill"></i> College Rankings</Link></li>
            <li><Link className="dropdown-item" to="/reservation-policy"><i className="bi bi-info-circle-fill"></i> Reservation Policy</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  )

}

export default Navbar;
