
import './App.css';
import {useState} from "react";

function App() {
  let [count,setCount] =useState(0)
  function handleAdd() {
    setCount(count+1)
  }
  function handleRemove(){
      setCount(count>=0?count -1:count=0)
  }
  return (
      <div>
          <h1>{count}</h1>
          <button onClick={handleAdd} className={"bg-blue-700"}>add</button>
          <button onClick={handleRemove} className={"bg-red-700"}>reduce</button>
      </div>


  );
}

export default App;
