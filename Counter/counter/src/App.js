
import './App.css';
import {useState} from "react";

function App() {
  let [count,setCount] =useState(0)
  function handleAdd() {
    setCount(count+1)
  }
  function handleRemove(){
      setCount(count>0?count - 1:count=0)
  }

  return (
      <div className={" flex justify-center mt-2"}>
          <h1>{count}</h1>
          <button onClick={handleAdd} className={"bg-blue-700 mr-1 p-1"}>add</button>
          <button onClick={handleRemove} className={"bg-red-700 p-1"}>reduce</button>
      </div>


  );
}

export default App;
