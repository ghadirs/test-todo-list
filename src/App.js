import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import TodoItems from "./TodoItems";
import "./App.css";

// const MyWidget = ({ name }) => <div>{name}</div>;
function App() {
  const [Items, updateItems] = useState([]);
  let todoItems = [];
  let doneItems = [];
  const items = Array.from(Items);

  const saveTodo = (obj) => {
    const trimmed = obj.name.trim();

    if (trimmed.length > 0) {
      updateItems([...Items, obj]);
    }
  };

  const deleteTodo = (itemIndex) => {
    const survivingTodos = Items.filter((_, index) => index !== itemIndex);
    updateItems(survivingTodos);
  };

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    console.log("items", items);
    const [reorderedItem] = items.splice(result.source.index, 1);
    const destItemReorder = () =>
      items.splice(result.destination.index, 0, reorderedItem);
    destItemReorder();
    updateItems(items);
  }
  return (
    <div className="root-container container">
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <div className="row">
          <div className="todo-col col">
            <div className="row">
              <div className="col">
                <h4 className="col__title row">Todo</h4>
              </div>
              <Droppable droppableId="todo-col">
                {(provided) => (
                  <div className="col__content row" ref={provided.innerRef}>
                    <div className="col">
                      <TodoItems
                        todos={Items}
                        todoType={"todo"}
                        deleteTodo={deleteTodo}
                        saveTodo={saveTodo}
                      />
                    </div>
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          </div>

          <div className="doin-col col">
            <div className="row">
              <div className="col">
                <h4 className="col__title">Doing </h4>
              </div>
              <Droppable droppableId="doing-col">
                {(provided) => (
                  <div className="col__content row" ref={provided.innerRef}>
                    <div className="col">
                      <TodoItems
                        todos={Items}
                        todoType={"doing"}
                        deleteTodo={deleteTodo}
                        saveTodo={saveTodo}
                      />
                    </div>
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          </div>
        </div>
      </DragDropContext>
    </div>
  );
}

export default App;
