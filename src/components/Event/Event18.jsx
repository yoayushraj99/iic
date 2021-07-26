import React from "react";
import Navbar from "../Nav-foot/Navbar";
import Footer from "../Nav-foot/Footer";
import Img from "../../images/Event18.PNG";
const Events18 = () => {
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
              IIIC Session by Dr. S.k.Lahiri on "INNOVATION - The new ENGINE of
              the century
            </h2>
            <p>25th June</p>
          </div>
          <span></span>
          <article>
            <p>Dear Students,</p>
            <p>
              Greetings from Institute Innovation and Incubation Cell (IIIC),
              NIT Durgapur!
            </p>
            <p>
              A session was organized by EDC and IIIC in association with the
              Ramkrishna Institute of Science And Technology, Kolkata. It was
              based on the theme of "INNOVATION - The new ENGINE of the century"
              wherein, Dr. Lahiri motivated the students and elucidated on the
              importance of straying from the norm to aid a better future for
              Indian Society.
            </p>
            <p>
              <h5>Objective</h5>
              The speaker of this session, Prof Sandip Kumar Lahiri had
              delivered his expertise and knowledge of today’s industries to the
              students through an elaborate presentation on innovation. The
              target of this session was to explain to students the difference
              between an invention and an innovation, and how to go about
              developing both into start ups, which are slowly becoming the face
              of the business world today.
            </p>
            <p>
              <h5>Benefits</h5>
              Through this session, students were able to understand what
              innovation truly means, through both foreign examples, and those
              seen close to NIT Durgapur. Students were also motivated to pursue
              a start-up based career because such a career is based on
              originality, and those who pursue it have the freedom to carve out
              their own paths, set their own goals, and work for something they
              believe in. They were also familiarized with the fact that
              start-ups involve a great degree of organized work, and how they
              would approach this work as well.
            </p>
          </article>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Events18;
