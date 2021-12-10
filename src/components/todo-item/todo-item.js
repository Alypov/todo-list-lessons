import React from 'react';
import Button from '../button/button';
import './styles.css';

const TodoItem = ({ todoText }) => {
  return (
    <div className="todo-wrapper">
      <div className='left-section'> 

      <input type="checkbox" className="" value="true"></input>
      <div>{todoText}</div>
      </div>
      <Button text='Delete' type='long'/>
    </div>
  );
};

export default TodoItem;
