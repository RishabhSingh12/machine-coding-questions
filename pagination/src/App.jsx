import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PaginationComponent from "./components/PaginationComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <div className="App-header">
          <PaginationComponent />
        </div>
      </div>
    </>
  );
}

export default App;
