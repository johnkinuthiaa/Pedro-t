import {useState} from "react";




export default function Counting(){
    let[count,setCount] =useState(0)
    function increase() {
        setCount(count+1);
    }
    function decrease() {
        setCount(count>0?count-1:count=0)
    }
    return(
        <div className={"m-1"}>
            <h1>{count}</h1>
            <button className={"bg-red-700"} onClick={decrease}>decrease</button>
            <button className={"bg-blue-700 ml-3"} onClick={increase}>increase</button>
        </div>

    )
}
