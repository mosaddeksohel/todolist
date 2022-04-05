import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { TransitionGroup } from "react-transition-group";
import "./Todo.css";

const Todo = ({ toggoletodo, task, completed, id, removeTodo, updateTodo }) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const [update, setUpdate] = useState(task);

  const handleUpdate = (e) => {
    e.preventDefault();
    updateTodo(id, update);
    setIsUpdate(false);
  };

  return (
    <TransitionGroup className={completed ? "Todo completed" : "Todo"}>
      {isUpdate ? (
        <CSSTransition classNames="form" timeout={500} key="edit">
          <form className="Todo-edit-form" onSubmit={handleUpdate}>
            <input
              type="text"
              value={update}
              onChange={(e) => setUpdate(e.target.value)}
            />
            <button>Add Todo</button>
          </form>
        </CSSTransition>
      ) : (
        <CSSTransition key="normal" timeout={500} classNames="task-text">
          <li className="Todo-task" onClick={toggoletodo}>
            {task}
          </li>
        </CSSTransition>
      )}
      ;
      <div className="Todo-buttons">
        <button onClick={() => setIsUpdate(true)}>
          <i className="fas fa-pen"></i>
        </button>
        <button onClick={removeTodo}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </TransitionGroup>
  );
};

export default Todo;
