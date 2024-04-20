import React from "react";
import { ImBin } from "react-icons/im";

const Working_Tasks = ({ work_list }) => {
  const data = work_list;

  return (
    <div>
      <h3>In Progress</h3>
      {data.map((work) => (
        <div key={work.id}>
          <p>Work Name is {work.title}</p>
          <p>description is {work.description}</p>
          <ImBin onClick={() => handle_Delete(todos.id)} />
        </div>
      ))}
    </div>
  );
};

export default Working_Tasks;
