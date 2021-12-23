
import Button from "../button/button";
import "./styles.css";
import cn from 'classnames';

const TodoItem = ({ todoText, todoId, removeTodo, onClick, type}) => {

  return (
    <div className="todo-wrapper">
      <div className="left-section">
        <input type="checkbox" onClick={onClick} className={cn('done',type )} value="true"></input>
        <div>{todoText}</div>
      </div>
      <Button text="Delete" onClick={() => removeTodo (todoId)} type="long"/>
    </div>
  );
};

export default TodoItem;
