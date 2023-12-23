import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import ErrorMsg from "./components/error_msg";
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
        const response = await fetch("https://swapi.dev/api/people/");
        const data = await response.json();
        setResponse(data);
      } catch (error: any) {
        setError(error.message);
      }
    }

    fetchMyAPI();
  });

  return (
    <div className="App">
      {response && <h1 data-testid="name">{response?.[0]?.name}</h1>}
      {error && <h1>{error}</h1>}
    </div>
  );
}

export default App;
