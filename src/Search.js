import React, { useState } from "react";
import "./Search.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import logo from './logo.png';
import PhotosMobile from "./PhotosMobile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Search(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);
  let [photosMobile, setPhotosMobile] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
    // (response.data[0].meanings[0].definitions[0]); whole path for definition
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function handlePexelsPhoneResponse(response) {
    setPhotosMobile(response.data.photos);
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

     let pexelsPhoneApiKey =
       "563492ad6f917000010000017139843c0ff54232a308ef55d1da89ba";
     let pexelsPhoneApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=3`;
     let headersPhone = { Authorization: `Bearer ${pexelsPhoneApiKey}` };
     // axios call to the Pexels photos API
     axios.get(pexelsPhoneApiUrl, { headersPhone }).then(handlePexelsPhoneResponse);
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
        <div className="container-fluid margin-main-container ">
          <div className="row ">
            {/* Main Container Left desktop (container - column) */}
            <div className="col-6 d-none d-lg-block justify-content-center main-container ">
              <div className="container">
                <div className="row ">
                  {/*Header (Credits)*/}
                  <header>
                    <div className="container-fluid ms-5 margin-header-desktop ">
                      <div className="row ">
                        <div className="col-6 background-header padding-container">
                          <div className="row ">
                            <div className="col-4 white-color" align="center">
                              <a href="https://www.instagram.com/mili.codes/?hl=en">
                                <img
                                  className="logo hvr-grow"
                                  src={logo}
                                  alt="Logo"
                                />
                              </a>
                            </div>
                            <div className="col-6 white-color background-header">
                              <div className="background-link">
                                <a
                                  href="https://github.com/milicodes/dictionary-react-app"
                                  className=" mb-1"
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  Open-sourced
                                </a>
                              </div>{" "}
                              {""}
                              by Mili.
                              <p className=" mb-1">Hosted by Netlify</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </header>
                  {/* What are you looking for?*/}
                  <div className="col-1"></div>
                  <div
                    className="col-6 background-yellow ms-4  search-bar"
                    align="left"
                  >
                    <div className="row">
                      <div className="col-12 ">
                        <p className="description mt-2 ms-1">
                          What are you looking for?
                        </p>
                      </div>
                      {/* Search bar + button*/}
                      <div className="col-12 ">
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
                              <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  {/* Title Desktop*/}
                  <div className="col-4 "></div>
                  <div className="col-1 "></div>
                  <div className="col-6 text-wrap  d-none d-md-block">
                    <h1 className="title ">DICTIO ‣ NARY</h1>
                  </div>
                </div>
              </div>
            </div>
            {/* Main Container top mobile (container - column) */}
            <div className="col-12 d-block d-lg-none justify-content-center main-container ">
              <div className="container">
                <div className="row ">
                  {/* Dictionary columns*/}
                  <header>
                    <div className="container-fluid ">
                      <div className="row ">
                        <div className="col-12 mt-2 mb-2 white-color background-header ">
                          <p className=" mb-1 mobile-header-size">
                            <div className="background-link">
                              <a
                                href="https://github.com/milicodes/dictionary-react-app"
                                className=" mb-1"
                                target="_blank"
                                rel="noreferrer"
                              >
                                Open-sourced
                              </a>
                            </div>{" "}
                            {""} by Mili.
                          </p>
                          <p className=" mb-1 mobile-header-size">
                            Hosted by Netlify
                          </p>
                        </div>
                      </div>
                    </div>
                  </header>
                  {/* Title*/}
                  <div className="col-12  d-block d-md-none">
                    <h1 className="title-mobile " align="center">
                      DICTIONARY
                    </h1>
                  </div>
                  {/* What are you looking for?*/}
                  <div
                    className="col-12 mb-4  background-yellow  search-bar-mobile"
                    align="left"
                  >
                    <div className="row">
                      <div className="col-12 ">
                        <p className="description">What are you looking for?</p>
                      </div>
                      {/* Search bar + button*/}
                      <div className="col-12 ">
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
                              <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  {/* Title Desktop*/}
                  <div className="col-12  d-none d-md-block">
                    <h1 className="title ">DICTIONARY</h1>
                  </div>
                </div>
              </div>
            </div>
            {/* Main Container right Desktop (container - column) */}
            <div className="col-6 d-none d-lg-block main-container-right ">
              <div className="container background-yellow container-result ">
                <div className="row ">
                  {/* Results component*/}
                  <div className="col-12 ">
                    <Results results={results} />
                  </div>
                  {/* Photos component*/}
                  <div className="col-12 ">
                    <Photos photos={photos} />
                  </div>
                </div>
              </div>
            </div>
            {/* Main Container Mobile (under) (container - column) */}
            <div className="col-12 d-block d-lg-none main-container-mobile-right ">
              <div className="container background-yellow container-result-mobile ">
                <div className="row ">
                  {/* Results component*/}
                  <div className="col-12 ">
                    <Results results={results} />
                  </div>
                  {/* Photos component*/}
                  <div className="col-12 d-none d-lg-block ">
                    <Photos photos={photos} />
                  </div>
                  <div className="col-12 d-block d-lg-none ">
                    <PhotosMobile photos={photosMobile} />
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
