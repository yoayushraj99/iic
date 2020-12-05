import React from "react";

function GuidelineCard(props) {
  
  const linkStyle = {
    textDecoration: "none",
  };

  return (
    <div class="term">
      <dt>
        <a href={props.link} target="_blank" style={linkStyle}>
          <h4>{props.policy}</h4>
        </a>
      </dt>
    </div>
  );
}

export default GuidelineCard;
