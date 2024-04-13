import "./App.css";
import Header from "./Components/Header.js";
import Todoadd from "./Components/TodoCard_Adder.js";
import TodoCardList from "./Components/TodoCardList.js";
import { useState } from "react";

function App() {
  const [data, setdata] = useState([]);
  const handledata = (senddata) => {
    setdata([...data, senddata]);
  };
  console.log(data);

  return (
    <div>
      <Header />
      <Todoadd sendata={handledata} />
      <TodoCardList data={data} />
    </div>
  );
}

export default App;
