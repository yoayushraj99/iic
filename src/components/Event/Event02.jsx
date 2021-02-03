import React from "react";
import Navbar from "../Nav-foot/Navbar";
import Footer from "../Nav-foot/Footer";



const Events02 = () => {

  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <div className="boxShadow">
          <div className="container d-flex justify-content-center">
            <img
              src={require("../../images/webinar_Flyer.webp")}
              alt="Event02"
            />
          </div>
          <div className="mt-3">
            <h2>
              Webinar invitation : The story- Motivational Session by successful
              Innovator
            </h2>
            <p>14th December 2020</p>
          </div>
          <span></span>
          <article>
            <p>Dear Students,</p>
            <p>
              Greetings from Institute Innovation and Incubation Cell (IIIC),
              NIT Durgapur!
            </p>
            <p>
              <p>
              <h4>
                The theme of the webinar:{" "}
                <span>
                  The story- Motivational Session by successful Innovator
                </span>
              </h4>
              </p>
              <p>
              <h4>
                Expert speaker: Dr. Sanjiban Banerjee, Co-founder, and Director
                of AbGenics Lifesciences Private Ltd
              </h4>
              </p>
              <p>
              <h4>
                <strong>
                  Date of Webinar:- 16th December 2020 : Time :- 11:00 am
                </strong>
              </h4>
              </p>
              <p>
              <h4>
                Link for the webinar:{" "}
                <a
                  href="https://meet.google.com/vme-moyi-wuv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary"
                >
                  https://meet.google.com/vme-moyi-wuv
                </a>
              </h4>
              </p>
            </p>
            <p>
              This session will be conducted by Dr. Sanjiban Banerjee,
              Co-founder, and Director of AbGenics Lifesciences Private Ltd, a
              Pune-based biotech company working to develop antibody-based
              therapeutics for infectious diseases and cancer.
            </p>
            <p>
              He will share his experience and lesson learned in his
              entrepreneurial journey for the search for novel antibacterial
              biologicals. (see attached)
            </p>
            <p>
              This is a good opportunity for students and young faculties to
              know the experiences and problems faced by a successful
              entrepreneur. At the end of the session, you can also directly
              interact with him to clear your doubt you may have to open a
              start-up company.
            </p>
            <p>We eagerly await your participation in the Webinar.</p>
            <p>
              Note: With this mail, I am also requesting our server support team
              and Dr. Anirban sarkar to circulate this mail to all students of
              NIT, Durgapur
            </p>
          </article>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Events02;
