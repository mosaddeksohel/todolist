import React, { useState } from "react";
import "./TodoInput.css";

const Todoinput = ({ createdTodo }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createdTodo(task);
    setTask("");
  };

  return (
    <div>
      <form className="TodoInput" onSubmit={handleSubmit}>
        <input
          type="text"
          name="Enter Your Choice"
          id="task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button>Add Todo</button>
      </form>
    </div>
  );
};

export default Todoinput;
