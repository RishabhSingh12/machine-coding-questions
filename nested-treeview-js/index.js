import { data } from "./data.js";

const listContainer = document.getElementById("listContainer");
const inputBox = document.getElementById("input");

//for rendering nested lists
function renderList(htmlStr, list) {
  list.forEach((item) => {
    htmlStr += `<li>${item.name}</li>`;

    //if list contains more items
    if (item.items && item.items.length > 0) {
      htmlStr += `<ul>${renderList("", item.items)}</ul>`;
    }
  });

  return htmlStr;
}

// for rendering the final data
const renderData = (data) => {
  const finalHtml = `<ul>${renderList("", data)}</ul>`;
  // listContainer.insertAdjacentHTML("afterbegin", finalHtml);
  listContainer.innerHTML = finalHtml;
};

//for searching the nested lists
const searchNestedList = (list, keyword) => {
  return list.reduce((acc, item) => {
    //making a copy of each item
    const newItem = { ...item };

    //checking whether each item has items property as an array
    if (Array.isArray(item.items)) {
      newItem.items = searchNestedList(item.items, keyword);
    }

    //to check whether the current "name" property or the subsequent children items name matches ther user input
    if (
      newItem.name.toLowerCase().includes(keyword.toLowerCase()) ||
      (Array.isArray(newItem.items) && newItem.items.length > 0)
    ) {
      acc.push(newItem);
    }

    return acc;
  }, []);
};

//calling the render function
renderData(data);

// search function
function search(value) {
  let filteredData = searchNestedList(data, value);
  renderData(filteredData);
}

//calling search function
inputBox.addEventListener("keyup", (e) => {
  console.log("here");
  search(e.target.value);
});
