import React, { useState } from "react";
import { ImBin } from "react-icons/im";
import "./TodoCardList.css";
import Todoadd from "./TodoCard_Adder";

const TodoCardList = () => {
  const [data, setData] = useState([]);

  const handleData = (senddata) => {
    setData([...data, senddata]);
  };
  const handle_Delete = (id) => {
    const newData = data.filter((task) => task.id !== id);
    setData(newData);
  };

  return (
    <div className="todo_list">
      <h2>WORK LIST</h2>

      <Todoadd sendata={handleData} />
      {data.map((todos) => (
        <div className="work_preview" key={todos.id}>
          <p>Work Name is {todos.title}</p>
          <p>description is {todos.description}</p>
          <ImBin onClick={() => handle_Delete(todos.id)} />
        </div>
      ))}
    </div>
  );
};

export default TodoCardList;
