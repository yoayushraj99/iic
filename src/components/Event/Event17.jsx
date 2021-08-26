import React from "react";
import Navbar from "../Nav-foot/Navbar";
import Footer from "../Nav-foot/Footer";
import Img from "../../images/Event17.PNG";
import ButtonsOnRight from '../ButtonsOnRight/ButtonsOnRight'
const Events17 = () => {
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
            <h2>IIIC LOGO DESIGNING COMPETITION</h2>
            <p>2nd-6th February</p>
          </div>
          <span></span>
          <article>
            <p>Dear Students,</p>
            <p>
              Greetings from Institute Innovation and Incubation Cell (IIIC),
              NIT Durgapur!
            </p>
            <p>
              The Institute Innovation and Incubation Council(IIIC), NIT
              Durgapur, and Entrepreneurship Development Cell, NIT Durgapur
              organised a Logo Design Competition for students across all
              domains and gave them an opportunity to have one of their designs
              star as the Official Logo of the Institute Innovation and
              Incubation Council(IIIC) of NIT Durgapur(decided on the basis of
              likes, shares and the judge's discretion). In addition to this,
              certificates and cash prizes were given.
            </p>
            <p>
              <h5>Objective</h5>
              Icons and logos are a very important part of representation, and
              in some ways, marketing. A properly designed logo has the power to
              convey the entire idea behind a business or the motto of an
              organization through simple lines and shapes. The objective of
              this competition was to design a logo for the Institute Innovation
              and Incubation Centre. The logos would be judged based on its
              artistic design, representation, and overall flair, thus helping
              the students hone these qualities into their designs.
            </p>
            <p>
              <h5>Benefits</h5>
              There were several benefits of this competition. Firstly, the
              judgement by the professors of NIT Durgapur allowed the students
              to understand the requirements of a logo that represents an
              organization like IIIC. The exposure to the public through social
              media also allowed them to understand how well their logo designs
              would do when visible to a large number of people. Thirdly, the
              participants were able to exchange notes on the technicalities of
              their designs and the ideas behind them, thus allowing for a
              creative and informative exchange of ideas amongst peers.
            </p>
          </article>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Events17;
