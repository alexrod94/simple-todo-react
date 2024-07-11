import React from "react";

function Todo({ todo }) {
  return (
    <div>
      <h2>{todo.title}</h2>
      <p>{todo.completed ? "Completed" : "Pending"}</p>
    </div>
  );
}

export default Todo;
