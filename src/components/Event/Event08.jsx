import React from "react";
import Navbar from "../Nav-foot/Navbar";
import Footer from "../Nav-foot/Footer";
import Img from "../../images/Event08.PNG";
import ButtonsOnRight from '../ButtonsOnRight/ButtonsOnRight'
const Events08 = () => {
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
            <h2>Internship Fair(Quarter 4-Option 9)</h2>
          </div>
          <span></span>
          <article>
            <p>Dear Students,</p>
            <p>
              Greetings from Institute Innovation and Incubation Cell (IIIC),
              NIT Durgapur!
            </p>
            <p>
              Internship Fair: A one of a kind event where opportunity came
              knocking on the door for students yearning to get their hands
              dirty in the corporate industry. With more than 10 companies to
              apply to, students got the chance to intern at startups for
              various profiles including web development, content writing,
              digital marketing, etc. E-Summit’21 saw tremendous participation
              and several successful applications from the different years. This
              event gave the students exposure and insight into what goes on
              behind interview walls and posed as the perfect challenge to best
              develop their skills.
            </p>
            <h5>Companies:</h5>
            <p>
              <strong>Acadmia</strong>
            </p>
            <p>
              <strong>Recyclo bin</strong>
            </p>
            <p>
              <strong>Lovelykee</strong>
            </p>
            <p>
              <strong>DMatic Digital Pvt. Ltd.</strong>
            </p>
            <p>
              <strong>Tech Particle</strong>
            </p>
            <p>
              <strong>Fly Bagna</strong>
            </p>
            <p>
              <strong>Espangle</strong>
            </p>
            <p>
              <strong>Abyze</strong>
            </p>
            <p>
              <strong>Sahu Technologies</strong>
            </p>
            <p>
              <strong>Smer</strong>
            </p>
            <p>
              <strong>Acadmia</strong>
            </p>
            <p>
              <strong>Counsellit</strong>
            </p>
            <p>
              <strong>cppsecrets technologies Pvt. Ltd.</strong>
            </p>
            <p>
              <strong>Tutoraj</strong>
            </p>
            <p>
              <strong>DGTLmart</strong>
            </p>
          </article>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Events08;
