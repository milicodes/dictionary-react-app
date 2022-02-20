import React from "react";
import "./Phonetics.css"

export default function Phonetics(props) {
  console.log(props);
  let phonetic = props.phonetic.audio;
  if (phonetic) {
    return (
      <div className="Phonetics">
        <a href={phonetic} target="_blank" rel="noreferrer">
          Listen
        </a>
        <br />
        {props.phonetic.text}
      </div>
    );
  } else {
    return null;
  }
}
