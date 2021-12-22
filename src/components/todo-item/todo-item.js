
import Button from "../button/button";
import "./styles.css";

const TodoItem = ({ todoText, todoId, removeTodo}) => {

  return (
    <div className="todo-wrapper">
      <div className="left-section">
        <input type="checkbox" className="checkbox" value="true"></input>
        <div>{todoText}</div>
      </div>
      <Button text="Delete" onClick={() => removeTodo (todoId)} type="long"/>
    </div>
  );
};

export default TodoItem;
