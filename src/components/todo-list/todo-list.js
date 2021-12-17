import React, { useState } from 'react';
import Button from '../button/button';
import TodoItem from '../todo-item/todo-item';
import './styles.css';

const todos = [
  { id: 1, text: 'Todo1', isDone: false },
  { id: 2, text: 'Todo2', isDone: false },
  { id: 3, text: 'Todo3', isDone: false },
];

const TodoList = () => {
  const [inputValue, setInputValue] = useState('');

  console.log('imput ->>', inputValue);

  const inputOnChangeHanlder = (e) => {
    setInputValue(e.target.value);
  };

  // Clicking at ADD button I need to save todo obj to localStorage

  // {id: '1' text: 'inputValue', isDone: false}

  return (
    <div className="main-wrapper">
      <div className="todo-items-wrapper">
        <div className="count-wrapper">
          <div className="total-count">4 Tasks</div>
          <div className="remain-count">4 Remain</div>
        </div>
        {todos.map((item) => (
          <TodoItem key={item.id} todoText={item.text} />
        ))}

        <div className="input-section-wrapper">
          <input className='input' type="text" placeholder="Add Todo" onChange={(event) => inputOnChangeHanlder(event)} />
          <Button type="short" text="Add" />
        </div>
      </div>
    </div>
  );
};

export default TodoList;
