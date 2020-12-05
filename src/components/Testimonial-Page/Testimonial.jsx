import React from 'react';
import Navbar from "../Nav-foot/Navbar";
import Footer from "../Nav-foot/Footer";
import under_c from '../../assets/img/under_c.png';

function Testimonial() {
  return (
    <div>
      <Navbar />
      <img className="w-50" src={under_c} style={{marginLeft: "20%"}} alt="Webpage under construction" />
      <Footer />
    </div>
  );
}

export default Testimonial;
