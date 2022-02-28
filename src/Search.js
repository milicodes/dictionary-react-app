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
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    // axios call to the Pexels photos API
    axios.get(pexelsApiUrl, { headers }).then(handlePexelsResponse);
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
        <div className="container-fluid margin-main-container bor">
          <div className="row bor">
            {/* Main Container Left desktop (container - column) */}
            <div className="col-6 d-none d-lg-block justify-content-center main-container bor">
              <div className="container">
                <div className="row bor">
                  {/*Header (Credits)*/}
                  <header>
                    <div className="container-fluid margin-header-desktop bor">
                      <div className="row bor">
                        <div className="col-6 background-header padding-container">
                          <div className="row bor">
                            <div className="col-4 white-color" align="center">
                              <p>Icon</p>
                            </div>
                            <div className="col-6 white-color background-header">
                              <p className=" mb-1">Open-sourced by Mili.</p>
                              <p className=" mb-1">Hosted by Netlify</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </header>
                  {/* Title Desktop*/}
                  <div className="col-12 bor d-block d-md-none">
                    <h1 className="title bor">Dictionary</h1>
                  </div>
                  {/* What are you looking for?*/}
                  <div className="col-6 background-yellow bor" align="left">
                    <div className="row">
                      <div className="col-12 bor">
                        <p className="description">What are you looking for?</p>
                      </div>
                      {/* Search bar + button*/}
                      <div className="col-12 bor">
                        <form onSubmit={handleSubmit} className="row g-2">
                          <div className="col-9">
                            <input
                              type="search"
                              className="form-control"
                              onChange={handleKeyword}
                              defaultValue={props.defaultKeyword}
                              autoFocus={true}
                            />{" "}
                          </div>
                          {""}
                          <div className="col-auto">
                            <button type="button" className="btn btn-light">
                              🔍
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  {/* Title Desktop*/}
                  <div className="col-12 bor d-none d-md-block">
                    <h1 className="title bor">Dictionary</h1>
                  </div>
                </div>
              </div>
            </div>
            {/* Main Container top mobile (container - column) */}
            <div className="col-12 d-block d-lg-none justify-content-center main-container bor">
              <div className="container">
                <div className="row bor">
                  {/* Dictionary columns*/}
                  <header>
                    <div className="container-fluid bor">
                      <div className="row bor">
                        <div className="col-12 white-color background-header bor">
                          <p className="bor mb-1 mobile-header-size">
                            Open-sourced by Mili.
                          </p>
                          <p className="bor mb-1 mobile-header-size">
                            Hosted by Netlify
                          </p>
                        </div>
                      </div>
                    </div>
                  </header>
                  {/* Title Desktop*/}
                  <div className="col-12 bor d-block d-md-none">
                    <h1 className="title bor">Dictionary</h1>
                  </div>
                  {/* What are you looking for?*/}
                  <div className="col-12 background-yellow bor" align="left">
                    <div className="row">
                      <div className="col-12 bor">
                        <p className="description">What are you looking for?</p>
                      </div>
                      {/* Search bar + button*/}
                      <div className="col-12 bor">
                        <form onSubmit={handleSubmit} className="row g-2">
                          <div className="col-9">
                            <input
                              type="search"
                              className="form-control"
                              onChange={handleKeyword}
                              defaultValue={props.defaultKeyword}
                              autoFocus={true}
                            />{" "}
                          </div>
                          {""}
                          <div className="col-auto">
                            <button type="button" className="btn btn-light">
                              🔍
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  {/* Title Desktop*/}
                  <div className="col-12 bor d-none d-md-block">
                    <h1 className="title bor">Dictionary</h1>
                  </div>
                </div>
              </div>
            </div>
            {/* Main Container right (container - column) */}
            <div className="col-6 d-none d-lg-block main-container bor">
              <div className="container bor">
                <div className="row bor">
                  {/* Results component*/}
                  <div className="col-12 bor">
                    <Results results={results} />
                  </div>
                  {/* Photos component*/}
                  <div className="col-12 bor">
                    <Photos photos={photos} />
                  </div>
                </div>
              </div>
            </div>
            {/* Main Container Mobile (under) (container - column) */}
            <div className="col-12 d-block d-lg-none main-container-mobile bor">
              <div className="container bor">
                <div className="row bor">
                  {/* Results component*/}
                  <div className="col-12 bor">
                    <Results results={results} />
                  </div>
                  {/* Photos component*/}
                  <div className="col-12 bor">
                    <Photos photos={photos} />
                  </div>
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
