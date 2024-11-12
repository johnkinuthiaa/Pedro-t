
export default function Arrays(){
    const names=[
        {
            name:"john",
            age:19
        },
        {
            name:"peter",
            age:19
        },
        {name:"angie",age:19},
        {name:"Godwin",age:19},
        {name:"shalom",age:19},
        {name:"brandon",age:19},
        {name:"yujo",age:20}
    ];
    return(
        <div>
            {names.map( (person,key)=>{
                const{name,age} =person
                return <div className={"container border-2 justify-center gap-1 m-0 text-center w-72"}>
                    <p>{name}</p>
                    <p>{age}</p>

                </div>
            })}
        </div>
    )
}