import React from "react";
import Meaning from "./Meaning";

export default function Results(promps) {
  if (promps.results) {
    return (
      <div className="container Results">
        <div className="row">
          <div className="col-6 bor">
            <h2 className="definition">{promps.results.word}</h2>
          </div>
          <div className="col-6 bor"></div>
          <div className="col-6 bor">
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
