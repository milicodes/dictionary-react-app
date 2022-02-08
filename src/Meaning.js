import React from "react";

export default function Meaning(promps) {
  return (
    <div className="Meaning">
      <h3 className="meanings-type">{promps.meaning.partOfSpeech}</h3>
      {promps.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p className="definition">{definition.definition}</p>
            <br />
            <em className="example">{definition.example}</em>
          </div>
        );
      })}
    </div>
  );
}
