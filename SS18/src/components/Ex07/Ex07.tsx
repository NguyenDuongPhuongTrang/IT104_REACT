import { useReducer, useEffect,type FormEvent,type ChangeEvent } from "react";

type Task = {
  id: string;
  title: string;
};

type State = {
  input: string;
  tasks: Task[];
};

type Action =
  | { type: "SET_INPUT"; payload: string }
  | { type: "ADD_TASK" }
  | { type: "DELETE_TASK"; payload: string };

const STORAGE_KEY = "tasks";

const initialState: State = {
  input: "",
  tasks: [],
};

function init(): State {
  const raw = localStorage.getItem(STORAGE_KEY);
  const tasks = raw ? JSON.parse(raw) : [];
  return { input: "", tasks };
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_INPUT":
      return { ...state, input: action.payload };

    case "ADD_TASK":
      if (!state.input.trim()) return state;
      const newTask: Task = {
        id: Date.now().toString(),
        title: state.input.trim(),
      };
      return { input: "", tasks: [newTask, ...state.tasks] };

    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState, init);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.tasks));
  }, [state.tasks]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    dispatch({ type: "ADD_TASK" });
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    dispatch({ type: "SET_INPUT", payload: e.target.value });
  }

  function handleDelete(id: string) {
    dispatch({ type: "DELETE_TASK", payload: id });
  }

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h2 style={styles.title}>Quản lý công việc</h2>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            value={state.input}
            onChange={handleChange}
            placeholder="Nhập tên công việc"
            style={styles.input}
          />
          <button type="submit" style={styles.addBtn}>
            Thêm
          </button>
        </form>

        <ul style={styles.list}>
          {state.tasks.map((task) => (
            <li key={task.id} style={styles.item}>
              <span>{task.title}</span>
              <button
                onClick={() => handleDelete(task.id)}
                style={styles.deleteBtn}
              >
                Xóa
              </button>
            </li>
          ))}
          {state.tasks.length === 0 && (
            <li style={styles.empty}>Chưa có công việc nào</li>
          )}
        </ul>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "#f3f4f6",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  container: {
    width: 400,
    background: "#fff",
    borderRadius: 12,
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    padding: 20,
  },
  title: {
    marginBottom: 16,
    textAlign: "center",
  },
  form: {
    display: "flex",
    gap: 8,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    padding: "10px 12px",
    borderRadius: 8,
    border: "1px solid #ccc",
  },
  addBtn: {
    padding: "10px 14px",
    borderRadius: 8,
    backgroundColor: "#2563eb",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "grid",
    gap: 8,
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 12px",
    border: "1px solid #e5e7eb",
    borderRadius: 8,
  },
  deleteBtn: {
    padding: "6px 10px",
    borderRadius: 8,
    backgroundColor: "#ef4444",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
  empty: {
    textAlign: "center",
    color: "#6b7280",
    padding: "12px 0",
  },
};

export default App;