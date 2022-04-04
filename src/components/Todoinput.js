import React, { useState } from "react";

const Todoinput = ({ createdTodo }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createdTodo(task);
    setTask("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name=""
          id=""
          onChange={(e) => setTask(e.target.value)}
        />
        <button>Add Todo</button>
      </form>
    </div>
  );
};

export default Todoinput;
