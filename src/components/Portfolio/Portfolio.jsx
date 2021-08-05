import React from 'react';
import Navbar from "../Nav-foot/Navbar";
import Footer from "../Nav-foot/Footer";
import under_c from '../../assets/img/under_c.webp';
import ButtonsOnRight from '../ButtonsOnRight/ButtonsOnRight'

function Portfolio() {
  return (
    <div>
      <Navbar />
      <ButtonsOnRight/>
      <img className="w-50" src={under_c} style={{marginLeft: "20%"}} alt="Webpage under construction" />
      <Footer />
    </div>
  );
}

export default Portfolio;
