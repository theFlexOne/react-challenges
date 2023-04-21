import React, { useEffect, useState } from "react";

// https://reactchallenges.live/challenge/22

export default function ChallengeNineteen() {
  const [value, setValue] = useState("");
  const [count, setCount] = useState(-1);

  useEffect(() => setCount((prev) => prev + 1), [value]);

  const onChange = ({ target }) => setValue(target.value);

  return (
    <div>
      <input type="text" value={value} onChange={onChange} />
      <div>Number of changes: {count}</div>
    </div>
  );
}
