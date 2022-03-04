import React from "react";
import './App.css';
import Search from './Search';


function App() {
  return (
    <div className="App">
      <Search defaultKeyword="hello" />
      <div className="container">
        <div className="row">
          <div className="col-12 squares">
            <ul class="bg-bubbles">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
