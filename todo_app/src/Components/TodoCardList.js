import React from "react";

const TodoCardList = (props) => {
  const todo = props.data;

  return (
    <div>
      <h2>WORK LIST</h2>
      {todo.map((todos) => (
        <div className="work_preview" key={todos.id}>
          <h4>{todos.id}</h4>
          <p>Work Name is {todos.title}</p>
          <p>description is {todos.description}</p>
        </div>
      ))}
    </div>
  );
};

export default TodoCardList;
