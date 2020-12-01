import React from "react";
import { NavLink, Route } from 'react-router-dom';

function Navbar() {

  const styleLink = {
    color: 'yellow',
    textDecoration: 'none'
  }

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
            <NavLink to="/" style={styleLink}>Home</NavLink>
            </a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" style={styleLink}>About</a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">About IIC</a></li>
                <li><a className="dropdown-item" href="#">Facilities</a></li>
                <li><a className="dropdown-item" href="#">Team</a></li>
                <li><a className="dropdown-item" href="#">What we do</a></li>
                <li><a className="dropdown-item" href="#">FaQ</a></li>
                <li><a className="dropdown-item" href="#">GuideLines</a></li>
              </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
            <NavLink to="/Programmes" style={styleLink}>Programmes</NavLink>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
            <NavLink to="/Partners" style={styleLink}>Partners</NavLink>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
            <NavLink to="/Portfolio" style={styleLink}>Portfolio</NavLink>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
            <NavLink to="/Connect" style={styleLink}>Connect</NavLink>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
            <NavLink to="/Testimonial" style={styleLink}>Testimonial</NavLink>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
            <NavLink to="/Testimonial" style={styleLink}>Tinkering Lab</NavLink>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
