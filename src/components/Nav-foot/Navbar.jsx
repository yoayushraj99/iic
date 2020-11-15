import React from "react";
import { NavLink, Route } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-light" style={{backgroundColor: "#303F47"}}>
      <a href="#" className="navbar-brand navlogo ">
        <img
          src="https://nitdgp.ac.in/static/img/nitdgp_logo_white.png"
          alt="Nit Dgp Logo"
          height="80"
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse"
        id="navbarNav"
        style={{ justifyContent: "center" }}>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" href="#">
            <NavLink to="/" style={{ color: 'yellow' }}>Home</NavLink>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
            <NavLink to="/About" style={{ color: 'yellow' }}>About</NavLink>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
            <NavLink to="/Programmes" style={{ color: 'yellow' }}>Programmes</NavLink>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
            <NavLink to="/Partners" style={{ color: 'yellow' }}>Partners</NavLink>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
            <NavLink to="/Portfolio" style={{ color: 'yellow' }}>Portfolio</NavLink>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
            <NavLink to="/Connect" style={{ color: 'yellow' }}>Connect</NavLink>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
            <NavLink to="/Testimonial" style={{ color: 'yellow' }}>Testimonial</NavLink>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
