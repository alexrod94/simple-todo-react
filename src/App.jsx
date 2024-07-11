import { useState } from "react";
import Todo from "./components/Todo";
import SweetAlert2 from "react-sweetalert2";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Task 1",
      completed: false,
    },
    {
      id: 2,
      title: "Task 2",
      completed: false,
    },
    {
      id: 3,
      title: "Task 3",
      completed: false,
    },
  ]);
  const [swalProps, setSwalProps] = useState({});
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (title.length < 6) {
      setSwalProps({
        show: true,
        title: "You did something wrong",
        text: "The title is too short",
        icon: "error",
      });
      return;
    }

    const newTodo = {
      id: todos.length + 1,
      title,
      completed,
    };
    setTodos([...todos, newTodo]);
    setSwalProps({
      show: true,
      title: "New todo",
      text: "Todo created successfully",
      icon: "success",
    });

    setTitle("");
    setCompleted(false);
  }

  const handleCompleted = (e) => {
    setCompleted(e.target.checked);
  };

  return (
    <>
      <h1>Our First Todo</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="title">
          Title
          <input
            required
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <p className="error">{errorMessage}</p>
        </label>
        <label htmlFor="completed">
          Completed
          <input
            type="checkbox"
            id="Completed"
            checked={completed}
            onChange={handleCompleted}
          />
        </label>
        <button type="submit">Create new todo</button>
      </form>

      <SweetAlert2 {...swalProps} />
      {todos.map((todo) => {
        return <Todo todo={todo} key={todo.id} />;
      })}
    </>
  );
}

export default App;
