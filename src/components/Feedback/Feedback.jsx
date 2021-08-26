import React, { Component } from "react";
import Navbar from "../Nav-foot/Navbar";
import ButtonsOnRight from "../ButtonsOnRight/ButtonsOnRight";
import Footer from "../Nav-foot/Footer";
import IncubationNAv from "../Nav-foot/IncubationNav";
import "./style.css";

export default class Feedback extends Component {
  render() {
    return (
      <>
        <IncubationNAv />
        <Navbar />
        <ButtonsOnRight />
        <div className="container">
          <div className="feedback-header">
            <h1>Feedback Page</h1>
          </div>
          <img
            src={require("../../images/feedback.jpg")}
            alt="Feedback"
            className="feedback-img"
          />
          <form>
            <div className="feedback-form">
              <h1>Feedback Form</h1>
              <div className="feedback-row">
                <div className="row-comp">
                  <p>First Name</p>
                  <input
                    className="form-control my-2 p-2"
                    type="text"
                    placeholder="First Name"
                  />
                </div>
                <div className="row-comp">
                  <p>Last Name</p>
                  <input
                    className="form-control my-2 p-2"
                    type="text"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="feedback-row">
                <div className="row-comp">
                  <p>Email</p>
                  <input
                    className="form-control my-2 p-2"
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div className="row-comp">
                  <p>Phone Number</p>
                  <input
                    className="form-control my-2 p-2"
                    type="number"
                    placeholder="Phone Number"
                  />
                </div>
              </div>
              <div className="feedback-row">
                <div className="row-comp">
                  <p>Feedback/Suggestion</p>
                  <textarea className="form-control" placeholder="Enter Your Feedback"></textarea>
                </div>
              </div>
              <div className="feedback-row">
                <button className="btn btn-lg btn-primary" type="submit">
                  Send Feedback
                </button>
              </div>
            </div>
          </form>
          <br />
        </div>
        <Footer />
      </>
    );
  }
}
