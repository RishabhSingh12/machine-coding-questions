import { data } from "./data.js";

const listContainer = document.getElementById("listContainer");

//for rendering nested lists
function renderList(htmlStr, list) {
  list.forEach((item) => {
    htmlStr += `<li>${item.name}</li>`;

    //if list contains more items
    if (item.items) {
      htmlStr += `<ul>${renderList(htmlStr, item.items)}</ul>`;
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
const searchNestedList = (list, keyword) => {};

//calling the render function
renderData(data);
