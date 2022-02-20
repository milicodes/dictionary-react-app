import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function Results(promps) {
  if (promps.results) {
    return (
      <div className="container Results">
        <div className="row">
          {/*Word */}
          <div className="col-12 bor">
            <h2 className="definition">{promps.results.word}</h2>
            {/*Phonetics */}
            {promps.results.phonetics.map(function (phonetic, index) {
              return (<div key={index}>
                <Phonetics phonetic={phonetic} />
              </div>)
            })}
          </div>
          <div className="col-12 bor">
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
