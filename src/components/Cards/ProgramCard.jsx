import React from "react";

function Card(props) {

  return (
    <div class="term">
      <dt>
        <span class="emoji" role="img">
          <img src={props.emoji} alt="img"/>
        </span>
        <span>{props.name}</span>
      </dt>
      <dd>{props.meaning}</dd>
    </div>
  );
}

export default Card;
