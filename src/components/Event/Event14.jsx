import React from "react";
import Navbar from "../Nav-foot/Navbar";
import Footer from "../Nav-foot/Footer";

const Events05 = () => {
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
            <h2>Founders Forum</h2>
            <p>3rd April</p>
          </div>
          <span></span>
          <article>
            <p>Dear Students,</p>
            <p>
              Greetings from Institute Innovation and Incubation Cell (IIIC),
              NIT Durgapur!
            </p>
            <p>
              An initiative to bring the leaders of successful startups together
              in a panel to throw light on the essence of leadership. With the
              aim to show the audience what it takes to build a startup from
              scratch and raise to become a profitable venture, EDC brought
              Founders Forum, a panel discussion involving imminent CEOs who
              shared stories of their entrepreneurial journey.
            </p>
            {/* <h5>AWARD</h5>
            <p>
              <strong>
                1. Top 3 best innovative ideas will be awarded by our Director
                sir with certificate and trophy. [ Best innovative idea trophy,
                2020 of our institute]
              </strong>
            </p>
            <p>
              <strong>
                2. Students of top 25 ideas will be given in-house and external
                training, incubation support and industry back up to make
                prototype and commercialize.
              </strong>
            </p> */}
            <h5>In the panel we had,:</h5>
            <p>
              <h5>Mr. Satanik Roy:</h5>
              <p>
                a mechanical engineer turned entrepreneur started from his dorm
                room, and went on to build Hyperxchange growing it to over a
                couple of million dollars valuation. He is also featured in the
                Forbes 30 under 30 list.
              </p>

              <h5>Ms. Sonam Srivastava:</h5>
              <p>
                an alumnus of IIT Kanpur. She is the founder and CEO at Wright.
                She was featured in India's top 100 women in finance.
              </p>

              <h5>Mr. Arvind Prakash Singh :</h5>
              <p>
                the CEO of SuperBolter. He is a 3x entrepreneur and also the
                founder of Superbolter.
              </p>

              <h5>Ms. Meera Shenoy :</h5>
              <p>
                a social change maker, and founder of Youth4Jobs. She has
                dedicated her life to skilling underprivileged youth for jobs.
              </p>

              <h5>Mr. Sandeep Jain :</h5>
              <p>
                CEO of Geeks for Geeks as a panellist. He is an alumnus of IIT
                Roorkee and also the founder of GeeksForGeeks.
              </p>
            </p>
          </article>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Events05;
