import { useState } from "react";

import "./App.css";
import explorer from "./data/folderData";
import Folder from "./components/Folder";
import useTraverseTree from "./hooks/use-traverse-tree";

function App() {
  const [explorerData, setExplorerData] = useState(explorer);
  const { insertNode, editNode, deleteNode } = useTraverseTree();

  const handleInsertNode = (itemId, item, isFolder) => {
    const newNode = insertNode(explorerData, itemId, item, isFolder);
    setExplorerData(newNode);
  };

  const handleEditNode = (itemId, item, isFolder) => {
    const editedNode = editNode(explorerData, itemId, item, isFolder);
    setExplorerData(editedNode);
  };

  const handleDeleteNode = (itemId) => {
    const finalstructure = deleteNode(explorerData, itemId);
    setExplorerData(finalstructure);
  };

  return (
    <>
      <div>
        <Folder
          handleInsertNode={handleInsertNode}
          handleEditNode={handleEditNode}
          handleDeleteNode={handleDeleteNode}
          explorer={explorerData}
        />
      </div>
    </>
  );
}

export default App;
