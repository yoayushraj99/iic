import React from "react";

function Header() {
  return (
    <div className="container-fluid">
      <div className="row">
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
                  className="d-block w-100"
                  src="https://via.placeholder.com/1200x600.png"
                  alt="First slide"></img>
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="https://via.placeholder.com/1200x600.png"
                  alt="Second slide"></img>
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="https://via.placeholder.com/1200x600.png"
                  alt="Third slide"></img>
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
        <div className="col-lg-3">
          <i className="fas fa-bell fa-3x d-flex justify-content-center pb-1 pt-4"></i>
          <p className="content pt-2 font-weight-bold">Updates & Events</p>
          <div className="box">
            <p className="marquee">
              <i className="fas fa-arrow-circle-right"></i>
              Praesent ut felis id velit vehicula dapibus. Nullam bibendum nisl
              nibh, tincidunt bibendum massa lacinia eu.
            </p>
            <p className="marquee">
              <i className="fas fa-arrow-circle-right"></i>
              Praesent ut felis id velit vehicula dapibus. Nullam bibendum nisl
              nibh, tincidunt bibendum massa lacinia eu.
            </p>
            <p className="marquee">
              <i className="fas fa-arrow-circle-right"></i>
              Praesent ut felis id velit vehicula dapibus. Nullam bibendum nisl
              nibh, tincidunt bibendum massa lacinia eu.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
