import * as types from "./actionType";

const initialState = {
  todo: [{ id: 1, task: "Wake Up", completed: false }],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.COMPLETE_TODO:
      const toggleTodos = state.todos.map((t) =>
        t.id === action.payload.id
          ? { ...action.payload, completed: !action.payload.completed }
          : t
      );
      return {
        ...state,
        todos: toggleTodos,
      };

    default:
      return state;
  }
};

export default todoReducer;
