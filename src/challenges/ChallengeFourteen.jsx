import React, { useState, useContext } from "react";

// https://reactchallenges.live/challenge/18

const ThemeContext = React.createContext("dark");

function Comp1() {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <h1>Current Theme: {theme}</h1>
    </div>
  );
}

function Comp2() {
  const { setTheme } = useContext(ThemeContext);
  return (
    <div>
      <button onClick={() => setTheme("light")}>Light</button>
      <button onClick={() => setTheme("dark")}>Dark</button>
    </div>
  );
}

export default function ChallengeFourteen() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }} className="App">
      <Comp1 />
      <Comp2 />
    </ThemeContext.Provider>
  );
}
