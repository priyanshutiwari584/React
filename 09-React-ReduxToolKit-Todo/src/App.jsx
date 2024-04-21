import { useSelector } from "react-redux";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import { useEffect } from "react";

function App() {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <>
      <h1 className="text-3xl font-semibold">React Redux ToolKit Todo</h1>
      <AddTodo />
      <div className="flex flex-wrap gap-y-3 my-[2rem]">
        {/*Loop and Add TodoItem here */}
        {todos.map((todo) => (
          <div key={todo.id} className="w-full">
            <TodoItem todo={todo} />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
