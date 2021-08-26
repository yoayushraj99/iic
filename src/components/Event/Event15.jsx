import React from "react";
import Navbar from "../Nav-foot/Navbar";
import Footer from "../Nav-foot/Footer";
import Img from "../../images/Event15.PNG";
import ButtonsOnRight from '../ButtonsOnRight/ButtonsOnRight'
const Events15 = () => {
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
            <h2>Startup of the Month</h2>
          </div>
          <span></span>
          <article>
            <p>Dear Students,</p>
            <p>
              Greetings from Institute Innovation and Incubation Cell (IIIC),
              NIT Durgapur!
            </p>
            <p>
              EDC primarily came into existence with the purpose to promote the
              StartUp culture in our college. Every help that one needs to
              promote and prepare their startups, is our responsibility to
              provide. Keeping this purpose in mind, we are extremely proud to
              announce our next venture - StartUp of The Month! If you are a
              student/alumnus of NIT Durgapur with a startUp and want to get
              featured and promoted by us, fill up the link given below. StartUp
              of the Month will bring successful StartUps of our own college
              students and alumni along with the details of their journey to
              becoming a successful founder! Learn what it takes to become an
              entrepreneur from the ones around you, come forward with your
              creations and one day it might be YOUR StartUp being featured in
              StartUp of the Month!
            </p>
            <p>
              The current generation recognizes this and we see many enthusiasts
              aiming for their own well established startups, while many have
              already begun, many are still in their initial phase of planning
              and executing the same. The Entrepreneurship Development Cell with
              its new initiative, "Start Up of the month", aims to promote the
              startup culture in the country. By providing a platform for young
              entrepreneurs to announce, market, expand, and develop their plan
              of action, while providing a learning opportunity for the budding
              enthusiasts to learn of the same, encouraging on the way people to
              work on their own plan of financial freedom.
            </p>
          </article>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Events15;
