import React from 'react';
import Navbar from "../Nav-foot/Navbar";
import Footer from "../Nav-foot/Footer";
import './css/bootstrap.min.css';
import './css/team.css';
import './css/styleCard.css';



function Team() {
  return (
    <div>
      <Navbar />
      
      <div className="container-card">

        <h1 className="team_text" >Secretariat</h1>
        <div className="card-wrapper">
            <div className="card-team">
                <img src={require("./images/1.jpg")} alt="card background" className="card-img"></img>
                <img src={require("./images/1.jpg")} alt="profile image" className="profile-img"></img>
                <h1>Nivedita Singh</h1>
                <p className="job-title">Secretary General</p>
                <ul className="social-media">
                    <li><a href="https://www.facebook.com/nivedita.singh.94009" target="_blank"><i
                                className="fa fa-facebook-square"></i></a></li>
                </ul>
            </div>
            <div className="card-team">
                <img src={require("./images/1.jpg")} alt="card background" className="card-img"></img>
                <img src={require("./images/1.jpg")} alt="profile image" className="profile-img"></img>
                <h1>Apoorv Singh</h1>
                <p className="job-title">Director General</p>
                <ul className="social-media">
                    <li><a href="https://www.facebook.com/apoorvsingh1999" target="_blank"><i
                                className="fa fa-facebook-square"></i></a></li>
                </ul>
            </div>
            <div className="card-team">
                <img src={require("./images/1.jpg")} alt="card background" className="card-img"></img>
                <img src={require("./images/1.jpg")} alt="profile image" className="profile-img"></img>
                <h1>Shankhadeep Gogoi</h1>
                <p className="job-title">Director General</p>
                <ul className="social-media">
                    <li><a href="https://www.facebook.com/shankhadeep.gogoi" target="_blank"><i
                                className="fa fa-facebook-square"></i></a></li>
                </ul>
            </div>
            <div className="card-team">
                <img src={require("./images/1.jpg")} alt="card background" className="card-img"></img>
                <img src={require("./images/1.jpg")} alt="profile image" className="profile-img"></img>
                <h1>Ashish Ranjan</h1>
                <p className="job-title">General Secretary</p>
                <ul className="social-media">
                    <li><a href="https://www.facebook.com/whyisashish" target="_blank"><i
                                className="fa fa-facebook-square"></i></a></li>
                </ul>
            </div>


        </div>
        <div className="card-wrapper">
            <div className="card-team">
                <img src={require("./images/1.jpg")} alt="card background" className="card-img"></img>
                <img src={require("./images/1.jpg")} alt="profile image" className="profile-img"></img>
                <h1>Rakesh Paul</h1>
                <p className="job-title">Director Technical Operations</p>
                <ul className="social-media">
                    <li><a href="https://www.facebook.com/rakesh.paul.330" target="_blank"><i
                                className="fa fa-facebook-square"></i></a></li>
                </ul>
            </div>
            <div className="card-team">
                <img src={require("./images/1.jpg")} alt="card background" className="card-img"></img>
                <img src={require("./images/1.jpg")} alt="profile image" className="profile-img"></img>
                <h1>Pratikshit Baruah</h1>
                <p className="job-title">Director Technical Operations</p>
                <ul className="social-media">
                    <li><a href="https://www.facebook.com/pratikshit.baruah" target="_blank"><i
                                className="fa fa-facebook-square"></i></a></li>
                </ul>
            </div>
        </div>
        <div className="card-wrapper">
            <div className="card-team">
                <img src={require("./images/1.jpg")} alt="card background" className="card-img"></img>
                <img src={require("./images/1.jpg")} alt="profile image" className="profile-img"></img>
                <h1>Mayurakshi Chanda</h1>
                <p className="job-title">Deputy Secretary General</p>
                <ul className="social-media">
                    <li><a href="https://www.facebook.com/mayurakshi.chanda" target="_blank"><i
                                className="fa fa-facebook-square"></i></a></li>
                </ul>
            </div>
            <div className="card-team">
                <img src={require("./images/1.jpg")} alt="card background" className="card-img"></img>
                <img src={require("./images/1.jpg")} alt="profile image" className="profile-img"></img>
                <h1>Arnab Das</h1>
                <p className="job-title">Deputy Director General</p>
                <ul className="social-media">
                    <li><a href="https://www.facebook.com/profile.php?id=100009744844536" target="_blank"><i
                                className="fa fa-facebook-square"></i></a></li>
                </ul>
            </div>
            <div className="card-team">
                <img src={require("./images/1.jpg")} alt="card background" className="card-img"></img>
                <img src={require("./images/1.jpg")} alt="profile image" className="profile-img"></img>
                <h1>Ritika Dubey</h1>
                <p className="job-title">Deputy Director General</p>
                <ul className="social-media">
                    <li><a href="https://www.facebook.com/ritika.dubey.96387189" target="_blank"><i
                                className="fa fa-facebook-square"></i></a></li>
                </ul>
            </div>


        </div>
        <div className="card-wrapper">
            <div className="card-team">
                <img src={require("./images/1.jpg")} alt="card background" className="card-img"></img>
                <img src={require("./images/1.jpg")} alt="profile image" className="profile-img"></img>
                {/* <h1 style="font-size:1.3rem">Jishnu Kashyap Hazarika</h1> */}
                <p className="job-title">Under Secretary General</p>
                <ul className="social-media">
                    <li><a href="https://www.facebook.com/jishnu.kashyap.7 " target= "_blank"><i
                                className="fa fa-facebook-square"></i></a></li>
                </ul>
            </div>
            <div className="card-team">
                <img src={require("./images/1.jpg")} alt="card background" className="card-img"></img>
                <img src={require("./images/1.jpg")} alt="profile image" className="profile-img"></img>
                <h1>Deepjoy Dey</h1>
                <p className="job-title">Under Director General</p>
                <ul className="social-media">
                    <li><a href="https://www.facebook.com/deepjoy.dey.98" target="_blank"><i
                                className="fa fa-facebook-square"></i></a></li>
                </ul>
            </div>


        </div>
        <h1 className="team_text">Research Team</h1>
        <div className="card-wrapper">

            <div className="card-team">
                <img src={require("./images/1.jpg")} alt="card background" className="card-img"></img>
                <img src={require("./images/1.jpg")} alt="profile image" className="profile-img"></img>
                <h1>Ayushi johari</h1>
                {/* <!-- <p className="job-title">Coordinator</p> --> */}
                <ul className="social-media">
                    <li><a href="https://www.facebook.com/ayushi.johari.35762" target="_blank"><i
                                className="fa fa-facebook-square"></i></a></li>
                </ul>
            </div>
            <div className="card-team">
                <img src={require("./images/1.jpg")} alt="card background" className="card-img"></img>
                <img src={require("./images/1.jpg")} alt="profile image" className="profile-img"></img>
                <h1>Monjita Baruah</h1>
                {/* <!-- <p className="job-title">Coordinator</p> --> */}
                <ul className="social-media">
                    <li><a href="https://www.facebook.com/monjita.baruah.52" target="_blank"><i
                                className="fa fa-facebook-square"></i></a></li>
                </ul>
            </div>
            <div className="card-team">
                <img src={require("./images/1.jpg")} alt="card background" className="card-img"></img>
                <img src={require("./images/1.jpg")} alt="profile image" className="profile-img"></img>
                <h1>Yashwanth Kolli</h1>
                {/* <!-- <p className="job-title">Coordinator</p> --> */}
                <ul className="social-media">
                    <li><a href="https://www.facebook.com/yashwanth.kolli.3" target="_blank"><i
                                className="fa fa-facebook-square"></i></a></li>
                </ul>
            </div>

        </div>
        <div className="card-wrapper">
            <div className="card-team">
                <img src={require("./images/1.jpg")} alt="card background" className="card-img"></img>
                <img src={require("./images/1.jpg")} alt="profile image" className="profile-img"></img>
                <h1>Kaustubh Mishra</h1>
                {/* <!-- <p className="job-title">Coordinator</p> --> */}
                <ul className="social-media">
                    <li><a href="https://www.facebook.com/kaustubh.mishra.98434" target="_blank"><i
                                className="fa fa-facebook-square"></i></a></li>
                </ul>
            </div>
            <div className="card-team">
                <img src={require("./images/1.jpg")} alt="card background" className="card-img"></img>
                <img src={require("./images/1.jpg")} alt="profile image" className="profile-img"></img>
                {/* <h1 style="font-size:1.3rem">Sudhanshu Yaduvanshi</h1> */}
                <ul className="social-media">
                    <li><a href="https://www.facebook.com/sudhanshu.kishan" target="_blank"><i
                                className="fa fa-facebook-square"></i></a></li>
                </ul>
            </div>
        </div>
        <h1 className="team_text">Development Team</h1>
        <div className="card-wrapper">
            <div className="card-team">
                <img src={require("./images/1.jpg")} alt="card background" className="card-img"></img>
                <img src={require("./images/1.jpg")} alt="profile image" className="profile-img"></img>
                <h1>Ujjawal Jain</h1>
                <p className="job-title">Web Developer</p>
                <ul className="social-media">
                    <li><a href="https://www.facebook.com/jainujjawal1999" target="_blank"><i
                                className="fa fa-facebook-square"></i></a></li>
                </ul>
            </div>
            <div className="card-team">
                <img src={require("./images/1.jpg")} alt="card background" className="card-img"></img>
                <img src={require("./images/1.jpg")} alt="profile image" className="profile-img"></img>
                <h1>Arshita Narayan</h1>
                <p className="job-title">Web Developer</p>
                <ul className="social-media">
                    <li><a href="https://www.facebook.com/arshita.narayan.3" target="_blank"><i
                                className="fa fa-facebook-square"></i></a></li>
                </ul>
            </div>
            <div className="card-team">
                <img src={require("./images/1.jpg")} alt="card background" className="card-img"></img>
                <img src={require("./images/1.jpg")} alt="profile image" className="profile-img"></img>
                <h1>Abhishek Singh</h1>
                <p className="job-title">Designer</p>
                <ul className="social-media">
                    <li><a href="https://www.facebook.com/profile.php?id=100023332380917" target="_blank"><i
                                className="fa fa-facebook-square"></i></a></li>
                </ul>
            </div>
            <div className="card-team">
                <img src={require("./images/1.jpg")} alt="card background" className="card-img"></img>
                <img src={require("./images/1.jpg")} alt="profile image" className="profile-img"></img>
                <h1>Abhishek Baghele</h1>
                <p className="job-title">Designer</p>
                <ul className="social-media">
                    <li><a href="https://www.facebook.com/abhishek.baghele.9" target="_blank"><i
                                className="fa fa-facebook-square"></i></a></li>
                </ul>
                </div>
            </div>
            </div>
        
        
        
    
      
      <Footer />
    </div>
  );
}

export default Team;
