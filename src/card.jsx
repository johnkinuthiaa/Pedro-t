import './index.css';
export default function Card(){
    return(

        <div className={"names"}>
            <User name={"john akngo"}/>
            <p>i love javascript and java</p>
            <p>i love using them</p>


        </div>
    )
};
const User = ((props)=>{
    return (
        <div className={"user-details"}>
            <p>{props.name}</p>
            <p>19</p>
            <p>aspiring polyglot</p>
        </div>

    )
})