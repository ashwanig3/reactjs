import React, { useState } from "react";

function TodoForm(props) {
  const [value, setValue] = useState("");

  const handleChange = e => {
    const newVal = e.target.value;
    setValue(newVal);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    props.addTodo(value);
    document.querySelector("input").value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Add todo" onChange={handleChange} />
      <button>Add</button>
    </form>
  );
}

function App() {
  const [todos, setTodos] = useState([
    "ashwani",
    "praveen",
    "komal",
    "madhusudan"
  ]);

  const addTodo = val => {
    const newTodo = [...todos, val];
    setTodos(newTodo);
  };

  const handleDelete = id => {
    todos.splice(id, 1);
    setTodos([...todos]);
  };

  return (
    <div className="container">
      <TodoForm addTodo={addTodo} />
      <ol>
        {todos &&
          todos.map((todo, i) => (
            <li key={i}>
              <span>{todo}</span>
              <button onClick={() => handleDelete(i)}>delete</button>
            </li>
          ))}
      </ol>
    </div>
  );
}

export default App;
