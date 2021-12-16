import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import TodoItems from "./TodoItems";
import "./App.css";

// const MyWidget = ({ name }) => <div>{name}</div>;
function App() {
  const [Items, updateItems] = useState([]);

  // // copied code
  // /*
  //  * Moves an item from one list to another list.
  //  */

  // const move = (source, destination, droppableSource, droppableDestination) => {
  //   const sourceClone = Array.from(source);
  //   const destClone = Array.from(destination);
  //   const [removed] = sourceClone.splice(droppableSource.index, 1);

  //   destClone.splice(droppableDestination.index, 0, removed);

  //   const result = {};
  //   result[droppableSource.droppableId] = sourceClone;
  //   result[droppableDestination.droppableId] = destClone;

  //   return result;
  // };

  // // fake data generator
  // const getItems = (count, offset = 0) =>
  //   Array.from({ length: count }, (v, k) => k).map((k) => ({
  //     id: `item-${k + offset}-${new Date().getTime()}`,
  //     content: `item ${k + offset}`,
  //   }));

  // const reorder = (list, startIndex, endIndex) => {
  //   const result = Array.from(list);
  //   const [removed] = result.splice(startIndex, 1);
  //   result.splice(endIndex, 0, removed);

  //   return result;
  // };

  // function onDragEnd(result) {
  //   const { source, destination } = result;

  //   // dropped outside the list
  //   if (!destination) {
  //     return;
  //   }
  //   const sInd = +source.droppableId;
  //   const dInd = +destination.droppableId;

  //   if (sInd === dInd) {
  //     const items = reorder(state[sInd], source.index, destination.index);
  //     const newState = [...state];
  //     newState[sInd] = items;
  //     setState(newState);
  //   } else {
  //     const result = move(state[sInd], state[dInd], source, destination);
  //     const newState = [...state];
  //     newState[sInd] = result[sInd];
  //     newState[dInd] = result[dInd];

  //     setState(newState.filter((group) => group.length));
  //   }
  // }

  // const [state, setState] = useState([getItems(10)]);

  //
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
                <h4 className="col__title">Todo</h4>
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
