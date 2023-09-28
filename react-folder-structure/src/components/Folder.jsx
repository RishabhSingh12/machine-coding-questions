import React, { useState } from "react";

const Folder = ({ explorer }) => {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });

  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      visible: true,
      isFolder,
    });
  };

  //adding new folder or file
  const onAddFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      setShowInput({ ...showInput, visible: false });
    }
  };

  if (explorer.isFolder) {
    return (
      <div style={{ marginTop: 5, marginLeft: 5 }}>
        <div className="folder" onClick={() => setExpand(!expand)}>
          <span>📁{explorer.name}</span>

          {/* btns section */}
          <div className="btn-container">
            <button onClick={(e) => handleNewFolder(e, true)}>Folder ➕</button>
            <button onClick={(e) => handleNewFolder(e, false)}>File ➕</button>
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
            return <Folder explorer={exp} key={exp.id} />;
          })}
        </div>
      </div>
    );
  } else {
    return <span className="file">📄{explorer.name}</span>;
  }
};

export default Folder;
