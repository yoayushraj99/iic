import React from "react";
import Navbar from "../Nav-foot/Navbar";
import Footer from "../Nav-foot/Footer";

const Events01 = () => {
  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <div className="boxShadow">
          <div className="container">
            <img
              src={require("../../images/innovation_contest.webp")}
              alt="Event01"
            />
          </div>
          <div className="mt-3">
            <h2>
              {" "}
              IIIC Session with Dr. Shibendu Shekhar Roy, on the topic
              "Prototype/Process Design and Development : Prototyping"
            </h2>
            <p>30th June</p>
          </div>
          <span></span>
          <article>
            <p>Dear Students,</p>
            <p>
              Greetings from Institute Innovation and Incubation Cell (IIIC),
              NIT Durgapur!
            </p>
            <p>
              EDC is pleased to conduct a workshop in partnership with IIC on
              "Prototype/Process Design and Development : Prototyping" presented
              by Dr. Shibendu Shekhar Roy, Professor and Associate Dean at NIT
              Durgapur and Developer of the Portable Oxygen Concentrator.
            </p>
          </article>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Events01;
