import './index.css'

export default function Header(){
    return(
        <div className={"navigation hover:cursor-pointer"}>
            <nav>
                <ul>
                    <li><img src={"https://i.pinimg.com/736x/c5/e4/43/c5e44328abc2d2b52c2f71226f951892.jpg"} alt={"header"}></img></li>
                    <li>homepage</li>
                    <li>about us</li>
                    <li>navigation</li>
                </ul>
            </nav>
        </div>
    )
}