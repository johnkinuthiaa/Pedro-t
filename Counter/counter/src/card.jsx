
export const User =((props)=>{
    const{name,age,status} =props
    return(
        <div>
            <p>{name}</p>
            <p>{age}</p>
            <p>{status}</p>
        </div>
    )
});