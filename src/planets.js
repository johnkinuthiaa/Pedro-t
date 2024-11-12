 const planets =[
    {name:"mars",isGasPlanet:false},
    {name:"Earth",isGasPlanet:false},
    {name:"Jupiter",isGasPlanet:true},
    {name:"Venus",isGasPlanet:false},
    {name:"Neptune",isGasPlanet:true},
    {name:"Uranus",isGasPlanet:true}
];
export default function IsGasPlanet(){
    return(
        <div className={"container flex-col-reverse"}>
            {planets.map( (planet)=>{
                return !planet.isGasPlanet&&<h1>{planet.name}</h1>
        })}
        </div>
    )
}

