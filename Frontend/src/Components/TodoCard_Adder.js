import React, { useState } from "react";
import "./Todocard_adder.css";
import { FaRegSquarePlus } from "react-icons/fa6";

const Todoadd = ({ sendata }) => {
  const [todo, newtodo] = useState([]);
  const [title, newtitle] = useState("");
  const [description, new_description] = useState("");

  const handleAddTask = () => {
    const new_todo = {
      id: todo.length + 1,
      title: title,
      description: description,
    };
    newtodo([...todo, new_todo]);
    newtitle("");
    new_description("");
    sendata(new_todo);
  };

  return (
    <div className="Form">
      <div className="heading">
        <h3 className="title">Organise your day</h3>
        <button className="butt" type="button" onClick={handleAddTask}>
          <p>Add</p>
          <FaRegSquarePlus className="plus" />
        </button>
      </div>
      <div className="Task">
        <p>Task:</p>
        <input
          type="text"
          placeholder="Title"
          name="Title"
          value={title}
          onChange={(e) => newtitle(e.target.value)}
        />
      </div>

      <textarea
        placeholder="Description"
        name="description"
        value={description}
        onChange={(e) => new_description(e.target.value)}
      />
    </div>
  );
};

export default Todoadd;
