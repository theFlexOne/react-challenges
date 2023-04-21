import { useMemo, useState } from "react";

/* Credits : dmitripavlutin 

Instructions: 
Every time you change the input value, the factorial is calculated factorialOf(n) and 'factorialOf(n) called!' is logged to console.
On the other side, each time you click Re-render button, inc state value is updated. 
Updating inc state value triggers <CalculateFactorial /> re-rendering. 
But, as a secondary effect, during re-rendering the factorial is recalculated again — 'factorialOf(n) called!' is logged to console
See if there is any optimized way to fix it.

*/

export default function ChallengeEighteen() {
  const [number, setNumber] = useState(0);
  const [inc, setInc] = useState(0);

  const factorial = useMemo(() => factorialOf(number), [number]);

  const onChange = (event) => {
    setNumber(Number(event.target.value));
  };
  const onClick = () => setInc((i) => i + 1);

  return (
    <div>
      Factorial of
      <input type="number" value={number} onChange={onChange} />
      is {factorial}
      <button onClick={onClick}>Re-render</button>
    </div>
  );
}

function factorialOf(n) {
  console.log("factorialOf(n) called!");
  return n <= 0 ? 1 : n * factorialOf(n - 1);
}
