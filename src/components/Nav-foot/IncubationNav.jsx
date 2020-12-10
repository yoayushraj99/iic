import React from "react";

function IncubationNav() {

    const styleImg ={
        height: "auto",
        width: "65%"
    }


    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6">
                    <img src={require("../../images/NITLogo.jpeg")} alt="iiic" style={styleImg}/>
                </div>
                <div className="col-md-6">
                <img src={require("../../images/IIC.jpeg")} alt="iiic" style={styleImg}/>
                </div>
            </div>
        </div>
    )
}

export default IncubationNav;