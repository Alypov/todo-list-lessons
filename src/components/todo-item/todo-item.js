import React, { useEffect } from 'react';
import Button from '../button/button';
import './styles.css';

const TodoItem = ({ todoText, todoId, removeTodo, isDone, setIsDone }) => {

  useEffect(() => {
    console.log('isDone changes', isDone)
  }, [isDone])

  return (
    <div className="todo-wrapper">
      <div className="left-section">
        <input type="checkbox" onClick={() => setIsDone(!isDone)} ></input>
        <div className={isDone ? 'done' : ''}>{todoText}</div>
      </div>
      <Button text="Delete" onClick={() => removeTodo(todoId)} type="long" />
    </div>
  );
};

export default TodoItem;
