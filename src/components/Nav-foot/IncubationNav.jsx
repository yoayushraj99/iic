import React from "react";

function IncubationNav() {
  const styleImg = {
    padding: "7px",
    height: "auto",
    width: "65%",
    display: "block",
    margin: "0px auto",
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <a
            href="https://nitdgp.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../../images/NITLogo.jpeg")}
              alt="iiic"
              style={styleImg}
            />
          </a>
        </div>
        <div className="col-md-6">
          <img
            src={require("../../images/IIC_new.jpeg")}
            alt="iiic"
            style={styleImg}
          />
        </div>
      </div>
    </div>
  );
}

export default IncubationNav;
