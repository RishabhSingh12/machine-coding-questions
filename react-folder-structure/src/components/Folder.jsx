import React, { useEffect, useRef, useState } from "react";

const Folder = ({
  explorer,
  handleInsertNode,
  handleEditNode,
  handleDeleteNode,
}) => {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });
  const [edit, setEdit] = useState(false);
  const inputRef = useRef();
  const [editvalue, setEditValue] = useState(explorer.name);

  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      visible: true,
      isFolder,
    });
  };

  const handleModifier = (e, mode, value) => {
    switch (mode) {
      case "edit":
        e.stopPropagation();
        setEdit(value);
        break;
      case "delete":
        break;
      case "cancel":
        e.stopPropagation();
        if (editvalue) {
          setEditValue(explorer.name);
        }
        setEdit(value);
    }
  };

  //edit input handler
  const editchangeHandler = (e) => {
    e.stopPropagation();
    console.log("here");
    setEditValue(e.target.value);
  };

  //adding new folder or file
  const onAddFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleInsertNode(explorer.id, e.target.value, showInput.isFolder);
      setShowInput({ ...showInput, visible: false });
    }
  };

  //deleting the file or folder
  const onDeleteItem = (e) => {
    e.stopPropagation();
    handleDeleteNode();
  };

  //editing the name of the file or folder
  const editNameHandler = (e) => {
    e.stopPropagation();
    if (edit) {
      //   if (editvalue.length === 0) return;
      handleEditNode(explorer.id, editvalue, explorer.isFolder);
    }
    if (edit) setEdit(false);
  };

  useEffect(() => {
    inputRef?.current?.focus();
  }, [edit]);

  if (explorer.isFolder) {
    return (
      <div style={{ marginTop: 5, marginLeft: 5 }}>
        <div className="folder" onClick={() => setExpand(!expand)}>
          <span>
            📁
            {edit ? (
              <input
                ref={inputRef}
                required={true}
                autoFocus
                onChange={editchangeHandler}
                className="edit_input"
                value={editvalue}
              />
            ) : (
              explorer.name
            )}
          </span>

          {/* edit and delete btns */}
          <div className="btn-container">
            <div className="modifier-container">
              {explorer.name !== "root" &&
                (!edit ? (
                  <>
                    <button onClick={(e) => handleModifier(e, "edit", true)}>
                      ✏️
                    </button>

                    <button onClick={onDeleteItem}>🗑️</button>
                  </>
                ) : (
                  <>
                    <button onClick={editNameHandler}>Save</button>
                    <button onClick={(e) => handleModifier(e, "cancel", false)}>
                      Cancel
                    </button>
                  </>
                ))}
            </div>

            {/* btns section */}
            <div className="add-btn-container">
              <button onClick={(e) => handleNewFolder(e, true)}>
                Folder ➕
              </button>
              <button onClick={(e) => handleNewFolder(e, false)}>
                File ➕
              </button>
            </div>
          </div>
        </div>

        {/* to render items of a folder */}
        <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
          {/* showing and hiding input */}
          {showInput.visible && (
            <div>
              <span>{showInput.isFolder ? "📁 " : "📄 "}</span>
              <input
                onKeyDown={onAddFolder}
                type="text"
                autoFocus
                onBlur={() => setShowInput({ ...showInput, visible: false })}
                className="inputContainer__input"
              />
            </div>
          )}

          {explorer.items.map((exp) => {
            return (
              <Folder
                handleInsertNode={handleInsertNode}
                handleEditNode={handleEditNode}
                explorer={exp}
                key={exp.id}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return <span className="file">📄{explorer.name}</span>;
  }
};

export default Folder;
