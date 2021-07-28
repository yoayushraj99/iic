import React from "react";
import { NavLink } from "react-router-dom";
import IncubationNav from "./IncubationNav";

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

  window.addEventListener("DOMContentLoaded", (event) => {
    // Navbar shrink function
    var navbarShrink = function () {
      const navbarCollapsible = document.body.querySelector("#mainNav");
      if (!navbarCollapsible) {
        return;
      }
      if (window.scrollY === 0) {
        navbarCollapsible.classList.remove("navbar-shrink");
      } else {
        navbarCollapsible.classList.add("navbar-shrink");
      }
    };

    // Shrink the navbar
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener("scroll", navbarShrink);

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector(".navbar-toggler");
    const responsiveNavItems = [].slice.call(
      document.querySelectorAll("#navbarResponsive .nav-link")
    );
    responsiveNavItems.map(function (responsiveNavItem) {
      responsiveNavItem.addEventListener("click", () => {
        if (window.getComputedStyle(navbarToggler).display !== "none") {
          navbarToggler.click();
        }
      });
    });
  });

  return (
    <>
      <IncubationNav />
      <nav
        style={styleNavbar}
        class="navbar navbar-expand-lg navbar-light fixed-top"
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
