import React from "react";
import "./PhoneticsText.css";

export default function PhoneticsText(props) {
  return <div className="PhoneticText">{props.phonetic[1].text}</div>;
}
