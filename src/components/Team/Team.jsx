import React from "react";
import Navbar from "../Nav-foot/Navbar";
import Footer from "../Nav-foot/Footer";
import "./css/bootstrap.min.css";
import "./css/team.css";
import "./css/styleCard.css";

function Team() {

    const styleIcon = {
        color: "#0A66C2"
    }

  return (
    <div>
      <Navbar />

      <div className="container-card">
        <h1 className="team_text">Meet Our Director</h1>
        <div className="card-wrapper">
          <div className="card-team">
            <img
              src={require("./images/2.jpg")}
              alt="card background"
              className="card-img"
            ></img>
            <img
              src={require("./images/Anupam_Basu.jpg")}
              alt="profile"
              className="profile-img"
            ></img>
            <h1>Prof. Anupam Basu</h1>
            <p className="job-title">Director</p>
            <ul className="social-media">
              <li>
                <a
                  href="https://nitdgp.ac.in/department/computer-science-engineering/faculty-1/anupam-basu-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fas fa-user-circle" style={styleIcon}></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <h1 className="team_text">Advisory Committee</h1>
        <div className="card-wrapper">
          <div className="card-team">
            <img
              src={require("./images/2.jpg")}
              alt="card background"
              className="card-img"
            ></img>
            <img
              src={require("./images/subrata_bannerjee.jpg")}
              alt="profile"
              className="profile-img"
            ></img>
            <h1>Prof. Subrata Bannerjee(EE)</h1>
            <p className="job-title">Advisor</p>
            <ul className="social-media">
              <li>
                <a
                  href="https://nitdgp.ac.in/department/electrical-engineering/faculty-7/subrata-banerjee"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fas fa-user-circle" style={styleIcon}></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="card-team">
            <img
              src={require("./images/2.jpg")}
              alt="card background"
              className="card-img"
            ></img>
            <img
              src={require("./images/Sudit_Sekhar_Mukhopadhyay.jpg")}
              alt="profile"
              className="profile-img"
            ></img>
            <h1>Prof. Sudit Sekhar M.(BT)</h1>
            <p className="job-title">Advisor</p>
            <ul className="social-media">
              <li>
                <a
                  href="https://nitdgp.ac.in/department/biotechnology/faculty-2/sudit-sekhar-mukhopadhyay"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fas fa-user-circle" style={styleIcon}></i>
                </a>
              </li>
            </ul>
          </div>
        </div>


        <h1 className="team_text">Executive Committee</h1>
        <div className="card-wrapper">
          <div className="card-team">
            <img
              src={require("./images/2.jpg")}
              alt="card background"
              className="card-img"
            ></img>
            <img
              src={require("./images/Sandip_Kumar_Lahiri.jpeg")}
              alt="profile"
              className="profile-img"
            ></img>
            <h1>Dr.Sandip Kumar Lahiri(CHE)</h1>
            <p className="job-title">Co-ordinator</p>
            <ul className="social-media">
              <li>
                <a
                  href="https://nitdgp.ac.in/department/chemical-engineering/faculty-4/sandip-kumar-lahiri-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fas fa-user-circle" style={styleIcon}></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="card-team">
            <img
              src={require("./images/2.jpg")}
              alt="card background"
              className="card-img"
            ></img>
            <img
              src={require("./images/Nilanjan_Chattaraj.jpg")}
              alt="profile"
              className="profile-img"
            ></img>
            <h1>Dr.Nilanjan Chattoraj(ECE)</h1>
            <p className="job-title">Member</p>
            <ul className="social-media">
              <li>
                <a
                  href="https://nitdgp.ac.in/department/electronics-and-communication-engineering/faculty-6/nilanjan-chattaraj"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fas fa-user-circle" style={styleIcon}></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="card-team">
            <img
              src={require("./images/2.jpg")}
              alt="card background"
              className="card-img"
            ></img>
            <img
              src={require("./images/Dr_Arjyajyoti_Goswami.jpg")}
              alt="profile"
              className="profile-img"
            ></img>
            <h1>Dr.Arjyajyoti Goswami(ME)</h1>
            <p className="job-title">Member</p>
            <ul className="social-media">
              <li>
                <a
                  href="https://nitdgp.ac.in/department/mechanical-engineering/faculty-11/arjyajyoti-goswami"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fas fa-user-circle" style={styleIcon}></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="card-wrapper">
          <div className="card-team">
            <img
              src={require("./images/2.jpg")}
              alt="card background"
              className="card-img"
            ></img>
            <img
              src={require("./images/Sayantari_Ghosh.jpg")}
              alt="profile"
              className="profile-img"
            ></img>
            <h1>Dr.Sayantari Ghosh(PH)</h1>
            <p className="job-title">Member</p>
            <ul className="social-media">
              <li>
                <a
                  href="https://nitdgp.ac.in/department/physics/faculty-14/sayantari-ghosh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fas fa-user-circle" style={styleIcon}></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="card-team">
            <img
              src={require("./images/2.jpg")}
              alt="card background"
              className="card-img"
            ></img>
            <img
              src={require("./images/Aniruddha_Bhattacharya.jpg")}
              alt="profile"
              className="profile-img"
            ></img>
            <h1>Dr.Aniruddha B.(EE)</h1>
            <p className="job-title">Member</p>
            <ul className="social-media">
              <li>
                <a
                  href="https://nitdgp.ac.in/department/electrical-engineering/faculty-7/aniruddha-bhattacharya"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fas fa-user-circle" style={styleIcon}></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        
        <h1 className="team_text">Web Development Team</h1>
        <div className="card-wrapper">
          <div className="card-team">
            <img
              src={require("./images/2.jpg")}
              alt="card background"
              className="card-img"
            ></img>
            <img
              src={require("./images/Anwer_Sayeed.jfif")}
              alt="profile"
              className="profile-img"
            ></img>
            <h1>Anwer Sayeed</h1>
            <p className="job-title">Member</p>
            <ul className="social-media">
              <li>
                <a
                  href="https://www.linkedin.com/in/anwer-sayeed-1a598b192/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fab fa-linkedin" style={styleIcon}></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="card-team">
            <img
              src={require("./images/2.jpg")}
              alt="card background"
              className="card-img"
            ></img>
            <img
              src={require("./images/Ayush_Raj.jfif")}
              alt="profile"
              className="profile-img"
            ></img>
            <h1>Ayush Raj</h1>
            <p className="job-title">Member</p>
            <ul className="social-media">
              <li>
                <a
                  href="https://www.linkedin.com/in/ayush-raj-09104813a/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fab fa-linkedin" style={styleIcon}></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="card-team">
            <img
              src={require("./images/2.jpg")}
              alt="card background"
              className="card-img"
            ></img>
            <img
              src={require("./images/Om_Saswat.jpeg")}
              alt="profile"
              className="profile-img"
            ></img>
            <h1>Om Saswat Sahoo</h1>
            <p className="job-title">Member</p>
            <ul className="social-media">
              <li>
                <a
                  href="https://www.linkedin.com/in/om-saswat-sahoo-850346192/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fab fa-linkedin" style={styleIcon}></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Team;
