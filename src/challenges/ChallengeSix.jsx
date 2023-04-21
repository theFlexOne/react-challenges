import { useEffect, useRef, useState } from "react";

// https://reactchallenges.live/challenge/6

const ChallengeSix = () => {
  const [time, setTime] = useState(10);
  const [clickCounter, setClickCounter] = useState(0);

  const timerRef = useRef(null);

  const startCountdown = () => {
    timerRef.current = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);
  };

  useEffect(() => {
    if (time === 0) {
      clearInterval(timerRef.current);
      alert(`You clicked ${clickCounter} times!`);
    }
  }, [time]);

  return (
    <div>
      <h1 className="mb-8">Click Counter</h1>
      <div className="flex flex-col gap-6">
        <div className="flex gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-4xl">Time Remaining:</p>
            <p
              className="text-4xl"
              style={{ color: time > 3 ? "white" : "red" }}
            >
              {time}
            </p>
          </div>
          <div>
            <button onClick={startCountdown}>START!</button>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-4xl">Clicks:</p>
            <p className="text-4xl text-lime-600">{clickCounter}</p>
          </div>
          <button
            className="border-none rounded bg-lime-600"
            onClick={() => setClickCounter((prev) => prev + 1)}
          >
            CLICK ME!
          </button>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeSix;
