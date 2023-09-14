import { useState } from "react";
import "./App.css";

const comments = {
  id: 1,
  items: [],
};

function App() {
  // const [count, setCount] = useState(0);

  const [commentsData, setCommentsData] = useState(comments);

  return (
    <>
      <div className="App">
        <Comment comments={commentsData} />
      </div>
    </>
  );
}

export default App;
