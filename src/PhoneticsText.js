import React from "react";
import "./PhoneticsText.css";

export default function PhoneticsText(props) {
  console.log(props.phonetic)
  if (props.phonetic[1]) {
    return <div className="PhoneticText">{props.phonetic[1].text}</div>;
  } else if (props.phonetic[0]) {
    return <div className="PhoneticText">{props.phonetic[0].text}</div>;
  } else {
    return null;
  }
}
