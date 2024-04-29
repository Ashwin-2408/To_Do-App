import "./App.css";
import Header from "./Components/Header.js";

import TodoCardList from "./Components/TodoCardList.js";

function App() {
  return (
    <div className="app-container">
      <Header />

      <TodoCardList />
    </div>
  );
}

export default App;
