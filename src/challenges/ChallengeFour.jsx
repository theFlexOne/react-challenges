import { useState } from "react";

// https://reactchallenges.live/challenge/4

const ChallengeFour = () => {
  const [value, setValue] = useState(0);

  console.log(value);

  const handleProgressChange = (e) => {
    setValue(e.target.value / 100);
  };

  return (
    <>
      <div className="flex flex-col items-center gap-8">
        <h1>Progress bar</h1>
        <ProgressBar width={value} />
        <form>
          <input
            type="number"
            min="0"
            max="100"
            value={Math.round(value * 100)}
            onChange={handleProgressChange}
          />
        </form>
      </div>
    </>
  );
};

const ProgressBar = ({ width }) => {
  console.log(width);
  width &&= Math.round(width * 100) + "%";
  console.log(width);
  return (
    <div className="relative flex items-center h-2 w-48 bg-neutral-600 rounded-full">
      <div
        style={{ width }}
        className={`h-[120%] flex justify-center items-center bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full`}
      ></div>
      <span className="absolute inset-x-0 text-3xs">{width}</span>
    </div>
  );
};

export default ChallengeFour;
