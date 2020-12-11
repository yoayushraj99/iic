import React from "react";
import Divider from "../Dividers/Divider";

function Achivement() {

  return (
    <div>
      <h1 className="sec-title">Impact</h1>
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="text-center">
            <div>
              <i className="fas fa-city fa-6x"></i>
            </div>
            <div className="achivement-wrap">
              <h4>
                <span className="counter-number">---</span>
              </h4>
              <p style={{ fontWeight: "600" }} className="pt-1">
                STARTUPS
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="text-center">
            <div>
              <i className="fas fa-user-tie fa-6x"></i>
            </div>
            <div className="achivement-wrap">
              <h4>
                <span className="counter-number">---</span>
              </h4>
              <p style={{ fontWeight: "600" }} className="pt-1">
                ENTREPRENEURS
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="text-center">
            <div>
              <i className="fas fa-users fa-6x"></i>
            </div>
            <div className="achivement-wrap">
              <h4>
                <span className="counter-number">---</span>
              </h4>
              <p style={{ fontWeight: "600" }} className="pt-1">
                EMPLOYMENT
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="text-center">
            <div>
              <i className="fas fa-hand-holding-usd fa-6x"></i>
            </div>
            <div className="achivement-wrap">
              <h4>
                <span className="counter-number">---</span>
              </h4>
              <p className="pt-1" style={{ fontWeight: "600" }}>
                FUNDS RAISED
              </p>
            </div>
          </div>
        </div>
      </div>
      <Divider />
    </div>
  );
}

export default Achivement;
