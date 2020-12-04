import React from "react";
import Navbar from "../Nav-foot/Navbar";
import Footer from "../Nav-foot/Footer";

function Guideline() {
    return(
        <div>
            <Navbar/>
            <div className="guideline-img">
                <img src={require("../../images/guidelines.jpg")} alt="GuideLine" />
            </div>
            <Footer/>
        </div>
    )
}

export default Guideline;