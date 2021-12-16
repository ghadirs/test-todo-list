import React from "react";
import { useState } from "react";
// import { v1 } from "uuid";
import "./TodoForm.css";

function TodoForm({ todoType, saveTodo, itemType }) {
  const [value, setValue] = useState("");
  const [priority, setPriority] = useState("");

  const handleSubmit = (value) => {
    return (e) => {
      e.preventDefault();

      const final = {
        name: value,
        type: todoType,
        id: `${value + Math.random()}`,
        priority,
      };
      console.log(priority);

      // save item
      saveTodo(final);

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
      />
      <select
        name="priority"
        id="priority-select"
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="normal">Normal</option>
        <option value="high">High</option>
        <option value="low">Low</option>
      </select>
      <button>+</button>
    </form>
  );
}

export default TodoForm;
