import React from "react";

function Achivement() {
  return (
    <div className="container">
      <div className="sec-title">
        <h1>Achivements</h1>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="content">
            <div>
              <i className="fas fa-city fa-6x"></i>
            </div>
            <div className="achivement-wrap">
              <h4>
                <span className="counter-number">30 +</span>
              </h4>
              <p style={{ fontWeight: "600" }} className="pt-1">
                STARTUPS
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="content">
            <div>
              <i className="fas fa-user-tie fa-6x"></i>
            </div>
            <div className="achivement-wrap">
              <h4>
                <span className="counter-number">50 +</span>
              </h4>
              <p style={{ fontWeight: "600" }} className="pt-1">
                ENTREPRENEURS
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="content">
            <div>
              <i className="fas fa-users fa-6x"></i>
            </div>
            <div className="achivement-wrap">
              <h4>
                <span className="counter-number">150 +</span>
              </h4>
              <p style={{ fontWeight: "600" }} className="pt-1">
                EMPLOYMENT
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="content">
            <div>
              <i className="fas fa-hand-holding-usd fa-6x"></i>
            </div>
            <div className="achivement-wrap">
              <h4>
                <span className="counter-number">INR 50 Cr.</span>
              </h4>
              <p className="pt-1" style={{ fontWeight: "600" }}>
                FUNDS RAISED
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Achivement;
