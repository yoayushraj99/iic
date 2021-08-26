import React from "react";
import Navbar from "../Nav-foot/Navbar";
import Footer from "../Nav-foot/Footer";
import Img from "../../images/Event06.PNG";
import ButtonsOnRight from '../ButtonsOnRight/ButtonsOnRight'

const Events06 = () => {
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
            <h2>Pitchfest (Quarter 3-Option 5)</h2>
            <p>4th April, 2021</p>
          </div>
          <span></span>
          <article>
            <p>Dear Students,</p>
            <p>
              Greetings from Institute Innovation and Incubation Cell (IIIC),
              NIT Durgapur!
            </p>
            <p>
              EDC’s flagship event where students from all across India
              presented their creative business ideas before a panel of renowned
              judges, mentors and investors with the chance to gain funding and
              mentorship from the industry experts. The perfect opportunity for
              students to pitch themselves and get a practical experience of
              true entrepreneurship. E-Summit’21 saw a plethora of brilliant
              ideas from students across several colleges, putting up a tough
              competition for the top spots. The best ideas received prizes,
              coupons and mentorship from the esteemed panel to shape their
              entrepreneurial dreams. The event was graced by a keynote speech
              from digital marketing veteran, Mr. Atul Hegde.
            </p>
            <h5>WINNER</h5>
            <p>
              <strong>1st - Nihal Konan</strong>
            </p>
            <p>
              <strong>2nd - Pedals Go 2.2</strong>
            </p>
            <p>
              <strong>3rd - Assysst</strong>
            </p>
            {/* <h5>TIMELINE OF EVENTS:</h5>
            <p>
              <h5>1. Proposal Round:</h5>
              <p>
                Students can register themselves and submit a brief description
                of their project ideas through the following link:
              </p>
              <p>
                REGISTRATION LINK:{" "}
                <a
                  href="http://bit.ly/30xdgCz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary"
                >
                  http://bit.ly/30xdgCz
                </a>
              </p>
              <p>
                <strong>LastDate of Submission: 20th October 2020</strong>
              </p>
              <p>
                <h5>
                  2. Presentation and Shortlisting of Ideas For Prototype
                  Formation:
                </h5>
                Once the ideas are submitted, shortlisted students will be
                called for a detailed presentation of the ideas followed by an
                interview in front of a panel of professors of the IIIC. The
                panel will evaluate the ideas and the top three ideas will be
                declared as the winner of the Innovation Contest, 2020 by IIIC,
                NIT Durgapur. Further, the top few ideas from this round will be
                eligible to receive incubation support from IIIC, NIT Durgapur
                to build viable prototype. The number of students eligible for
                this will depend on the discretion of the panel.
              </p>
              <p>
                <h5>3. Prototype Formation:</h5>
                The IIIC, NIT Durgapur team will be in constant touch with the
                selected students and provide every possible assistance to them
                to build a viable prototype and further, commercialize their
                product. The students will receive infrastructure and space,
                funding, access to business support services and mentorship from
                the institute so that the idea is transformed into a successful
                product.
              </p>
            </p>
            <h5>EVALUATION CRITERIA:</h5>
            <p>
              <p>
                <strong>
                  The ideas will be judged and shortlisted on the following
                  criteria:
                </strong>
                <div className="mt-2">
                  <div>
                    <strong>1.</strong> Whether the identified problem really
                    exists in Society/Market/ Industry?
                  </div>
                  <div>
                    <strong>2.</strong> How specifically the proposed solution
                    resolves the identified problem?
                  </div>{" "}
                  <div>
                    <strong>3.</strong> Given the resources available, how
                    realistic is the student’s approach to achieve the solution
                    in a time bound manner?
                  </div>
                  <div>
                    <strong>4.</strong> Level of acceptance of Solution/Features
                    among target group
                  </div>
                  <div>
                    <strong>5.</strong> Potential of solution to Become
                    profitable or financially viable
                  </div>
                </div>
              </p>
            </p>
            <h5>WHY PARTICIPATE?</h5>
            <p>
              <div className="mt-2">
                <div>
                  <strong>1.</strong> Participate and stand a chance to receive
                  incubation services from the institute to give shape to your
                  dream project.
                </div>
                <div>
                  <strong>2.</strong> Get a chance to interact with industry
                  experts and get year-round personal mentorship.
                </div>{" "}
                <div>
                  <strong>3.</strong> Gain valuable insights into the process of
                  building a successful startup.
                </div>
                <div>
                  <strong>4.</strong> Certificate of recognition for the
                  shortlisted students and Participation certificate for every
                  student.
                </div>
              </div>
            </p>
            <p>
              Bill Gates. Mark Zuckerberg. Larry Page. Sergey Brin. They share
              more than a few enviable accomplishments. They’re billionaires,
              they made their fortunes in tech and they started their businesses
              while they were still ‘students’. Undoubtedly, student life is one
              of the best times to venture into the world of innovation and
              entrepreneurship. Innovation Contest 2020 is, therefore, the right
              platform for the students of NIT Durgapur to give shape to their
              entrepreneurial dreams, with the institute supporting them through
              all the stages.
            </p>
            <p>
              IIIC urges every student of NIT Durgapur, across all the
              departments and years, to come forward with their ideas and make
              the most of the wonderful opportunity in front of them. All the
              best!
            </p> */}
          </article>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Events06;
