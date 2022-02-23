import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(promps) {
  console.log(promps);
  return (
    <div className="Meaning">
      <h3 className="meanings-type">{promps.meaning.partOfSpeech}</h3>
      {promps.meaning.definitions.map(function (definition, index) {
        if (index >= 0 && index < 2) {
          return (
            <div key={index}>
              <p className="definition">{definition.definition}</p>
              <em className="example">{definition.example}</em>

              <Synonyms synonyms={definition.synonyms} />
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}
