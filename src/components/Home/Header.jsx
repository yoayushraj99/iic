import React from "react";
import { NavLink } from 'react-router-dom';

import "./Style_header.css"

function Header() {
  return (
    <div className="header-container">
      <div className="row" >
        <div className="col-lg-9">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel">
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="d-block w-100 myPic"
                  src={require('../../images/NitFrontGate.webp')}
                  
                  alt="First slide"></img>
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100 myPic"
                  src={require('../../images/carousel-1.webp')}
                  alt="Second slide"></img>
              </div>
              
              <div className="carousel-item">
                <img
                  className="d-block w-100 myPic"
                  src={require('../../images/Apj.webp')}
                  alt="Fourth slide"></img>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev">
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next">
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div className="col-lg-3 update-box">

        <div className="headerEvents">
          <i className="fas fa-bell fa-3x d-flex justify-content-center pb-1 pt-4" />
          <p className="content pt-2 font-weight-bold">Updates &amp; Events</p>
        </div> 

          <div className="box">
            <p className="">
              <NavLink to="/Event22" style={{color :"blue"}}>Fostering
        An Innovative Mindset</NavLink>
              <i class="fas fa-angle-right"></i>
            </p>
            <p className="">
              <NavLink to="/Event21" style={{color :"blue"}}>Prototype/Process Design and Development : Prototyping</NavLink>
              <i class="fas fa-angle-right"></i>
            </p>
            <p className="">
              <NavLink to="/Event20" style={{color :"blue"}}>Building an
        innovative product fit for the market</NavLink>
              <i class="fas fa-angle-right"></i>
            </p>
            <p className="">
              <NavLink to="/Event19" style={{color :"blue"}}>How to plan
        for startups- Legal and ethical steps" and "Knowing IPR's and IP
        Management</NavLink>
              <i class="fas fa-angle-right"></i>
            </p>
            <p className="">
              <NavLink to="/Event18" style={{color :"blue"}}>INNOVATION - The new ENGINE of
        the century</NavLink>
              <i class="fas fa-angle-right"></i>
            </p>
            <p className="">
              <NavLink to="/Event15" style={{color :"blue"}}>Startup of the Month</NavLink>
              <i class="fas fa-angle-right"></i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
