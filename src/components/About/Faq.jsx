import React from "react";
import Navbar from "../Nav-foot/Navbar";
import Footer from "../Nav-foot/Footer";

function Faq() {
  const styleLink = {
    color: "black",
    textDecoration: "none",
    fontWeight: "800",
    cursor: "pointer",
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <img
          src={require("../../images/faq-img.jpeg")}
          alt="Faq"
          className="guideline-img"
        />
      </div>
      <div class="container">
        <div id="accordion" class="accordion collapse-container">
          <div class="card mb-0">
            <div
              class="card-header collapsed"
              data-toggle="collapse"
              href="#collapseOne"
            >
              <a class="card-title" style={styleLink}>
                Who can Apply ?
              </a>
            </div>
            <div
              id="collapseOne"
              class="card-body collapse"
              data-parent="#accordion"
            >
              <ul>
                <li>
                  Any person desirous of availing incubation facilities has to
                  incorporate a private/public limited company under the Indian
                  Companies Act/ Udyog Aadhar Registration and apply in the
                  prescribed format along with the required documents. No
                  application for incubation shall be entertained if the
                  applicant has not incorporated a private/public limited
                  company under the Companies Act / Udyog Aadhar Registration.
                </li>
                <li>
                  The companies promoted by Faculty of NIT Durgapur shall be
                  governed by Faculty Entrepreneurship Policy as approved by the
                  Institute. The companies promoted by students enrolled for
                  full-time Degree at an educational institute shall not be
                  offered incubation if the student is holding an Executive
                  position; however, companies promoted by students are eligible
                  to apply for incubation provided the student is not actively
                  engaged with the company beyond any engagement which may be
                  permitted by the Institute.
                </li>
                <li>
                  A company, if promoted by regular staff or employee of an
                  organization, shall be granted incubation only upon submission
                  of 'No Objection Certificate' from the competent authority or
                  employer. However, companies having employees as shareholders
                  are eligible to apply for incubation.
                </li>
                <li>
                  Any company that is engaged or proposing to be engaged in
                  imparting educational courses and/or training programs
                  including vocational training or is planning to undertake such
                  activities during or after its incubation at IIIC, Durgapur is
                  not deemed eligible for incubation and their application will
                  not be entertained.
                </li>
              </ul>
            </div>
            <div
              class="card-header collapsed"
              data-toggle="collapse"
              data-parent="#accordion"
              href="#collapseTwo"
            >
              <a class="card-title" style={styleLink}>
                What will be the tenure of incubation ?
              </a>
            </div>
            <div
              id="collapseTwo"
              class="card-body collapse"
              data-parent="#accordion"
            >
              <ul>
                <li>
                  The companies will be permitted to stay in the incubator for a
                  period of two years. They may be granted maximum two
                  extensions for 6 months each at a time at the sole discretion
                  of the Institute.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Faq;
