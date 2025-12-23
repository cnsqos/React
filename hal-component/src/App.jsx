import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";
import TodoActions from "./components/TodoActions";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  // Todo 추가
  const addTodo = () => {
    if (input.trim() === "") return;

    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: input,
        completed: false,
      },
    ]);

    setInput("");
  };

  // 완료 토글
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  // 삭제
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // 완료 삭제
  const deleteCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  // 필터링
  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

 return (
  <div className="app-container">
    <div className="card">
      <h1>Todo List</h1>

      <TodoInput
        input={input}
        setInput={setInput}
        onAdd={addTodo}
      />

      <TodoFilter
        filter={filter}
        setFilter={setFilter}
      />

      <TodoList
        todos={filteredTodos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />

      <TodoActions onDeleteCompleted={deleteCompleted} />
    </div>
  </div>
  );
}



export default App;


