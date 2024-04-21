import { useState } from "react";
import React from "react";
import "./Todocard_adder.css";

const Todoadd = ({ sendata }) => {
  const [todo, newtodo] = useState([]);
  const [title, newtitle] = useState("");
  const [description, new_description] = useState("");

  const handle_Submission = (e) => {
    e.preventDefault();
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
      <form onSubmit={handle_Submission}>
        <input
          type="text"
          placeholder="Title"
          name="Title"
          value={title}
          onChange={(e) => newtitle(e.target.value)}
        ></input>
        <label for="title">Title of the Work</label>
        <textarea
          placeholder="description"
          name="description"
          value={description}
          onChange={(e) => new_description(e.target.value)}
        ></textarea>
        <label for="description">Description of the work</label>

        <input type="submit"></input>
      </form>
    </div>
  );
};

export default Todoadd;
