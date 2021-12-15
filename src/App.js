import TodoBox from "./TodoBox";
import "./App.css";

function App() {
  return (
    <div className="root-container container">
      <div className="row">
        <div className="todo-col col">
          <TodoBox />
        </div>
        <div className="doing-col col">
          <TodoBox />
        </div>
        <div className="done-col col">
          <TodoBox />
        </div>
      </div>
    </div>
  );
}

export default App;
