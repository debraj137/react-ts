import { useTodoStore } from "./useTodoStore";

function TodoList() {
  const { todos, toggleTodo, deleteTodo } = useTodoStore();

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span
            style={{
              textDecoration: todo.completed
                ? "line-through"
                : "none",
            }}
            onClick={() => toggleTodo(todo.id)}
          >
            {todo.text}
          </span>
          <button onClick={() => deleteTodo(todo.id)}>
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
