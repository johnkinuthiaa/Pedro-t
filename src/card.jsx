import './index.css';
export default function Card(){
    const name ="john";
    return(

        <div className={"names"}>
            <User/>
            <p>i love javascript and java</p>
            <p>i love using them</p>


        </div>
    )
};
const User = (()=>{
    return (
        <div className={"user-details"}>
            <p>john kinuthia</p>
            <p>19</p>
            <p>aspiring polyglot</p>
        </div>

    )
})