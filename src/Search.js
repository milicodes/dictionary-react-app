import React, { useState } from "react";
import "./Search.css";
import axios from "axios";
import Results from "./Results";

export default function Search(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponseApi(response) {
    setResults(response.data[0]);
    // (response.data[0].meanings[0].definitions[0]); whole path for definition
  }

  function search() {
    // documentation https://dictionaryapi.dev/

    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiURL).then(handleResponseApi);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search()
  }

  if (loaded) {
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
                <div className="col-12 bor" align="center">
                  <form onSubmit={handleSubmit}>
                    <input
                      type="search"
                      onChange={handleKeyword}
                      defaultValue={props.defaultKeyword}
                      autoFocus={true}
                    />{" "}
                    {""}
                    <button type="button" className="btn btn-light">
                      🔍
                    </button>
                  </form>
                </div>
                {/* Results component*/}
                <Results results={results} />
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
  } else {
    load();
    return "Loading...";
  }
}
