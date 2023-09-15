import { useState } from "react";
import Comment from "./components/Comment";
import "./App.css";
import { useNode } from "./hooks/useNode";

const comments = {
  id: 1,
  items: [],
};

function App() {
  // const [count, setCount] = useState(0);
  const { insertNode, editNode, deleteNode } = useNode();

  const [commentsData, setCommentsData] = useState(comments);

  //handler functions for adding, editing and deleting nodes
  const handleInsertNode = (folderId, item) => {
    const finalStructure = insertNode(commentsData, folderId, item);
    setCommentsData(finalStructure);
  };
  const handleEditNode = (folderId, item) => {
    const finalStructure = editNode(commentsData, folderId, item);
    setCommentsData(finalStructure);
  };
  const handleDeleteNode = (folderId) => {
    const finalStructure = deleteNode(commentsData, folderId);
    setCommentsData({ ...finalStructure });
  };

  return (
    <>
      <div className="App">
        <Comment
          comments={commentsData}
          handleInsertNode={handleInsertNode}
          handleEditNode={handleEditNode}
          handleDeleteNode={handleDeleteNode}
        />
      </div>
    </>
  );
}

export default App;
