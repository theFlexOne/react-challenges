import React, { useState, useCallback } from "react";

// https://reactchallenges.live/challenge/20

/* Instructions 
Currently when a user clicks on inc and dec the unnecessary functions are called there by performance is getting effected. See if you can fix the uncessary function calls 
*/
const functionsCounter = new Set();

const howManyFunctionCalled = (increment, decrement, incrementOtherCounter) => {
  functionsCounter.add(increment);
  functionsCounter.add(decrement);
  functionsCounter.add(incrementOtherCounter);
  console.log(functionsCounter.size);
};

export default function ChallengeSeventeen() {
  const [counter, setCounter] = useState(0);
  const [otherCounter, setOtherCounter] = useState(0);

  const increment = useCallback(() => {
    setCounter((prev) => prev + 1);
    howManyFunctionCalled(increment, decrement, incrementOtherCounter);
  }, [counter]);

  const decrement = useCallback(() => {
    setCounter((prev) => prev - 1);
    howManyFunctionCalled(increment, decrement, incrementOtherCounter);
  }, [counter]);

  const incrementOtherCounter = useCallback(() => {
    setOtherCounter((prev) => prev + 1);
    howManyFunctionCalled(increment, decrement, incrementOtherCounter);
  }, [otherCounter]);

  return (
    <div className="App">
      <h2 className="text-2xl text-lime-600">
        This Challenge Makes No Fucking Sense!!!!
      </h2>
      <h1>
        <code>useCallback()</code>
      </h1>
      <h3>Counter Value:{counter}</h3>
      <h3>Other CounterValue:{otherCounter}</h3>
      <h3>{`No of function calls: ${functionsCounter.size}`}</h3>
      <button onClick={decrement}>Decrement -</button>
      <button onClick={increment}>Increment +</button>
      <button onClick={incrementOtherCounter}>IncrementOtherCounter +</button>
    </div>
  );
}
