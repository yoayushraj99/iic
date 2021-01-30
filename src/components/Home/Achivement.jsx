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
            <img src={require('../../images/icons/Startup.png')} alt="Startup" width="132"/>
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
              <img src={require('../../images/icons/ENTREPRENEUR.png')} alt="entrepreneurs" width="120"/>
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
            <img src={require('../../images/icons/EMPLOYMENT.png')} alt="EMPLOYMENT" width="150"/>
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
            <img src={require('../../images/icons/FundsRaised.png')} alt="FundsRaised" width="142"/>
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
