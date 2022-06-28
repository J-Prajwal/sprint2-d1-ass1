import axios from "axios";
import React, { useEffect } from "react";
import TodosInput from "../Components/TodosInput";
import { useDispatch, useSelector } from "react-redux";
import {
  getTodosApi,
  getTodosFailure,
  getTodosRequest,
  getTodosSuccess,
} from "../Redux/action";

const Todos = () => {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state);

  useEffect(() => {
    if (todos?.length === 0) {
      dispatch(getTodosApi());
    }
  }, []);

  return (
    <div>
      <h1>Todos App</h1>
      <TodosInput />
      <h1 style={{ color: "red" }}>Your Tasks</h1>
      {todos?.map((item) => (
        <h5 key={item.id}>{item.title}</h5>
      ))}
    </div>
  );
};

export default Todos;
