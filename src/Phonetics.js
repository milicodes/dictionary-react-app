import React from "react";
import "./Phonetics.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";

export default function Phonetics(props) {
  let phonetic = props.phonetic.audio;
  if (phonetic) { 
    return (
      <span className="col-2 speaker-icon Phonetics">
        <a href={phonetic} classnametarget="speaker-color" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faVolumeHigh}/>
        </a>
      </span>
    );
  } else {
    return null;
  }
}
