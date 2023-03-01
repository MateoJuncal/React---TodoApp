import "../stylesheets/TodoList.css";
import Todo from "./Todo";

const TodoList = ({ todos, onDeleteTodo }) => {
  const deleteTodo = (index) => {
    console.log(index);
  };

  return (
    <div className="todo-list">
      {todos.map((todo) => {
        return <Todo todo={todo} key={todo.id} onDeleteTodo={onDeleteTodo} />;
      })}
    </div>
  );
};

export default TodoList;
