import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        <ul className="synonym-list">
          {props.synonyms.map(function (synonym, index) {
            if (index < 6) {
              return (
                <li key={index} className="synonym-word">
                  {synonym}
                </li>
              );
            } else {
              return null;
            }
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
