//@ts-check
import React from "react";
import Navbar from "../Nav-foot/Navbar";
import Footer from "../Nav-foot/Footer";
import IncubationNAv from "../Nav-foot/IncubationNav";
import ButtonsOnRight from '../ButtonsOnRight/ButtonsOnRight'

function Connect() {
  return (
    <div>
      <IncubationNAv />
      <Navbar />
      <ButtonsOnRight/>
      <div className="container">
        <img
          src={require("../../images/contact-banner.webp")}
          alt="GuideLine"
          className="guideline-img"
        />
        <div className="button-section">
          <a
            href="https://forms.gle/4szgt8DmfaqnpwsBA"
            className="BUTTON_FKX"
            target="_blank"
            rel="noopener noreferrer"
          >
            Incubation Registration
          </a>
          <a
            href="https://forms.gle/6VGr95L61Ydsys4RA"
            className="BUTTON_FKX"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join IIC
          </a>
        </div>
        <div className="row text-center p-5">
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x "></i>
              <i className="fas fa-phone fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="service-heading">----------------</h4>
          </div>
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x "></i>
              <i className="fas fa-map-marker-alt fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="service-heading">
              Mahatma Gandhi Avenue, Durgapur, West Bengal, India, PIN 713209
            </h4>
          </div>
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x "></i>
              <i className="fas fa-envelope fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="service-heading">iic@che.nitdgp.ac.in</h4>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="map-responsive">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.5781159595226!2d87.29094961481121!3d23.547671684689654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f772081cede5e9%3A0x33fb9ccb243dfa5!2sNational%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1605460466997!5m2!1sen!2sin"
            width="600"
            height="450"
            frameBorder="0"
            style={{ border: "0" }}
            allowFullScreen=""
            aria-hidden="false"
            tabindex="0"
            title="NitDurgapur"
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Connect;
