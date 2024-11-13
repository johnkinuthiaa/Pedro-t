import "./index.css"
export default function Header(){
    return(
        <div >
            <nav>
                <ul className={"flex flex-row justify-center items-center"}>
                    <li className={"flex mt-0"}>
                        <img src="https://i.pinimg.com/236x/e7/25/ba/e725ba659020448d584e7b8aaf76f346.jpg" alt="logo"/>
                        <h1 className={"text-blue-200 text-5xl ml-1"}>Day planner</h1>
                    </li>
                </ul>

            </nav>
        </div>
    )
}