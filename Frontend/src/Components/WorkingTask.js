import React, { useState, useEffect } from "react";
import { ImBin } from "react-icons/im";

const Working_Tasks = ({ work_list }) => {
  const [data, setdata] = useState(work_list);
  useEffect(() => {
    setdata(work_list);
  }, [work_list]);

  const handle_Delete = (id) => {
    const newdata = data.filter((work) => work.id !== id);
    setdata(newdata);
  };

  return (
    <div>
      {data.map((work) => (
        <div key={work.id}>
          <p>Work Name is {work.title}</p>
          <p>description is {work.description}</p>
          <ImBin onClick={() => handle_Delete(work.id)} />
        </div>
      ))}
    </div>
  );
};

export default Working_Tasks;
