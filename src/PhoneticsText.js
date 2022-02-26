import React from "react";
import "./PhoneticsText.css";

export default function PhoneticsText(props) {
  let phonetic = props.phonetic.audio;
  if (phonetic) {
    return (
      <div className="PhoneticsText">
        {props.phonetic.text}
      </div>
    );
  } else {
    return null;
  }
}
