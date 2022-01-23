/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavLink } from "react-router-dom";

function NavbarNew() {
  const styleYellow = {
    fontSize: "45px",
    color: "#FFD700",
  };
  const styleLink = {
    fontSize: "14px",
    textDecoration: "none",
  };
  const styleNavbar = {
    boxShadow: "10px 10px 32px -7px rgba(0,0,0,0.36)",
    backgroundColor: "#ffffff",
    maxHeight: "5.5rem",
  };

  return (
    <>
      <nav
        style={styleNavbar}
        class="navbar navbar-expand-lg navbar-light"
        id="mainNav"
      >
        <div class="container px-4 px-lg-5">
          <a class="navbar-brand" href="#page-top">
            <NavLink to="/" style={styleYellow}>
              IIC
            </NavLink>
          </a>
          <button
            class="navbar-toggler navbar-toggler-right"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i class="fas fa-bars"></i>
          </button>
          <div
            class="collapse navbar-collapse"
            id="navbarResponsive"
            style={{ backgroundColor: "white" }}
          >
            <ul class="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <NavLink to="/Guideline" style={styleLink}>
                    GuideLines
                  </NavLink>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <NavLink to="/Programmes" style={styleLink}>
                    Programmes
                  </NavLink>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  data-toggle="dropdown"
                  style={{ color: "black" }}
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

              {/* <li className="nav-item">
            <a className="nav-link" href="#">
            <NavLink to="/Partners" style={styleLink}>Partners</NavLink>
            </a>
          </li> */}

              <li className="nav-item">
                <a className="nav-link" href="#">
                  <NavLink to="/Connect" style={styleLink}>
                    Contact-Us
                  </NavLink>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <NavLink to="/Events" style={styleLink}>
                    Events
                  </NavLink>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <NavLink to="/Tinkering" style={styleLink}>
                    Tinkering Lab
                  </NavLink>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <NavLink to="/AsokeSen" style={styleLink}>
                    AsokeSen-DIC
                  </NavLink>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarNew;
