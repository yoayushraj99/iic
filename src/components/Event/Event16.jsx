import React from "react";
import Navbar from "../Nav-foot/Navbar";
import Footer from "../Nav-foot/Footer";
import Img from "../../images/Event16.PNG";
import ButtonsOnRight from '../ButtonsOnRight/ButtonsOnRight'
const Events16 = () => {
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
              Talk on "how to plan for a startup, with special reference to
              legal and ethical steps" by Ms. Deepali Saini.{" "}
            </h2>
            <p>28th March - 1st April</p>
          </div>
          <span></span>
          <article>
            <p>Dear Students,</p>
            <p>
              Greetings from Institute Innovation and Incubation Cell (IIIC),
              NIT Durgapur!
            </p>
            <p>
              Bold dreams require guidance from experienced and steady minds,
              and Ms. Deepali Saini, the Director and Founder of Think Design
              Collaborative Pvt Ltd is the perfect idol for the youth to look up
              to. We had the pleasure of organising a session with her on
              ethical and logical ways to proceed with a startup.
            </p>
            <p>
              <h5>Objective</h5>
              Engineering colleges are considered to be innovation hotspots in
              our country, and it isn’t uncommon for talented inventors and
              innovators to come up with never-before-seen technology or
              developments to existing technology and processes, and
              subsequently start-ups. The objective of this session, conducted
              by Ms. Deepali Saini was to teach these aspiring innovators about
              the step that comes immediately after the ideation and rough
              development of a Start-up: The legal and ethical aspects. The
              session explained to these students about the important domains
              within these two steps, the terminologies associated with the
              same, and the documentation that they might need to take their
              start-up ideas from the pages of their notebook and present it to
              the real world, for many years to come.
            </p>
            <p>
              <h5>Benefits</h5>
              The speaker of this session, Ms Saini is a seasoned expert in the
              realm of designing and strategizing when it comes to business and
              technology. Her knowledge of the legal intricacies and the ethical
              approach towards business expansion provided the students with
              valuable information, both textbook and experience-based. Her
              session made it easier for the students to understand that a
              business that begins with sorted legal documents and permissions,
              as well as an ethical standing, is one that can last a very long
              time, and can be scaled up once deemed favourable. The students
              also got to hear snippets of Ms Saini’s business story, the good
              parts of which inspired them. Ms Saini highlighted some common
              mistakes made by young start-up owners and explained to the
              students how they can avoid doing the same. Her expertise and
              experience allowed the students to realize and strengthen their
              motivation towards building start-ups that last.
            </p>
            <p>
              <strong>Number of participants: 50-70</strong>
            </p>
          </article>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Events16;
