import React, { useState } from "react";
import "./Search.css";
import axios from "axios";
import Results from "./Results";

export default function Search() {
  let [keyword, setKeyword] = useState("");
  let[results, setResults] = useState({});

  function handleResponseApi(response) {
    setResults(response.data[0]);
   // (response.data[0].meanings[0].definitions[0]); whole path for definition
  }

  function search(event) {
    event.preventDefault();

    // documentation https://dictionaryapi.dev/

    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiURL).then(handleResponseApi);
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Search">
      <div className="container bor">
        <div className="row bor">
          {/* Main Container (container - column) */}
          <div className="col-12 d-flex justify-content-center main-container bor">
            <div className="row bor">
              {/* Dictionary columns*/}
              <div className="col-12 bor">
                {/* Name*/}
                <h1 className="title">Dictionary</h1>
              </div>
              {/* What are you looking for?*/}
              <div className="col-12 bor">
                <p className="description">What are you looking for?</p>
              </div>
              {/* Search bar + button*/}
              <div className="col-12 bor" align="center" autoFocus={true}>
                <form onSubmit={search}>
                  <input type="search" onChange={handleKeyword} /> {""}
                  <button type="button" className="btn btn-light">
                    🔍
                  </button>
                </form>
              </div>
              {/* Results component*/}
              <Results results={results}/>
              {/* Credits*/}
              <div className="col-12 bor">
                <footer className="footer">
                  <p>Coded by Mili. Hosted by Netlify</p>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
