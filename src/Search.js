import React from "react"
import "./Search.css"


export default function Search() {
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
            <div className="col-12 bor" align="center" autofocus={true}>
              <form>
                <input type="search" />
                <button type="button" class="btn btn-light">
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