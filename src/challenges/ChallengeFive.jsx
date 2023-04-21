import { useState } from "react";

// https://reactchallenges.live/challenge/5

const ChallengeFive = () => {
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");

  const [submitedFormData, setSubmitedFormData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitedFormData({ username, fullName, age });
  };

  return (
    <div className="App">
      <h1 className="mb-4">Form</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex gap-10 w-full">
          <label htmlFor="username">Username:</label>
          <input
            className="ml-auto"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
          />
        </div>
        <div className="flex gap-10">
          <label htmlFor="fullName">Full Name:</label>
          <input
            className="ml-auto"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            type="text"
          />
        </div>
        <div className="flex gap-10">
          <label htmlFor="age">Age:</label>
          <input
            className="ml-auto"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            type="number"
          />
        </div>

        <button className="border border-neutral-600" type="submit">
          Submit
        </button>
      </form>
      {submitedFormData && (
        <div className="mt-10">
          <h2 className="text-3xl pb-2 mb-2 border-b">Submitted Data:</h2>
          <p>Username: {submitedFormData.username}</p>
          <p>Full Name: {submitedFormData.fullName}</p>
          <p>Age: {submitedFormData.age}</p>
        </div>
      )}
    </div>
  );
};

export default ChallengeFive;
