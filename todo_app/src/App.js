import "./App.css";
import Header from "./Components/Header.js";

import TodoCardList from "./Components/TodoCardList.js";

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="content-container">
        <div className="right-half">
          <TodoCardList />
        </div>
      </div>
    </div>
  );
}

export default App;
