import React from 'react';
import Button from '../button/button';
import TodoItem from '../todo-item/todo-item';
import './styles.css';

const todos = [
  { id: 1, text: 'Todo1', isDone: false },
  { id: 2, text: 'Todo2', isDone: false },
  { id: 3, text: 'Todo3', isDone: false },
];

//useState

const TodoList = () => {
  return (
    <div className="main-wrapper">
      <div className="total-count"></div>
      <div className="remain-count"></div>
      <input />
      <Button />
      <div className="todo-items-wrapper">
        {todos.map((item) => (
          <TodoItem key={item.id} todoText={item.text} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
