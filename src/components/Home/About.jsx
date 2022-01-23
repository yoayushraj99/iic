import React from "react";
import Divider from "../Dividers/Divider";

function About () {
  const textStyle = {
    fontSize: "16px",
  };
  const titleStyle = {
    fontSize: "36px",
    margin: "7%",
  };
  return (
    <div className="container-fluid" style={ { padding: "0 7% " } }>
      <div className="container">
        <h1 className="sec-title" style={ titleStyle }>
          About iic
        </h1>
        <p className="content px-5" style={ textStyle }>
          Innovation and Incubation Cell is an interface to foster innovation,
          explore the trends in the digital world and promote commercialization
          and technology. The IIC group of interdisciplinary researchers,
          developers, educationalists and budding entrepreneurs makes it a
          gifted asset for the institute to prepare it for the digital future.
        </p>
      </div>
      <Divider />
    </div>
  );
}

export default About;
