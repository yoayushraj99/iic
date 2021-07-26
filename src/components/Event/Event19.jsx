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
              IIIC Session with Ms. Priyanka Chopra on the topic " How to plan
              for startups- Legal and ethical steps" and "Knowing IPR's and IP
              Management"
            </h2>
            <p>26th June</p>
          </div>
          <span></span>
          <article>
            <p>Dear Students,</p>
            <p>
              Greetings from Institute Innovation and Incubation Cell (IIIC),
              NIT Durgapur!
            </p>
            <p>
              EDC was pleased to conduct a workshop in partnership with IIC and
              featuring Miss Priyanka Chopra, an MBA , author and entrepreneur
              who provided extremely useful insights about the world of
              startups. The session was interactive, engaging and an overall
              enlightening experience.
            </p>
            <p>
              <h5>Objective</h5>
              In this session, the speaker Ms. Priyanka Chopra explained a path
              that is well frequented by engineers, that is, business. Being an
              entrepreneur herself, she intended to make it clear to the
              students about the steps that come immediately after the ideation
              and rough development of a Start-up: The legal and ethical
              aspects. The session explained to these students about the
              important domains within these two steps, the terminologies
              associated with the same, and the documentation that they might
              need to take their start-up ideas from the pages of their notebook
              and present it to the real world, for many years to come.
            </p>
            <p>
              <h5>Benefits</h5>
              The speaker of this session, Ms Choprai and expert in the world of
              entrepreneurship and business. Her experiences, coupled with her
              knowledge of the legal intricacies and the ethical approach
              towards business expansion provided the students with valuable
              information, both textbook and real-life-based. Her session made
              it easier for the students to understand that a business that
              begins with sorted legal documents and permissions, as well as an
              ethical standing, is one that can last a very long time, and can
              be scaled up once deemed favourable. The students also got to hear
              snippets of her success story as well. Ms Chopra also spent a
              significant portion of her session to teach the students about
              IPR’s and IP management, which is a crucial detail when it comes
              to start-ups. Her expertise and experience allowed the students to
              realize and strengthen their motivation towards building start-ups
              that last.
            </p>
          </article>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Events01;
