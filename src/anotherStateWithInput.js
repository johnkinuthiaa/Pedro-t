import {useState} from "react";



// export default function ChangeOnInput(){
//     const[inputValue,setInputValue] =useState("")
//     const handleInputChange=(event)=>{
//         setInputValue(event.target.value)
//     }
//     return(
//         <div className={"flex text-3xl "}>
//             <input type={'text'} onChange={handleInputChange} className={"bg-blue-700"}/>
//             <p>{inputValue}</p>
//         </div>
//     )


// }
// export default function ShowText(){
//     let [showText,setShowText] =useState(true)
//     function showTextOnScreen() {
//         setShowText(!showText)
//     }
//     return(
//         <div>
//             {showText===true&&<h1>this should he shown</h1>}
//             <button className={"bg-amber-400"} onClick={showTextOnScreen}>show/hide text</button>
//         </div>
//     )


// }
export default function ChangeColor(){
    const[color,setColor] =useState("black");
    function changeColorOfText() {
        setColor(color==="black"?"blue":"black")
    }
    return(
        <div>
            <h1 style={{color:color}}>Hi my name is johntey</h1>
            <button onClick={changeColorOfText}>change Color</button>
        </div>
    )
}