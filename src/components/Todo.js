import "../stylesheets/Todo.css";
import { BsFillTrashFill } from "react-icons/bs";

function Todo({ todo, onDeleteTodo }) {
  return (
    <div className="todo-container">
      <p className="todo">{todo.title}</p>
      <BsFillTrashFill
        className="delete"
        onClick={() => onDeleteTodo(todo.id)}
      />
    </div>
  );
}

export default Todo;
