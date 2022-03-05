import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import PhoneticsText from "./PhoneticsText";
import "./Results.css";

export default function Results(promps) {
  if (promps.results) {
    return (
      <div className="container Results">
        <div className="row">
          {/*Word */}
          <div className="col-12" align="center">
            <h2 className="definition">
              {promps.results.word} {""}
              <span>
                {promps.results.phonetics.map(function (phonetic, index) {
                  if (index < 1) {
                    return (
                      <span className="phonetic-sound" key={index}>
                        <Phonetics phonetic={phonetic} />
                      </span>
                    );
                  } else {
                    return null;
                  }
                })}
                <PhoneticsText phonetic={promps.results.phonetics} />
              </span>
            </h2>

            {/*Phonetics */}
          </div>
          {/*Meanings (with our without synonyms) */}
          <div className="col-12 background-results">
            {promps.results.meanings.map(function (meaning, index) {
              return (
                <div key={index}>
                  <Meaning meaning={meaning} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
