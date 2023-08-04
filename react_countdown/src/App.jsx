import { useState, useRef } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import CountDownTimer from "./components/CountDownTimer";

function App() {
  const [count, setCount] = useState(0);
  const [date, setDate] = useState("");
  const [timeStamp, setTimeStamp] = useState("0");

  const inputRef = useRef();

  const dateHandler = (e) => {
    if (inputRef.current.valueAsNumber < Date.now()) {
      alert("Please select a future date !");
      return;
    }

    setDate(e.target.value);
  };

  const timeHandler = () => {
    console.log(inputRef.current.value);
    setTimeStamp(inputRef.current.valueAsNumber - Date.now());
    setDate("");
  };

  return (
    <>
      <div className="container">
        <CountDownTimer time={timeStamp} setTime={setTimeStamp} />
        <div className="input-container">
          <input
            ref={inputRef}
            type="date"
            value={date}
            onChange={dateHandler}
            placeholder="Select date"
          />
          <button
            className="time-btn"
            disabled={date.length === 0}
            onClick={timeHandler}
          >
            Set Time
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
