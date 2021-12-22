import React, { useState, useEffect } from "react";
import Button from "../button/button";
import TodoItem from "../todo-item/todo-item";
import "./styles.css";
import Context from "../context/context";

const TodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [currentId, setCurrentId] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (!JSON.parse(localStorage.getItem("todos"))) {
      localStorage.setItem("todos", "[]");
    }
    setCurrentId(JSON.parse(localStorage.getItem("todos")).length);
    setTodos(JSON.parse(localStorage.getItem("todos")));
  }, []);

  useEffect(() => {
    setCurrentId(JSON.parse(localStorage.getItem("todos")).length);
  }, [todos]);

  localStorage.setItem("todos", JSON.stringify(todos));

  const inputOnChangeHanlder = (e) => {
    setInputValue(e.target.value);
  };

  const addTodoOnClickHandler = () => {
    setTodos((prev) => [
      ...prev,
      { id: currentId, text: inputValue, isDone: false },
    ]);
  };

  // Implenent remove todo functionality.
  // After adding new todo input field must be cleaned.
  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="main-wrapper">
        <div className="todo-items-wrapper">
          <div className="count-wrapper">
            <div className="total-count">4 Tasks</div>
            <div className="remain-count">4 Remain</div>
          </div>
          {todos.map((item, index) => (
            <TodoItem key={index} isDone={item.isDone} todoText={item.text} />
          ))}

          <div className="input-section-wrapper">
            <input
              className="input"
              type="text"
              placeholder="Add Todo"
              onChange={(event) => inputOnChangeHanlder(event)}
            />
            <Button type="short" text="Add" onClick={addTodoOnClickHandler} />
          </div>
        </div>
      </div>
    </Context.Provider>
  );
};

export default TodoList;
