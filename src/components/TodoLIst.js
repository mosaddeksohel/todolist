import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { TransitionGroup } from "react-transition-group";
import { completeTodo, addTodo, removeTodo, updateTodo } from "../redux/action";
import Todo from "./Todo";
import Todoinput from "./Todoinput";
import "./TodoList.css";

const TodoLIst = () => {
  const state = useSelector((state) => ({ ...state.todos }));
  const dispatch = useDispatch();

  const create = (newTodo) => {
    dispatch(addTodo(newTodo));
  };

  const update = (id, updatedTask) => {
    dispatch(updateTodo({ id, updatedTask }));
  };

  return (
    <div className="TodoList">
      <h2>Todo App by Redux</h2>
      <Todoinput createdTodo={create} />
      <ul className="todo-list">
        <TransitionGroup>
          {state.todos &&
            state.todos.map((todo) => {
              return (
                <CSSTransition key={todo.id} classNames="todo">
                  <Todo
                    key={todo.id}
                    id={todo.id}
                    task={todo.task}
                    completed={todo.completed}
                    toggoletodo={() => dispatch(completeTodo(todo))}
                    removeTodo={() => dispatch(removeTodo(todo))}
                    updateTodo={update}
                  ></Todo>
                </CSSTransition>
              );
            })}
        </TransitionGroup>
      </ul>
    </div>
  );
};

export default TodoLIst;
