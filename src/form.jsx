// props are represented as objects....they act as parameters to the components

// const prop={
//     name:"john",
//     age:19,
//     email:"johnKinuthia@Gmail.com"
// }
export default function GetUser(){
    return(
        <User name={"john"} email={"johnk"} age={"kinuthia"}/>
    )
}
const User =( (props)=> {
    return (
        <div>
            <p>{props.name}</p>
            <p>{props.age}</p>
            <p>{props.email}</p>
        </div>
    )
})
