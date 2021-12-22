import React, { useContext } from "react";
import Button from "../button/button";
import "./styles.css";
import Context from "../context/context";

const TodoItem = ({ todoText, todo}) => {
  const { removeTodo } = useContext(Context);
  return (
    <div className="todo-wrapper">
      <div className="left-section">
        <input type="checkbox" className="checkbox" value="true"></input>
        <div>{todoText}</div>
      </div>
      <Button text="Delete" onClick={() => removeTodo(todo.id)} type="long"/>
    </div>
  );
};

export default TodoItem;
