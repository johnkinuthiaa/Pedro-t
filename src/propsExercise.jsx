
export default function Ex(){
    return(
        <div>
            <p>Students Details</p>
            <User name={"john"} age={19} loves={["java","javaScript"]}/>
            <User name={"Angie"} age={19} loves={["python"]}/>
            <User name={"Godwin"} age={20} loves={["C"]}/>
        </div>

    )
}
const User =( (props)=>{
    const {name,age,loves} =props
    return(
        <div className={"container flex text-blue-200 border-amber-100 text-center content-center m-1 gap-1"}>
            <p>{name}</p>
            <p>{age}</p>
            <p>{loves}</p>
        </div>
    )
})