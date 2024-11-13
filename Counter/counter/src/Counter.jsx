import {useState} from "react";
import './index.css'


export default function CounterApp(){
    let [count,setCount] =useState(0)
    function addCount() {
        setCount(count+1)
    }
    function reduceCount() {
        setCount(count>0?count-1:count=0)
    }
    function resetCount() {
        setCount(count=0)
    }
    return(
        <div className={"text-center"}>
            <h1 className={"font-bold text-3xl"}>{count}</h1>
            <button onClick={addCount}>add count</button>
            <button onClick={reduceCount}>reduce</button>
            <button onClick={resetCount}>set count to 0</button>
        </div>
    )
}