import React, { useEffect, useState } from "react";
import "./App.css";
import { ErrorMsg } from "./components/error_msg";
import axios from "axios";

type ResultProps = {
  name: string;
};

function App() {
  const [response, setResponse] = useState<ResultProps>();
  const [status, setStatus] = useState<number>();

  useEffect(() => {
    async function fetchMyAPI() {
      try {
        const response = await axios.get("https://swapi.dev/api/people/");
        setResponse(response.data.results[0]);
      } catch (error: any) {
        setStatus(error.response.status);
      }
    }

    fetchMyAPI();
  });

  return (
    <div>
      {response && <div data-testid="name">{response?.name}</div>}
      <ErrorMsg status={status} />
    </div>
  );
}

export default App;
