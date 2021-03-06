import React from "react";
import { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import "./TodoItems.css";
import TodoForm from "./TodoForm";

function TodoItems({ priority, todoType, todos, saveTodo, deleteTodo }) {
  return (
    <div id="todo-box" className="col__content todo__box">
      <div className="container">
        <div className="box__list row">
          <div className="list__title col">
            {todos.map(({ id, name, priority }, index) => (
              <Draggable key={id} draggableId={id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    className={`list__item ${priority}`}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <p>{name}</p>
                    <span style={{ padding: "5px", backgroundColor: "#fff" }}>
                      {priority}
                    </span>
                    <button onClick={() => deleteTodo(index)}>-</button>
                  </div>
                )}
              </Draggable>
            ))}
          </div>
        </div>
      </div>
      <div className="box__form row">
        <div className="col">
          <TodoForm
            priority={priority}
            todoType={todoType}
            saveTodo={saveTodo}
          />
        </div>
      </div>
    </div>
  );
}

export default TodoItems;
