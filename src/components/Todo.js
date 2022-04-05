import React from "react";
import { CSSTransition } from "react-transition-group";
import { TransitionGroup } from "react-transition-group";
import "./Todo.css";

const Todo = ({ toggoletodo, task, completed, id }) => {
  return (
    <TransitionGroup>
      <CSSTransition timeout={500}>
        <li onClick={toggoletodo}>{task}</li>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default Todo;
