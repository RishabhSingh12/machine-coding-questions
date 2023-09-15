import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import ButtonAction from "./ButtonAction";
import "./Comment.css";

const Comment = ({
  comments,
  handleInsertNode,
  handleDeleteNode,
  handleEditNode,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [edit, setEdit] = useState(false);
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState(false);

  const inputRef = useRef(null);

  const changeInputHandler = (e) => {
    setInputValue(e.target.value);
  };

  //for replying
  const handleNewComment = () => {
    setShowInput(true);
    if (!inputValue) return;
  };

  //for adding comments
  const onAddComment = () => {
    if (edit) {
      if (inputRef?.current?.innerText === "") return;
      handleEditNode(comments.id, inputRef?.current?.innerText);
    } else {
      if (!inputValue) return;
      // setExpand(true);
      handleInsertNode(comments.id, inputValue);
      setInputValue("");
      setShowInput(false);
    }

    if (edit) {
      setEdit(false);
    }
  };

  const handleDelete = () => {
    handleDeleteNode(comments.id);
  };

  //for focusing text during edit
  useEffect(() => {
    inputRef?.current?.focus();
  }, [edit]);

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
              placeholder="type something..."
            />
            <ButtonAction
              className="reply comment"
              type="Comment"
              handleClick={onAddComment}
            />
          </>
        ) : (
          <>
            <span
              ref={inputRef}
              style={{
                wordWrap: "break-word",
              }}
              contentEditable={edit}
              suppressContentEditableWarning={edit}
            >
              {comments.name}
            </span>

            <div style={{ display: "flex", marginTop: "2px" }}>
              {edit ? (
                <div className="editmode_buttons">
                  <ButtonAction
                    type="Save"
                    className="reply comment"
                    handleClick={onAddComment}
                  />
                  <ButtonAction
                    type="Cancel"
                    className="reply comment"
                    handleClick={() => {
                      if (inputRef.current) {
                        inputRef.current.innerText = comments.name;
                      }
                      setEdit(false);
                    }}
                  />
                </div>
              ) : (
                <>
                  <ButtonAction
                    className="reply comment"
                    type="Reply"
                    handleClick={handleNewComment}
                  />
                  <ButtonAction
                    className="edit comment"
                    type="Edit"
                    handleClick={() => setEdit(true)}
                  />
                  <ButtonAction
                    className="delete comment"
                    type="Delete"
                    handleClick={handleDelete}
                  />
                </>
              )}
            </div>
          </>
        )}
      </div>

      {/* for showing input box when adding new comments */}
      <div
        style={{ display: showInput ? "block" : "none", paddingLeft: "25px" }}
      >
        {showInput && (
          <div className="inputContainer">
            <input
              onChange={changeInputHandler}
              type="text"
              value={inputValue}
              className="inputContainer__input first_input"
              autoFocus
              placeholder="type something..."
            />
            <ButtonAction
              className="reply comment"
              type="Reply"
              handleClick={onAddComment}
            />
            <ButtonAction
              className="reply comment"
              type="Cancel"
              handleClick={() => setShowInput(false)}
            />
          </div>
        )}
      </div>

      {/* recursively going through the comments */}
      <div style={{ paddingLeft: "25px" }}>
        {comments?.items?.map((cmt, idx) => {
          return (
            <Comment
              key={cmt.id}
              comments={cmt}
              handleInsertNode={handleInsertNode}
              handleEditNode={handleEditNode}
              handleDeleteNode={handleDeleteNode}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Comment;
