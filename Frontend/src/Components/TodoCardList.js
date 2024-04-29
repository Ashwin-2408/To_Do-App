import React, { useState } from "react";
import { ImBin } from "react-icons/im";
import "./TodoCardList.css";
import Todoadd from "./TodoCard_Adder";
import WorkingTasks from "./WorkingTask";
import { IoCheckbox } from "react-icons/io5";

const TodoCardList = () => {
  const [data, setData] = useState([]);
  const [work_list, set_work_list] = useState([]);
  const [show_pending, set_show_pending] = useState(false);
  const [show_in_progress, set_show_in_progress] = useState(false);

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
          <button
            className="but"
            onClick={() => {
              set_show_pending(!show_pending);
              set_show_in_progress(false);
            }}
          >
            Pending Tasks
          </button>
          <button
            className="but"
            onClick={() => {
              set_show_in_progress(!show_in_progress);
              set_show_pending(false);
            }}
          >
            In Progress
          </button>
          <button className="but">Completed</button>
        </div>

        {show_pending && (
          <div>
            {data.map((todos) => (
              <div className="work_preview" key={todos.id}>
                <h3 className="title1"> {todos.title}</h3>
                <p className="desc">{todos.description}</p>
                <ImBin onClick={() => handle_Delete(todos.id)} />
                <IoCheckbox onClick={() => working(todos.id)} />
              </div>
            ))}
          </div>
        )}
      </div>
      {show_in_progress && (
        <div className="Working_task_list">
          <WorkingTasks work_list={work_list} />
        </div>
      )}
    </div>
  );
};

export default TodoCardList;
