import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ApiResult from "./components/api_result";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*         <section className="boilerplate">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </section> */}
        <ApiResult />
      </header>
    </div>
  );
}

export default App;
