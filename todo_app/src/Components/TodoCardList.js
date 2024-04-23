import React, { useState } from "react";
import { ImBin } from "react-icons/im";
import "./TodoCardList.css";
import Todoadd from "./TodoCard_Adder";
import WorkingTasks from "./WorkingTask";
import { IoCheckbox } from "react-icons/io5";

const TodoCardList = () => {
  const [data, setData] = useState([]);
  const [work_list, set_work_list] = useState([]);

  const handleData = (senddata) => {
    setData([...data, senddata]);
  };
  const handle_Delete = (id) => {
    const newData = data.filter((task) => task.id !== id);
    setData(newData);
  };
  const working = (id) => {
    const newdata = data.filter((work) => work.id !== id);
    setData(newdata);
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === id) {
        set_work_list([...work_list, data[i]]);
      }
    }
  };

  return (
    <div className="List_preview">
      <div className="todo_list">
        <Todoadd sendata={handleData} />
        <div className="Headings">
          <h2>Pending Tasks</h2>
          <h2>In Progress</h2>
          <h2>Completed</h2>
        </div>

        {data.map((todos) => (
          <div className="work_preview" key={todos.id}>
            <p> {todos.title}</p>
            <p>{todos.description}</p>
            <ImBin onClick={() => handle_Delete(todos.id)} />
            <IoCheckbox onClick={() => working(todos.id)} />
          </div>
        ))}
      </div>
      <div className="Working_task_list">
        <WorkingTasks work_list={work_list} />
      </div>
    </div>
  );
};

export default TodoCardList;
