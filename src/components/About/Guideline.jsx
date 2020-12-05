import React from "react";
import Navbar from "../Nav-foot/Navbar";
import Footer from "../Nav-foot/Footer";
import Card from "../Cards/GuidelineCard";
import guideline from "../../guidelineData";

function CreateGuidelineCard(policy){
    return (
        <Card
            key={policy.id}
            policy={policy.policy}
            link={policy.policyLink}
        />
    );
}

function Guideline() {

    return(
        <div>
            <Navbar/>
            <div className="container">
                <img src={require("../../images/guidelines1.jpg")} alt="GuideLine" className="guideline-img"/>
                <div>
                    <dl class="dictionary">
                        {guideline.map(CreateGuidelineCard)}
                    </dl>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Guideline;
