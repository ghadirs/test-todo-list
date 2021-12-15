import React from "react";
import "./TodoList.css";

function TodoList({ todos, deleteTodo }) {
  return (
    <div className="title">
      {todos.map((v, index) => (
        <div className="list__item" key={index.toString()}>
          <p>{v}</p>
          <button onClick={() => deleteTodo(index)}>-</button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
