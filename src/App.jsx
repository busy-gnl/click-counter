import { useState } from "react";
import { Counter } from "./components/Counter";
// import { Timer } from "./components/Timer";

import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  // const [time, setTime] = useState(0);
  return (
    <>
      <div className="App">
        <header className="App-header">
          {/* <Timer time={time} setTime={setTime} /> */}
          <img src={logo} className="App-logo" alt="logo" />
          <Counter count={count} setCount={setCount} />
        </header>
      </div>
    </>
  );
}

export default App;
