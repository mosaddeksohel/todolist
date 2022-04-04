import * as types from "./actionType";

export const completeTodo = (todo) => ({
  type: types.COMPLETE_TODO,
  payload: todo,
});
