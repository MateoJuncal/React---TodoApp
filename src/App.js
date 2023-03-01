import React from "react";
import "./App.css";
import Title from "./components/Title";
import Input from "./components/Input";
import TodoList from "./components/TodoList";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    const newTodo = {
      title: inputValue,
      id: uuidv4(),
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos([...todos].filter((todo) => todo.id !== id));
  };

  const clearInput = (e) => {
    e.target.value = "";
  };

  return (
    <div className="app">
      <Title />
      <div className="container">
        <Input
          onChange={(e) => setInputValue(e.target.value)}
          handleButton={addTodo}
          clearInput={clearInput}
        />
        <TodoList todos={todos} onDeleteTodo={deleteTodo} />
      </div>
    </div>
  );
}

export default App;
