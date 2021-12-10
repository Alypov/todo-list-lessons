import React, { useState } from "react";
import Button from "../button/button";
import TodoItem from "../todo-item/todo-item";
import "./styles.css";

const todos = [
  { id: 1, text: "Todo1", isDone: false },
  { id: 2, text: "Todo2", isDone: false },
  { id: 3, text: "Todo3", isDone: false },
];

// 1. Save todos in localStorage
// 2. Hitting 'save' button trigger adding new todo to todo's array.
// 3. Get todos from localStorage
// 4. Make styles according to mockup.

// * counter - increment, decrement, reset

const TodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [counter, setCounter] = useState({ count: 0, step: 5 });

  const onClickHanlder = () => {
    setCounter((prev) => ({
      ...prev,
      count: prev.count + prev.step,
    }));
  };

  const inputOnChangeHanlder = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="main-wrapper">

       <div onClick={onClickHanlder} style={{ border: "2px solid black" }}>
      <div className="total-count"></div>
      <div className="remain-count"></div>
      {/* <div onClick={onClickHanlder} style={{ border: "2px solid black" }}>
        CLICK
      </div>
      <div>{counter.count}</div> */}

      <div className="todo-items-wrapper">
        <div className="total-count">4 Tasks</div>
        <div className="remain-count">4 Remain</div>
        {todos.map((item) => (
          <TodoItem key={item.id} todoText={item.text} />
        ))}
        <input type="text" onChange={(event) => inputOnChangeHanlder(event)} />
        <Button />
      </div>
    </div>
  );
};

export default TodoList;
