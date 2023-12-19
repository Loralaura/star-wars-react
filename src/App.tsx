import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import ApiResult from "./components/api_result";
import axios from "axios";

type ResultProps = {
  name: string;
};

function App() {
  const [response, setResponse] = useState<ResultProps[]>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    async function fetchMyAPI() {
      try {
        const response = await axios("https://swapi.dev/api/people/");
        setResponse(response.data.results);
      } catch (error: any) {
        setError(error.message);
      }
    }

    fetchMyAPI();
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>{response?.[0]?.name}</h1>
        {error && <h1>{error}</h1>}
      </header>
    </div>
  );
}

export default App;
