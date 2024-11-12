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
    const{name,age,email} =props
    return (

        <div>
            <p>{name}</p>
            <p>{age}</p>
            <p>{email}</p>
        </div>
    )
})
