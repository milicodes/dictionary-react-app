import React, { useState } from "react";
import "./Search.css";
export default function Search() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definition...`);
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Search">
      <div className="container bor">
        <div className="row bor">
          <div className="col-12 d-flex justify-content-center main-container bor">
            <div className="row bor">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
