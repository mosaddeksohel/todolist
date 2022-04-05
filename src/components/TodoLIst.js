import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { TransitionGroup } from "react-transition-group";
import { completeTodo } from "../redux/action";
import Todo from "./Todo";
import Todoinput from "./Todoinput";
import "./TodoList.css";

const TodoLIst = () => {
  const state = useSelector((state) => ({ ...state.todos }));
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Todo App with react redux</h2>
      <Todoinput />
      <TransitionGroup>
        {state.todos &&
          state.todos.map((todo) => {
            return (
              <CSSTransition key={todo.id}>
                <Todo
                  key={todo.id}
                  id={todo.id}
                  task={todo.task}
                  completed={todo.completed}
                  toggoletodo={() => dispatch(completeTodo(todo))}
                ></Todo>
              </CSSTransition>
            );
          })}
      </TransitionGroup>
    </div>
  );
};

export default TodoLIst;
