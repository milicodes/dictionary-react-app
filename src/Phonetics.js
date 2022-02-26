import React from "react";
import "./Phonetics.css"

export default function Phonetics(props) {
  let phonetic = props.phonetic.audio;
  if (phonetic) {
    return (
      <span className="col-2 Phonetics">
        <a href={phonetic} target="_blank" rel="noreferrer">
          .
        </a>
      </span>
    );
  } else {
    return null;
  }
}
