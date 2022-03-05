import React from "react";
import "./Synonyms.css";

export default function SynonymsMobile(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms row">
        {props.synonyms.map(function (synonym, index) {
          return (
            <div key={index} className="synonym-word col-12 d-block d-lg-none bor" align="center">
              {synonym}
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
