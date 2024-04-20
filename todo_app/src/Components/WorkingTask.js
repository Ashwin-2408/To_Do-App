import React from "react";

const Working_Tasks = ({ work_list }) => {
  const data = work_list;

  return (
    <div>
      {data.map((work) => (
        <div key={work.id}>
          <p>Work Name is {work.title}</p>
          <p>description is {work.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Working_Tasks;
