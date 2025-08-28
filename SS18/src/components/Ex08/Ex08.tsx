import { useReducer, useEffect, useState } from "react";
import "../../style/Ex08.css";

type Todo = {
  id: number;
  text: string;
};

type Action =
  | { type: "ADD_TODO"; payload: string }
  | { type: "REMOVE_TODO"; payload: number }
  | { type: "INIT_TODOS"; payload: Todo[] };

const todoReducer = (state: Todo[], action: Action): Todo[] => {
  switch (action.type) {
    case "INIT_TODOS":
      return action.payload;
    case "ADD_TODO":
      if (!action.payload.trim()) return state;
      return [...state, { id: Date.now(), text: action.payload }];
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

function TodoAppLogic() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [task, setTask] = useState("");

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      dispatch({ type: "INIT_TODOS", payload: JSON.parse(savedTodos) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (!task.trim()) {
      alert("Nội dung công việc không được để trống!");
      return;
    }
    dispatch({ type: "ADD_TODO", payload: task });
    setTask("");
  };

  const removeTodo = (id: number) => {
    const confirmDelete = window.confirm("Bạn có chắc chắn muốn xóa công việc này?");
    if (confirmDelete) {
      dispatch({ type: "REMOVE_TODO", payload: id });
    }
  };

  return (
    <div className="todo-container">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Nhập tên công việc"
        className="todo-input"
      />
      <button onClick={addTodo} className="add-btn">Thêm</button>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <span>{todo.text}</span>
            <button
              onClick={() => removeTodo(todo.id)}
              className="delete-btn"
            >
              Xóa
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoAppLogic;