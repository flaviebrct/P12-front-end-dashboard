import React from "react";

import "../style/components/greetings.css";

export default function Greetings(props) {
  return (
    <div className="greetings-container">
      <h1>
        Bonjour <span className="user-name">{props.name}</span>
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
}
