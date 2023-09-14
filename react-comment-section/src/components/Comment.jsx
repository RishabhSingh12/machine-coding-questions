import React from "react";
import { useState } from "react";
import ButtonAction from "./ButtonAction";

const Comment = ({ comments }) => {
  const [inputValue, setInputValue] = useState("");

  const changeInputHandler = (e) => {
    setInputValue(e.target.value);
  };

  //for adding comments
  const onAddComment = () => {};

  return (
    <div>
      <div
        className={comments.id === 1 ? "inputContainer" : "commentsContainer"}
      >
        {comments.id === 1 ? (
          <>
            <input
              onChange={changeInputHandler}
              type="text"
              value={inputValue}
              className="inputContainer__input first_input"
              autoFocus
            />
            <ButtonAction
              className="reply comment"
              type="Comment"
              handleClick={onAddComment}
            />
          </>
        ) : (
          <>
            <span style={{ paddingLeft: "25" }}>{comments.name}</span>
            <div style={{ display: "flex", marginTop: "5px" }}>
              <ButtonAction
                className="reply comment"
                type="Reply"
                handleClick={onAddComment}
              />
              <ButtonAction
                className="reply comment"
                type="Reply"
                handleClick={onAddComment}
              />
              <ButtonAction
                className="reply comment"
                type="Reply"
                handleClick={onAddComment}
              />
            </div>
          </>
        )}
      </div>

      {/* recursively going through the comments */}
      <div style={{ paddingLeft: "25" }}>
        {comments?.items?.map((cmt, idx) => {
          return <Comment key={cmt.id} comments={cmt} />;
        })}
      </div>
    </div>
  );
};

export default Comment;
