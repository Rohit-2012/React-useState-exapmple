import { Child1 } from "./child";
import { Child2 } from "./child";
// import "./App.css";
import { useState } from "react";

function App() {
  const arr1 = [23, 34, "Hey", 98]
  const [toggle, setToggle] = useState(false);
  console.log(toggle);
  function handleToggle() {
    setToggle(!toggle);
  }
  return (
    <div className="App">
      {arr1.map((elem)=><ul><li>{elem}</li></ul>)}
      
      {toggle ? <h1>Code with Sachin sir</h1> : <h1>Hello World</h1>}
      <Child1 />
      <Child2 />
      <button onClick={handleToggle}>Click</button>
    </div>
  );
}

export default App;
