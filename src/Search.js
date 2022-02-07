import React, { useState } from "react";
import "./Search.css";
import axios from "axios";

export default function Search() {
  let [keyword, setKeyword] = useState("");

  function handleResponseApi(response) {
    console.log(response.data[0]);
    console.log(response.data[0].meanings[0].definitions[0]);
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
          {/* Main Container */}
          <div className="col-12 d-flex justify-content-center main-container bor">
            <div className="row bor">
              {/* Dictionary container*/}
              <div className="col-12 bor">
                <h1 className="title">Dictionary</h1>
              </div>
              <div className="col-12 bor">
                <p className="description">What are you looking for?</p>
              </div>
              <div className="col-12 bor" align="center" autoFocus={true}>
                <form onSubmit={search}>
                  <input type="search" onChange={handleKeyword} /> {""}
                  <button type="button" className="btn btn-light">
                    🔍
                  </button>
                </form>
              </div>
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
