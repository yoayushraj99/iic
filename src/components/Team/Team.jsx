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
                  href="https://nitdgp.ac.in/director"
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
                  href="https://nitdgp.ac.in/faculty/a4d97a0c-0811-4640-81ad-8e3e7b65b127"
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
                  href="https://nitdgp.ac.in/faculty/def47b6b-94fc-458b-b959-d748166145e2"
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
                  href="https://nitdgp.ac.in/faculty/6255455a-4eed-430a-9824-2cb2d9da51c4"
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
                  href="https://nitdgp.ac.in/faculty/b7c68a97-60c4-4078-91ad-771cbdf14132"
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
                  href="https://nitdgp.ac.in/faculty/29515f0c-7127-4ace-93d0-5212ce0f015d"
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
                  href="https://nitdgp.ac.in/faculty/a3fdaab8-d50e-4fa9-b94a-ea85f6d9f339"
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
                  href="https://nitdgp.ac.in/faculty/84bdb290-c4b9-40b5-8e04-16b75dc92693"
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
