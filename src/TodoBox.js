import React from "react";
import { useState } from "react";
import "./TodoBox.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function TodoBox() {
  const [todos, setTodos] = useState([]);

  const saveTodo = (text) => {
    const trimmed = text.trim();

    if (trimmed.length > 0) {
      setTodos([...todos, trimmed]);
      console.log(todos);
    }
  };

  const deleteTodo = (todoIndex) => {
    const survivingTodos = todos.filter((_, index) => index !== todoIndex);
    setTodos(survivingTodos);
  };

  return (
    <div id="todo-box" className="todo__box">
      <div className="container">
        <div className="box__list row">
          <div className="col">
            <TodoList todos={todos} deleteTodo={deleteTodo} />
          </div>
        </div>
        <div className="box__form row">
          <div className="col">
            <TodoForm saveTodo={saveTodo} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoBox;
