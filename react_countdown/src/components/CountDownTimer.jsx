import React from "react";
import { useEffect } from "react";

const CountDownTimer = ({ time, setTime }) => {
  let timer = null;

  const displayTime = () => {
    let sec;
    let mins;
    let hrs;
    if (time >= 1000) {
      let date = new Date(time);
      sec = date.getSeconds();
      mins = date.getMinutes();
      hrs = date.getHours();

      console.log(date);
      console.log(date.getDay());

      //   console.log("hrs:mins:secs", hrs, mins, sec);
      sec = sec.toString().length === 1 ? "0" + sec : sec;
      mins = mins.toString().length === 1 ? "0" + mins : mins;
      hrs = hrs.toString().length === 1 ? "0" + hrs : hrs;

      return `${hrs} : ${mins} : ${sec}`;
    } else {
      return "00 : 00 : 00";
    }
  };

  const handleStop = () => {
    if (!timer) return;
    clearInterval(timer);
    timer = null;
    setTime(0);
  };

  const handleStart = () => {
    handleTime();
  };

  const handleTime = () => {
    if (time >= 1000) {
      timer = setInterval(() => {
        setTime(time - 1000);
      }, 1000);
    } else {
      clearInterval(timer);
      setTime(0);
    }
  };

  useEffect(() => {
    handleTime();

    return () => {
      clearInterval(timer);
    };
  }, [time]);

  return (
    <div className="time">
      {displayTime()}
      <button onClick={handleStop}>Reset</button>
      {/* <button onClick={handleStart}>Start</button> */}
    </div>
  );
};

export default CountDownTimer;
