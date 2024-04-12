import "./App.css";
import Header from "./Components/Header.js";
import Todoadd from "./Components/TodoCard_Adder.js";

import { useState } from "react";
function App() {
  const [todo_data, set_tododata] = useState([]);
  const handle_todo = (data_from_adder) => {
    set_tododata(data_from_adder);
  };
  console.log(todo_data);
  return (
    <div>
      <Header />
      <Todoadd senddata={handle_todo} />
    </div>
  );
}

export default App;
