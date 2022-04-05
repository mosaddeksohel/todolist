import React from "react";
import { CSSTransition } from "react-transition-group";
import { TransitionGroup } from "react-transition-group";
import "./Todo.css";

const Todo = ({ toggoletodo, task, completed, id, removeTodo }) => {
  return (
    <TransitionGroup className={completed ? "Todo completed" : "Todo"}>
      <CSSTransition key="normal" timeout={500} classNames="task-text">
        <li className="Todo-task" onClick={toggoletodo}>
          {task}
        </li>
      </CSSTransition>
      <div className="Todo-buttons">
        <button onClick={removeTodo}>
          <i className="fas fa-trash"></i>{" "}
        </button>
      </div>
    </TransitionGroup>
  );
};

export default Todo;
