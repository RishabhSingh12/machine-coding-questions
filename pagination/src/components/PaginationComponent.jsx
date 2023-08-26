import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { flushSync } from "react-dom";
import "./PaginationComponent.css";

const PaginationComponent = () => {
  const [data, setData] = useState([]);

  //2nd step
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  //to limit no of pages displayed
  const [pageNoDisplayLimit, setPageNoDisplayLimit] = useState(5);
  const [maxNoDisplay, setMaxNoDisplay] = useState(5);
  const [minNoDisplay, setMinNoDisplay] = useState(0);

  //to calculate first and last index and content for each page
  let lastItemIndex = currentPage * itemsPerPage;
  let firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItemCount = data.slice(firstItemIndex, lastItemIndex);

  //3rd step
  const renderData = (data) => {
    return data.map((ele, idx) => {
      return (
        <li className="data-list-item" key={idx}>
          {ele.title}
        </li>
      );
    });
  };

  //4th step
  const pagesArr = [];
  for (let i = 1; i < Math.ceil(data.length / itemsPerPage); i++) {
    pagesArr.push(i);
  }

  //handler for the selected page click
  const setpagehandler = (e) => {
    setCurrentPage(e.target.id);

    console.log(e.target.id, currentPage);
  };

  //display page numbers
  const renderPageNos = pagesArr.map((ele, idx) => {
    if (ele < maxNoDisplay + 1 && ele > minNoDisplay) {
      return (
        <li
          onClick={setpagehandler}
          key={idx}
          id={ele}
          className={currentPage == ele ? "active" : null}
        >
          {ele}
        </li>
      );
    } else {
      return null;
    }
  });

  //button click handlers
  const handleNextBtn = (e) => {
    e.stopPropagation();
    setCurrentPage((page) => page + 1);

    if (currentPage + 1 > maxNoDisplay) {
      setMaxNoDisplay((maxNoDisplay) => maxNoDisplay + pageNoDisplayLimit);
      setMinNoDisplay((minNoDisplay) => minNoDisplay + pageNoDisplayLimit);
    }
  };

  const handlePrevBtn = (e) => {
    e.stopPropagation();
    setCurrentPage((page) => page - 1);

    if ((currentPage - 1) % pageNoDisplayLimit == 0) {
      setMaxNoDisplay((maxNoDisplay) => maxNoDisplay - pageNoDisplayLimit);
      setMinNoDisplay((minNoDisplay) => minNoDisplay - pageNoDisplayLimit);
    }
  };

  //1st step
  const fetchTodos = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setData(json));
  };

  useEffect(() => {
    fetchTodos();

    return () => {};
  }, []);

  return (
    <>
      <h1>pagination</h1>
      <br />
      <ul className="pageNumbers">
        <div className="pageno-container">
          <button
            disabled={currentPage === pagesArr[0]}
            className="btn"
            onClick={handlePrevBtn}
          >
            Prev
          </button>
          {renderPageNos}
          <button
            disabled={currentPage === pagesArr[pagesArr.length - 1]}
            className="btn"
            onClick={handleNextBtn}
          >
            Next
          </button>
        </div>
      </ul>
      <div className="data-list-container">{renderData(currentItemCount)}</div>
    </>
  );
};

export default PaginationComponent;
