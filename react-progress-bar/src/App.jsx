import { useState, useRef } from "react";

import "./App.css";
import ProgressBar from "./components/ProgressBar";
import { useEffect } from "react";

const duration = 10 * 1000;
const interval = 1 * 1000;
const totalCycles = duration / interval;
const progressMade = (interval / duration) * 100;

function App() {
  const [progress, setProgress] = useState(0);
  const timer = useRef();
  const cyclesCompleted = useRef(0);

  useEffect(() => {
    timer.current = setInterval(() => {
      setProgress((prevprogress) => prevprogress + progressMade);

      cyclesCompleted.current += 1;

      if (cyclesCompleted.current === totalCycles) clearInterval(timer.current);
    }, interval);

    return () => {
      clearInterval(timer.current);
    };
  }, []);

  return (
    <>
      <ProgressBar progress={progress} />
    </>
  );
}

export default App;
