import { useState } from "react";

import "./App.css";
import explorer from "./data/folderData";
import Folder from "./components/Folder";
import useTraverseTree from "./hooks/use-traverse-tree";

function App() {
  const [explorerData, setExplorerData] = useState(explorer);
  const { insertNode } = useTraverseTree();

  const handleInsertNode = (itemId, item, isFolder) => {
    const newNode = insertNode(explorerData, itemId, item, isFolder);

    setExplorerData(newNode);
  };

  return (
    <>
      <div>
        <Folder handleInsertNode={handleInsertNode} explorer={explorerData} />
      </div>
    </>
  );
}

export default App;
