import { useEffect } from "react";
import { useState } from "react";

import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchHandler = (e) => {
    setQuery(e.target.value);
  };

  //for calling api
  const getSearchItems = async () => {};

  useEffect(() => {
    setLoading(true);
    getSearchItems();
  }, []);

  return (
    <>
      <main className="main-container">
        <h1 className="title">Optimized Search Query</h1>
        <input
          value={query}
          type="search"
          className="search-input"
          placeholder="Enter text"
          onChange={searchHandler}
        />
      </main>
    </>
  );
}

export default App;
