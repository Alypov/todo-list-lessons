import React from 'react';
import Button from '../button/button';
// import './styles.css';

const TodoItem = ({ todoText }) => {
  return (
    <div className="todo-items-wrapper">
      <input type="checkbox" className="" value="true"></input>
      <div>{todoText}</div>
      <Button />
    </div>
  );
};

export default TodoItem;
