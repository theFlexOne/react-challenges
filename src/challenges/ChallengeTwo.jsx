import { useRef, useState } from "react";

// https://reactchallenges.live/challenge/2

const ChallengeTwo = () => {
  const [time, setTime] = useState(57);

  const timerRef = useRef(null);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };
  const stopTimer = () => {
    clearInterval(timerRef.current);
  };
  const resetTimer = () => {
    stopTimer();
    setTime(0);
  };

  return (
    <div className="container">
      <h1>Timer</h1>
      <span>{Math.floor(time / 60)}m</span>
      <span> {time % 60}s</span>
      <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
};

export default ChallengeTwo;
