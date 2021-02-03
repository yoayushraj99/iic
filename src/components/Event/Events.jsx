import React from "react";
import Navbar from "../Nav-foot/Navbar";
import Footer from "../Nav-foot/Footer";
import { Link } from "react-router-dom";
import IncubationNAv from "../Nav-foot/IncubationNav";

function Events() {
  return (
    <div>
      <IncubationNAv />
      <Navbar />
      <div className="container">
        <img
          src={require("../../images/upcoming_event.webp")}
          alt="Upcoming Events"
          className="guideline-img"
        />
      </div>
      <div className="container py-3 px-5">
        {/* card Start */}
        <div className="card">
          <div className="row">
            <div className="col-md-7 px-3">
              <div className="card-block px-6">
                <h4 className="card-title">
                  Webinar invitation : The story- Motivational Session by
                  successful Innovator
                </h4>
                <p className="card-text">
                  Greetings from Institution Innovation and Incubation Council
                  (IIIC) NIT Durgapur! We are launching a series of webinars and
                  workshops to cultivate a culture of innovation and
                  entrepreneurship in NIT Durgapur. All the students and
                  faculties are invited to attend our first online webinar as a
                  part of our IIIC activities following guidelines from IIC,
                  MHRD.
                </p>
                <Link to="/Event02">
                  <a href="#" className="mt-auto btn btn-primary">
                    Read More
                  </a>
                </Link>
              </div>
            </div>
            {/* Carousel Start */}
            <div className="col-md-5">
              <div className="card-image">
                <img
                  src={require("../../images/webinar_Flyer.webp")}
                  alt="event_image"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="row">
            <div className="col-md-7 px-3">
              <div className="card-block px-6">
                <h4 className="card-title">
                  INVITATION FOR INNOVATION CONTEST 2020, NIT DURGAPUR
                </h4>
                <p className="card-text">
                  Institute Innovation and Incubation Centre, NIT Durgapur is
                  glad to announce the very first edition of INNOVATION CONTEST
                  2020, to identify the creative minds of our institute and
                  cultivate a culture of innovation and entrepreneurship in NIT
                  Durgapur.
                </p>
                <Link to="/Event01">
                  <a href="#" className="mt-auto btn btn-primary">
                    Read More
                  </a>
                </Link>
              </div>
            </div>
            {/* card image Start */}
            <div className="col-md-5">
              <div className="card-image">
                <img
                  src={require("../../images/event_1.webp")}
                  alt="event_image"
                />
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <Footer />
    </div>
  );
}

export default Events;
