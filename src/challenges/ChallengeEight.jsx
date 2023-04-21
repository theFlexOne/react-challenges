import * as React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

// https://reactchallenges.live/challenge/7

/* Instructions :
 Once user enter details and clicks on submit button redirects/switch  him to /results page */

function Results() {
  return <div className="center">Thanks for submitting details...</div>;
}

function Form() {
  const [name, setName] = React.useState("");
  const [age, setAge] = React.useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    name === "name" ? setName(value) : setAge(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/results");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Your name
        <input
          type="text"
          value={name}
          onChange={handleChange}
          name="name"
          id="name"
        />
      </label>
      <label htmlFor="age">
        Favorite age
        <input
          type="text"
          value={age}
          onChange={handleChange}
          name="age"
          id="age"
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Form />} />
          <Route path="results" element={<Results />} />
        </Route>
      </Routes>
    </Router>
  );
}
