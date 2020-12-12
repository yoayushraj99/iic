import React from "react";

function Footer() {
  const iconStyle = {
    fontSize: "18px",
  };

  return (
    <footer className="footer-bs">
      <div className="row">
        <div className="col-md-3 footer-brand animated fadeInLeft">
          <img
            src="https://nitdgp.ac.in/static/img/nitdgp_logo_white.png"
            alt="Nit Dgp Logo"
            height="170"
          />
          <ul className="footer-address">
            <li>
              <a
                target="_blank"
                href="https://www.google.com/maps/place/N+I+T+Durgapur+Office+%26+Lab./@23.5476717,87.2909496,17z/data=!4m12!1m6!3m5!1s0x39f772081cede5e9:0x33fb9ccb243dfa5!2sNational+Institute+of+Technology!8m2!3d23.5476717!4d87.2931383!3m4!1s0x39f772080b442349:0x1dad2f8b160b2f08!8m2!3d23.5479595!4d87.2914168"
                rel="noopener noreferrer"
              >
                <i
                  className="fas fa-map-marker-alt text-danger mr-2"
                  style={iconStyle}
                ></i>
              </a>
              Mahatma Gandhi Avenue, Durgapur, West Bengal, India, PIN 713209
            </li>
            <li>
              <i className="fas fa-envelope mr-2" style={iconStyle}></i>
              <a href="mailto:iic@che.nitdgp.ac.in" className="text-white">iic@che.nitdgp.ac.in</a>
            </li>
            {/* <li>
              <i className="fas fa-phone mr-2" style={iconStyle}></i>
              +012-212-0123
            </li> */}
          </ul>
          <p>Copyright © 2020 : IIC , NIT DGP. All Rights Reserved</p>
        </div>
        <div className="col-md-4 footer-nav animated fadeInUp">
          <h4>Menu —</h4>
          <div className="col-md-6">
            <ul className="pages">
              <li>
                <a href="https://nitdgp.ac.in/" target="_blank" rel="noopener noreferrer">NIT DURGAPUR</a>
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
                <a href="/">About Us</a>
              </li>
              <li>
                <a href="/Guideline">Terms & Condition</a>
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
              placeholder="Currently Inactive"
            ></input>
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
