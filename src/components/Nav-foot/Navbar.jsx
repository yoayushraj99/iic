import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <a href="#" className="navbar-brand navlogo">
        <img
          src="https://nitdgp.ac.in/static/img/nitdgp_logo.png"
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
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Programmes
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Partners
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Connect
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Testimonial
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
