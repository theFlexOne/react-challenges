import { useState } from "react";

const ChallengeThree = () => {
  const [todo, setTodo] = useState("");
  const [todosList, setTodosList] = useState([]);

  // https://reactchallenges.live/challenge/3

  const addTodos = () => {
    if (todo.length === 0) return;
    setTodosList([...todosList, todo]);
    setTodo("");
  };

  const deleteTodo = (index) => {
    const newTodosList = todosList.filter((todo, i) => i !== index);
    setTodosList(newTodosList);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <label htmlFor="todo">Task:</label>
      <div>
        <input
          type="text"
          id="todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={addTodos}>Add</button>
      </div>
      <ol>
        {todosList.map((todo, i) => (
          <li id={i} key={todo}>
            {todo}
            <span
              style={{ marginLeft: ".5rem", cursor: "pointer" }}
              onClick={() => deleteTodo(i)}
            >
              🗑️
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ChallengeThree;
