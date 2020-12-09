import React from "react";
import Navbar from "../Nav-foot/Navbar";
import Footer from "../Nav-foot/Footer";

function Connect() {
  return (
    <div>
      <Navbar/>
      <div className="container">
      <img src={require("../../images/handshake.jpg")} alt="connect-us" className="responsive-img connect-img"></img>
      <div className="button-section">
        <a href="#" class="BUTTON_FKX">Incubation Registration</a>
        <a href="#" class="BUTTON_FKX">Join IIC</a>
      </div>
      <div className="map-responsive">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.5781159595226!2d87.29094961481121!3d23.547671684689654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f772081cede5e9%3A0x33fb9ccb243dfa5!2sNational%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1605460466997!5m2!1sen!2sin"
        width="600"
        height="450"
        frameborder="0"
        style={{ border: "0" }}
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
        title="NitDurgapur"></iframe>
      </div> 
      </div>
      <Footer/>
    </div>
  );
}

export default Connect;