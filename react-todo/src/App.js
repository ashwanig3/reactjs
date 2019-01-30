import React, { useState } from 'react';

function TodoForm() {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const newVal = e.target.value;
    setValue(newVal)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!value) return;            
  }

  return(
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Add todo" onChange={handleChange} />
        <button>Add</button>
    </form>
  )
}

function App() {
  const [todos, setTodos ] = useState(["ashwani", "praveen", "komal", "madhusudan"]);

  const addTodo = (val) => {
    const newTodo = [...todos, val]
    setTodos(newTodo)
    console.log(todos, "called")
  }

  return(
    <div>
      <TodoForm addTodo={addTodo}/>
    </div>
  );
}

export default App;

