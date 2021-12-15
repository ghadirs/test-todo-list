import TodoBox from "./TodoBox";
import "./App.css";

function App() {
  return (
    <div className="root-container container">
      <div className="row">
        <div className="todo-col col">
          <div className="box__title row">
            <div className="col">
              <h4>Todo</h4>
            </div>
            <TodoBox />
          </div>
          <div className="doing-col col">
          <div className="box__title row">
            <div className="col">
              <h4>Todo</h4>
            <TodoBox />
          </div>
          <div className="done-col col">
          <div className="box__title row">
            <div className="col">
              <h4>Todo</h4>
            <TodoBox />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
