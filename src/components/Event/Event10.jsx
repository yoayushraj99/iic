import React from "react";
import Navbar from "../Nav-foot/Navbar";
import Footer from "../Nav-foot/Footer";
import Img from "../../images/Event10.PNG";
import ButtonsOnRight from '../ButtonsOnRight/ButtonsOnRight'
const Events10 = () => {
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
            <h2>Rannit-E</h2>
            <p>2nd April, 2021</p>
          </div>
          <span></span>
          <article>
            <p>Dear Students,</p>
            <p>
              Greetings from Institute Innovation and Incubation Cell (IIIC),
              NIT Durgapur!
            </p>
            <p>
              It is a Case Study event. It puts being able to think out of the
              box and a keen presence of mind to the test by making participants
              step into the shoes of a CEO in charge of steering a company out
              of a crisis by making shrewd,calculated decisions. Participants
              presented their solutions in front of incredibly accomplished
              guests. They say, "Great contests demand great judgment". We say,
              we have both. Be it risk management or decision making, we are
              backed by the most accomplished judging panel. Unveiling the most
              proficient panel of judges for E-Summit's one of the most yearned
              for flagship events, the Case Study Challenge aka Rannit-E 2.0.
              Introducing our esteemed panel of judges-
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
            <h5>PEOPLE:</h5>
            <p>
              <h5>Dr. Amitava Gupta:</h5>
              <p>
                Highly regarded Professor of Power Engineering & Director of
                School of Nuclear Studies & Applications- Jadavpur University.
                Moreover, he is also the head of IIC, Jadavpur University.
              </p>

              <h5>Chinmoy Mishra:</h5>
              <p>
                He is the esteemed Founder and CEO of Hooliv. He has previously
                built, scaled and made successful exit from his first startup
                AllizHealth.
              </p>

              <h5>Meera Shenoy :</h5>
              <p>
                She is a social change maker, founder of Youth4Jobs. She is
                recognised as a pioneer in market linked skill training for
                rural, tribal and disabled youth.
              </p>

              <h5>Rajiv Agarwal :</h5>
              <p>
                A Stanford University graduate, he is also the Co-Founder and
                CEO of Edudigm Education. Not to mention the CEO of NDLI Club
                School. Furthermore, he is also the Startup Mentor at Finatics.
              </p>

              <h5>Urvisha Koradia :</h5>
              <p>
                She is a passionate entrepreneur, Founder and CEO at PitchBooks.
                She is also the acting National President of Start-up Council
                WICCI (Women's India Chamber of Commerce and Industry).
              </p>

              <p>
                We are honored and grateful to the judges for their time and
                consideration and are anticipating an engrossing and momentous
                event!
              </p>

              <p>
                Juges: Rajiv Agarwal: Advisor, Educator, Start-Up Mentor, Public
                Speaker Chinmoy Mishra: Founder and Ceo, Hooliv.
              </p>
            </p>

            <h5>WINNER</h5>
            <p>
              <strong>Nexus</strong>
            </p>
            <p>
              <strong>1st Runner-up : Empty Coffee Cups</strong>
            </p>
            {/* <h5>EVALUATION CRITERIA:</h5>
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

export default Events10;
