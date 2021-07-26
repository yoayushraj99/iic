import React from "react";
import Footer from "../Nav-foot/Footer";
import { Link } from "react-router-dom";
import "../../assets/css-ashoksen/agency.min1.css";
import Divider from "../Dividers/Divider";

function AsokeSen() {
  return (
    <div>
    <div className="App">
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        id="mainNav"
      >
        <div className="container myNav">
          <a className="navbar-brand js-scroll-trigger" href="#page-top">
            <Link to="/">Back to IIC</Link>
          </a>
        </div>
      </nav>

      <header className="masthead2">
        <div className="container">
          <div className="intro-text">
            <div className="intro-lead-in">Welcome To </div>
            <div className="intro-heading text-uppercase text-warning">
              ASOKE SEN DESIGN &amp; INNOVATION CENTRE
            </div>
          </div>
        </div>
      </header>
      <div className="gall-posi myContainer">
        <div className="container col-lg-7 myvisionContainer">
          <h1 className="My-sec-title">Vision</h1>
          <h5 className="content visionContent">
            To be a globally recognised centre of excellence in the field of
            product design and engineering imparting quality training,
            interdisciplinary research and innovative design of products,
            processes, services, and technologies for the betterment of our
            society.
            </h5>
          </div>
        </div>

        <div className="col-lg-5 py-1">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="d-block w-100 myImage"
                  src={require('../../images/ashok_01.webp')}

                  alt="First slide"></img>
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100 myImage"
                  src={require('../../images/ashok_02.webp')}
                  alt="Second slide"></img>
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100 myImage"
                  src={require('../../images/ashok_03.webp')}
                  alt="Fourth slide"></img>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
      <Divider />

      <div className="container">
        <div className="px-5">
          <h1 className="sec-title">About the Centre</h1>
          <h5 className="content">
            Asoke Sen Design &amp; Innovation Centre is to provide a platform to
            students, Alumni and faculty members having zeal for learning and
            creativity, and passion to convert their creative ideas into
            significant, more viable design innovations. This Design Innovation
            centre has been established in the name of Legendary Professor Late
            Asoke Sen (Former Faculty of R.E.College Durgapur), funded by Alumni
            of this Institute, is to promote the culture of innovation and
            creativity among a wide cross section of students and faculty in NIT
            Durgapur.
          </h5>
        </div>
        <br />
        <Divider />
      </div>
      <section className="page-section" id="services">
        <div className="container">
          <div className="container">
            <div className="container">
              <h1 className="sec-title">Our Objectives</h1>
            </div>
          </div>

          <div className="row text-center">
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fa fa-circle fa-stack-2x text-warning"></i>
                <i className="fas fa-brain fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="service-heading">Ideation</h4>
              <p className="text-muted" style={{textAlign: 'justify'}}>
                To promote and enhance culture of interdisciplinary
                design-focused innovation and creativity among students
              </p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fa fa-circle fa-stack-2x text-warning"></i>
                <i className="fas fa-dna fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="service-heading">Innovation</h4>
              <p className="text-muted"style={{textAlign: 'justify'}}>
                To help the students with facilities and administrative support
                to develop innovative ideas into products or processes
              </p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fa fa-circle fa-stack-2x text-warning"></i>
                <i className="fas fa-hands fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="service-heading">Incubation</h4>
              <p className="text-muted"style={{textAlign: 'justify'}}>
                To create an ecosystem facilitating students and faculty to take
                their innovative ideas from className rooms/labs to people
              </p>
            </div>
          </div>

          <div className="row text-center">
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fa fa-circle fa-stack-2x text-warning"></i>
                <i className="fas fa-brain fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="service-heading">Ideation</h4>
              <p className="text-muted" style={{textAlign: 'justify'}}>
                To constitute a working group of innovators comprising
                academicians, scientists, Alumni and industry stakeholders,
                MSMEs, traditional craftsmen and artisans, and social
                entrepreneurs
              </p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fa fa-circle fa-stack-2x text-warning"></i>
                <i className="fas fa-dna fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="service-heading">Innovation</h4>
              <p className="text-muted" style={{textAlign: 'justify'}}>
                To promote increased interaction and collaborations with
                institute and R&amp;D organizations world-wide working in the areas
                of design and innovation
              </p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fa fa-circle fa-stack-2x text-warning"></i>
                <i className="fas fa-hands fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="service-heading">Incubation</h4>
              <p className="text-muted" style={{textAlign: 'justify'}}>
                To educate our budding engineers on product design and
                development technologies and specialized skills development by
                way of conducting workshops, seminars, awareness programs, short
                term courses and formal or nonformal interactions from
                time-to-time
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default AsokeSen;
