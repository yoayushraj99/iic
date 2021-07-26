import React from "react";
import Navbar from "../Nav-foot/Navbar";
import Footer from "../Nav-foot/Footer";
import Img from "../../images/Event20.PNG";
const Events20 = () => {
  return (
    <div>
      <Navbar />
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
              IIIC Session with Mr. Ankit Tripathi on the topic "building an
              innovative product fit for the market"
            </h2>
            <p>28th June, 2021</p>
          </div>
          <span></span>
          <article>
            <p>Dear Students,</p>
            <p>
              Greetings from Institute Innovation and Incubation Cell (IIIC),
              NIT Durgapur!
            </p>
            <p>
              EDC was pleased to conduct a workshop in partnership with IIC on
              "building an innovative product fit for the market" presented by
              Ankit Tripathi,* founder of Uneakol Social Impact, TedX Speaker,
              sustainability Climate change Changemaker and Young Social
              Entrepreneur.
            </p>
          </article>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Events20;
