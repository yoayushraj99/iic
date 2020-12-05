import React from "react";

function Card(props) {
  
  const linkStyle = {
    textDecoration: "none",
  };

  return (
    <div class="term">
      <dt>
        <a href={props.link} target="_blank" style={linkStyle}>
          <h4>{props.policy}</h4>
        </a>
        <span class="emoji" role="img">
          {props.emoji}
        </span>
        <span>{props.name}</span>
      </dt>
      <dd>{props.meaning}</dd>
    </div>
  );
}

export default Card;
