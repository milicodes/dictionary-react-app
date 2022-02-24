import React, { useState } from "react";
import "./Search.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Search(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);


  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
    // (response.data[0].meanings[0].definitions[0]); whole path for definition
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    // documentation https://dictionaryapi.dev/

    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    // axios call to the dictionary API
    axios.get(apiURL).then(handleDictionaryResponse);

    // Pexels Url + Call

    let pexelsApiKey =
      "563492ad6f917000010000017139843c0ff54232a308ef55d1da89ba";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=3`;
    let headers = {Authorization: `Bearer ${pexelsApiKey}`};
    // axios call to the Pexels photos API
    axios.get(pexelsApiUrl, {headers}).then(handlePexelsResponse);
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
    search();
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
                <div className="col-6 bor">
                  <Results results={results} />
                </div>
                {/* Photos component*/}
                <div className="col-6 bor">
                  <Photos photos={photos} />
                </div>
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
// api pexels key 563492ad6f917000010000017139843c0ff54232a308ef55d1da89ba
