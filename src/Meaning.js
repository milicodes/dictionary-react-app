import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";
import SynonymsMobile from "./SynonymsMobile";


export default function Meaning(promps) {
  return (
    <div className="Meaning container">
      <div className="row">
        <div className="col-12">
          <h3 className="meanings-type">{promps.meaning.partOfSpeech}</h3>
        </div>
        {promps.meaning.definitions.map(function (definition, index) {
          if (index >= 0 && index < 2) {
            return (
              <div className="col-12" key={index}>
                <div className="row">
                  <div className="col-12 margin-definition">
                    <p className="definition"> • {definition.definition}</p>
                  </div>
                  <em className="example"> {definition.example}</em>
                  <Synonyms synonyms={definition.synonyms} />
                  <SynonymsMobile synonyms={definition.synonyms} />
                </div>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}
