import React from "react";

function Footer() {
  return (
    <footer className="footer-bs">
      <div className="row">
        <div className="col-md-3 footer-brand animated fadeInLeft">
          <img
            src="https://nitdgp.ac.in/static/img/nitdgp_logo_white.png"
            alt="Nit Dgp Logo"
            height="170"
          />
          <p>Mahatma Gandhi Avenue, Durgapur, West Bengal, India, PIN 713209</p>
          <p>All rights reserved</p>
        </div>
        <div className="col-md-4 footer-nav animated fadeInUp">
          <h4>Menu —</h4>
          <div className="col-md-6">
            <ul className="pages">
              <li>
                <a href="#">NIT DURGAPUR</a>
              </li>
              <li>
                <a href="#">Lab</a>
              </li>
              <li>
                <a href="#">Gallery</a>
              </li>
              <li>
                <a href="#">Tender</a>
              </li>
              <li>
                <a href="#">Contribute</a>
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul className="list">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contacts</a>
              </li>
              <li>
                <a href="#">Terms & Condition</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-2 footer-social animated fadeInDown">
          <h4>Follow Us</h4>
          <ul>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
          </ul>
        </div>
        <div className="col-md-3 footer-ns animated fadeInRight">
          <h4>Newsletter</h4>
          <p>Sign Up to Our Newsletter to Get Latest Updates & Services</p>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              formcontrolname="useremail"
              placeholder="Enter Your Email"></input>
              <i class="fas fa-paper-plane fa-2x"></i>
            <span className="input-group-btn">
              <button className="btn btn-default" type="button">
                <span className="glyphicon glyphicon-envelope"></span>
              </button>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
