import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addTodoApi,
  addTodoFailure,
  addTodoRequest,
  addTodoSuccess,
  getTodosSuccess,
} from "../Redux/action";

const TodosInput = ({getTodos}) => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    const payload = {
      title,
      status: false,
    };

    dispatch(addTodoApi(payload));
    
  };

  return (
    <div>
      <input
        type="text"
        placeholder="enter task here..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={() => handleAdd()}>Add</button>
    </div>
  );
};

export default TodosInput;
