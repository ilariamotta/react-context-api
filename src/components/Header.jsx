import { Link } from "react-router-dom"
import NavBar from "./NavBar"

export default function Header() {


    return (

        <div className="header d-flex justify-content-between align-items-center px-5">
            <Link to="/"><img src="\src\assets\logoholder.png" alt="logo" /></Link>
            
<NavBar />
        </div>


    )
}