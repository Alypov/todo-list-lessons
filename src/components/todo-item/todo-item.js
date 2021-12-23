
import Button from "../button/button";
import "./styles.css";

const TodoItem = ({ todoText, todoId, removeTodo, todo}) => {
const classes = []
if (todoId.completed) {
  classes.push('done')
}
  return (
    <div className="todo-wrapper">
      <div className="left-section">
        <input type="checkbox" className={classes.join(' ')} value="true"></input>
        <div>{todoText}</div>
      </div>
      <Button text="Delete" onClick={() => removeTodo (todoId)} type="long"/>
    </div>
  );
};

export default TodoItem;
