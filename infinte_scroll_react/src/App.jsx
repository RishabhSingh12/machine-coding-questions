import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);

  //ref for observer
  const observer = useRef();

  const lastElement = (node) => {
    if (loading) return;

    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        setPage((prev) => prev + 1);
      }
    });

    if (node) observer.current.observe(node);
  };

  const searchHandler = (e) => {
    setQuery(e.target.value);
  };

  //for calling api
  const getSearchItems = async () => {
    try {
      const res = await fetch(
        `https://openlibrary.org/search.json?q=${query}&page=${page}`
      );

      const resultData = await res.json();

      setLoading(false);
      console.log(resultData);

      //checking whether the response has more data to provide
      setHasMore(resultData.docs.length > 0);

      setResponse((prev) => {
        return [
          ...new Set([...prev, ...resultData.docs.map((ele) => ele.title)]),
        ];
      });
    } catch (error) {
      console.log(error);
    }
  };

  //to reset the data from the previous call
  useEffect(() => {
    setResponse([]);
  }, [query]);

  //to call the api
  useEffect(() => {
    setLoading(true);
    getSearchItems();
  }, [query, page]);

  // console.log(response);

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

        <div>
          {response.map((ele, idx) => {
            if (idx + 1 === response.length) {
              return (
                <div ref={lastElement} key={idx} className="title">
                  <br />
                  {ele}
                </div>
              );
            } else {
              return (
                <div key={idx} className="title">
                  <br />
                  {ele}
                </div>
              );
            }
          })}
        </div>

        {loading === true && <div>Loading...</div>}
      </main>
    </>
  );
}

export default App;
