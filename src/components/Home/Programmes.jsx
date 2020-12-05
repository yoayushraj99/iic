import React from "react";
import Divider from "../Dividers/Divider";
import Card from "../Cards/ProgramCard";
import program from "../../programData";

function CreateProgramCard(program) {
  return (
    <Card
      key={program.id}
      emoji={program.emoji}
      name={program.name}
      meaning={program.meaning}
    />
  );
}

function Programmes() {
  return (
    <div>
      <h1 className="sec-title">Programmes</h1>
      <div>
        <dl className="dictionary">{program.map(CreateProgramCard)}</dl>
      </div>
      <Divider />
    </div>
  );
}

export default Programmes;
