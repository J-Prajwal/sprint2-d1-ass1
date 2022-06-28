import {
  ADD_TODO_FAILURE,
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCESS,
  GET_TODOS_FAILURE,
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
} from "./actionTypes";

let initialState = {
  todos: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TODOS_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case GET_TODOS_SUCCESS: {
      return {
        ...state,
        todos: payload,
      };
    }
    case GET_TODOS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case ADD_TODO_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case ADD_TODO_SUCCESS: {
      return {
        ...state,
        todos: [...state.todos, payload],
      };
    }
    case ADD_TODO_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    default:
      return state;
  }
};
