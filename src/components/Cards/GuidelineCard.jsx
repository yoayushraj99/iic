import React from "react";

function GuidelineCard(props) {
  
  const linkStyle = {
    textDecoration: "none",
    color: "#892cdc"
  };

  return (
    <div class="term">
      <dt>
        <a href={props.link} target="_blank" style={linkStyle} rel="noopener noreferrer">
          <h4>{props.policy}</h4>
        </a>
      </dt>
    </div>
  );
}

export default GuidelineCard;
