import {useState} from "react";



export default function ChangeOnInput(){
    const[inputValue,setInputValue] =useState("")
    const handleInputChange=(event)=>{
        setInputValue(event.target.value)
    }
    return(
        <div className={"flex text-3xl "}>
            <input type={'text'} onChange={handleInputChange} className={"bg-blue-700"}/>
            <p>{inputValue}</p>
        </div>
    )
}