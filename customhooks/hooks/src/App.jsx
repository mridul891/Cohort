import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return <></>;
}

function Mycomponent() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div>
        <p>{count}</p>
        <button onClick={incrementCount}> Click</button>
      </div>
    </>
  );
}
export default App;
