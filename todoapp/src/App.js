import "./index.css"
import {useState} from "react";

export default function TodoApp(){
    const [todoList,setTodoList] =useState([])
    const [todo,setTodo] =useState("")

    const setTodoItem =( (event)=>{
        setTodo(event.target.value)
    })
    const addToList =(()=>{
        setTodoList([...todoList,todo])

    })
    return(
        <div className={"flex flex-col justify-center items-center mt-10"}>
            <div className={"flex flex-row "}>
                <input type={"text"} className={"border-2 border-black p-2 text-3xl rounded-lg"} onChange={setTodoItem}/>
                <button className={"bg-blue-600 text-white p-4 ml-2 rounded-lg font-bold"} onClick={addToList}>Add Todo
                </button>

            </div>
            <div className={"mt-10 justify-items-start"}>
                <h1 className={"text-3xl font-bold"}>Todos</h1>
                <div >
                    {todoList.map( (todo )=>{
                        return <p className={"container border-2 border-black w-80 p-5 mt-5 rounded-lg"}>{todo}</p>
                    })}
                </div>

            </div>
        </div>
    )
}

