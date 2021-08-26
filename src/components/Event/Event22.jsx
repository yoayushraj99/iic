import React from "react";
import Navbar from "../Nav-foot/Navbar";
import Footer from "../Nav-foot/Footer";
import Img from "../../images/Event22.PNG";
import ButtonsOnRight from '../ButtonsOnRight/ButtonsOnRight'
const Events22 = () => {
  return (
    <div>
      <Navbar />
      <ButtonsOnRight/>
      <div className="container-fluid">
        <div className="boxShadow">
          <div className="container">
            <img
              src={Img}
              alt="Event01"
            />
          </div>
          <div className="mt-3">
            <h2>
              IIIC Session with Mr. Abhinandan Sarkaf on the topic " Fostering
              An Innovative Mindset"
            </h2>
            <p>3rd July</p>
          </div>
          <span></span>
          <article>
            <p>Dear Students,</p>
            <p>
              Greetings from Institute Innovation and Incubation Cell (IIIC),
              NIT Durgapur!
            </p>
            <p>
              Team Entrepreneurship Development Cell was pleased to conduct a
              session in partnership with IIIC on "Fostering An Innovative
              Mindset" presented by Mr Abhinandan Sarkar who is the President of
              IIC Innovation Ambassador - MHRD Innovation Cell Shree Ramkrishna
              Institute of Science & Technology.
            </p>
          </article>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Events22;
