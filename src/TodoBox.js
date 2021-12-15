import React from "react";
import "./TodoBox.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function TodoBox() {
  return (
    <div id="todo-box" className="todo__box">
      <div className="container">
        <div className="row">
          <div className="box__title col">
            <h1>Todo</h1>
          </div>
          <div className="box__form col">
            <TodoForm />
          </div>
          <div className="box__list col">
            <TodoList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoBox;
