import React from "react";
import Divider from "../Dividers/Divider";

function About () {
  const textStyle = {
    fontSize: "16px",
  };
  const titleStyle = {
    fontSize: "36px",
    margin: "6% 0 3% 0",
  };
  return (
<<<<<<< HEAD
    <div className="container-fluid" style={ { padding: "0 7% " } }>
=======
    <div className="container-fluid">
>>>>>>> 17a1aa04ba377581d9e6e909809a7df9cfa17dd2
      <div className="container">
        <h1 className="sec-title" style={ titleStyle }>
          About iic
        </h1>
<<<<<<< HEAD
        <p className="content px-5" style={ textStyle }>
=======
        <h5 className="content" style={textStyle}>
>>>>>>> 17a1aa04ba377581d9e6e909809a7df9cfa17dd2
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
