import React from "react";
import { useState } from "react";
import "./TodoForm.css";

function TodoForm({ saveTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (value) => {
    return (e) => {
      e.preventDefault();
      // save item
      saveTodo(value);

      // clear field
      setValue("");
    };
  };

  return (
    <form onSubmit={handleSubmit(value)}>
      <input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        placeholder="add name..."
        onClick={() => console.log(value)}
      />
      <button>+</button>
    </form>
  );
}

export default TodoForm;
