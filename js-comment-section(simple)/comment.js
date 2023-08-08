let commentContainer = document.getElementById("comment-container");
let editComment = false;

function createInputBox(value = "") {
  let div = document.createElement("div");
  div.setAttribute("class", "comment-details");

  div.innerHTML += `<input type="text" placeholder="Add text here" class="input" value=${value}>
            <button class="btn submit">${
              editComment ? "Save" : "Submit"
            }</button>`;

  editComment = false;
  return div;
}

function addReply(text) {
  let div = document.createElement("div");
  div.setAttribute("class", "all-comment");

  div.innerHTML += `
        <div class="card">
                    <span class="text">${text}</span>
                    <div class="edit-reply-container">
                        <span class="reply" id="reply">Add reply</span>
                        <span class="edit" id="edit">Edit</span>
                        <span class="delete" id="delete">Delete</span>  
                    </div>
                    
                </div>
    `;

  return div;
}

commentContainer.addEventListener("click", function (e) {
  let replyClicked = e.target.classList.contains("reply");
  let editClicked = e.target.classList.contains("edit");
  let deleteClicked = e.target.classList.contains("delete");

  let submitClicked = e.target.classList.contains("submit");
  let closestCard = e.target.closest(".all-comment");

  //clicking on reply button
  if (replyClicked) {
    closestCard.appendChild(createInputBox());
  }

  //clicking on edit button
  if (editClicked) {
    let textValue = closestCard.children[0].children[0].textContent;
    // console.log(textValue);

    editComment = true;
    closestCard.children[0].remove();
    closestCard.appendChild(createInputBox(textValue));
  }

  // deleting comment
  if (deleteClicked) {
    closestCard.remove();
  }

  //clicking on submit btn to add a comment
  if (submitClicked) {
    let commentDetails = e.target.closest(".comment-details");
    if (commentDetails.children[0].value) {
      closestCard.appendChild(addReply(commentDetails.children[0].value));
      commentDetails.remove();
    }
  }
});
