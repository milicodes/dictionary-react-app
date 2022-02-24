import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms row">
        {props.synonyms.map(function (synonym, index) {
          return (
            <div key={index} className="synonym-word col-3 bor" align="center">
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
