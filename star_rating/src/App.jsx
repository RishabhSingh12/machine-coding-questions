import { useState } from "react";

import "./App.css";
import IconComponent from "./components/IconComponent";

function App() {
  const [icon, setIcon] = useState("");

  const [showIcon, setShowIcon] = useState("");

  const iconChangeHandler = (e) => {
    setIcon(e.target.value);
  };

  const showIconHandler = () => {
    setShowIcon(icon);
  };

  return (
    <>
      <div className="container">
        <div className="icon-input">
          <input
            type="text"
            value={icon}
            name="icon-input"
            onChange={iconChangeHandler}
            placeholder="Enter icon code"
          />
          <button onClick={showIconHandler}>Show</button>
        </div>
        <IconComponent showIcon={showIcon} />
      </div>
    </>
  );
}

export default App;
