import React from "react";
import { NavLink } from "react-router-dom";

function Navbar () {
  const styleLink = {
    color: "yellow",
    textDecoration: "none",
    letterSpacing: "0.8px",
    fontWeight: "500",
  };
  const styleNavbar = {
    boxShadow: "0 8px 6px -6px black",
    backgroundColor: "#161616",
    marginBottom: "10px",
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light py-3"
      style={ styleNavbar }
    >
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon bg-warning"></span>
      </button>
      <div
        className="collapse navbar-collapse"
        id="navbarNav"
        style={ { justifyContent: "center" } }
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              <NavLink to="/" style={ styleLink }>
                Home
              </NavLink>
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              data-toggle="dropdown"
              style={ styleLink }
            >
              About
            </a>
            <ul className="dropdown-menu">
              <li>
                <NavLink activeclassName="dropdown-item" to="/">
                  About IIC
                </NavLink>
              </li>
              <li>
                <NavLink activeclassName="dropdown-item" to="#">
                  Facilities
                </NavLink>
              </li>
              <li>
                <NavLink activeclassName="dropdown-item" to="/Team">
                  Team
                </NavLink>
              </li>
              <li>
                <NavLink activeclassName="dropdown-item" to="/Faq">
                  FaQ
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <NavLink to="/Programmes" style={ styleLink }>
                Programmes
              </NavLink>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <NavLink to="/gallery" style={ styleLink }>
                Gallery
              </NavLink>
            </a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="#">
            <NavLink to="/Partners" style={styleLink}>Partners</NavLink>
            </a>
          </li> */}
          <li className="nav-item">
            <a className="nav-link" href="#">
              <NavLink to="/Guideline" style={ styleLink }>
                GuideLines
              </NavLink>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <NavLink to="/Connect" style={ styleLink }>
                Contact-Us
              </NavLink>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <NavLink to="/Events" style={ styleLink }>
                Events
              </NavLink>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <NavLink to="/Tinkering" style={ styleLink }>
                Tinkering Lab
              </NavLink>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <NavLink to="/AsokeSen" style={ styleLink }>
                AsokeSen-DIC
              </NavLink>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <NavLink to="/Flowchart" style={ styleLink }>
                Policies
              </NavLink>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
