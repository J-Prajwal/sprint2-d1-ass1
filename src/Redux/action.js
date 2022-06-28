import axios from "axios";
import * as types from "./actionTypes";

export const getTodosApi = () => (dispatch) => {
  dispatch({ type: types.GET_TODOS_REQUEST });
  axios
    .get("/todos")
    .then((res) =>
      dispatch({ type: types.GET_TODOS_SUCCESS, payload: res.data })
    )
    .catch((err) => dispatch({ type: types.GET_TODOS_FAILURE }));
};

export const addTodoApi = (payload) => (dispatch) => {
  dispatch({ type: types.ADD_TODO_REQUEST });
  axios
    .post("/todos", payload)
    .then((r) => {
      dispatch({ type: types.ADD_TODO_SUCCESS, payload: r.data });
    })
    .catch((e) => {
      dispatch({ type: types.ADD_TODO_FAILURE });
    });
};
