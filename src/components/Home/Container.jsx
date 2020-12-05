import React from "react";
import Achivement from "./Achivement";
import Programmes from "./Programmes";

function Container() {
  const styleBackground = {
    backgroundColor: "#F9F9F9",
    margin: "0px -16px"
};
  return (
    <div style={styleBackground}>
      <div className="container pt-2">
        <Achivement />
        <Programmes />
      </div>
    </div>
  );
}

export default Container;
