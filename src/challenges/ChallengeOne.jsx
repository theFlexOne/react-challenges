import { useState } from "react";

// https://reactchallenges.live/challenge/1

const ChallengeOne = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="App">
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "HIDE" : "SHOW"}
      </button>
      <h1 style={{ opacity: isOpen ? 1 : 0 }}>Welcome to React Challenges</h1>
    </div>
  );
};

export default ChallengeOne;
