import * as React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// https://reactchallenges.live/challenge/10

/* Instruction: 
Implment a catch route for all routes which are not under defined routes scope*/

const Home = () => <h1>Home</h1>;
const Settings = () => <h1>Settings</h1>;

export default function ChallengeTen() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route
          path="*"
          element={
            <>
              <h2 className="text-5xl">404</h2>
            </>
          }
        />
      </Routes>
    </Router>
  );
}
