import "../CSS/NavBar.css"
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav className="nav">
            
            <Link to="/home">
                <p className="logo">
                    <img src="/soccer icon.png" alt="logo" className="navbar-icon" />
                </p>
            </Link>

            <Link to="/myteam">
                <p>My Team</p>
            </Link>

            <Link to="/home">
                <p>Home</p>
            </Link>

            <Link to="/players">
                <p>Player Directory</p>
            </Link>

            <Link to="/players/add">
                <p>Add</p>
            </Link>

            <Link to="/about">
                <p>About</p>
            </Link>

        </nav>
    )
}



/* basic red: #FE3037
dark red: #AE1D1E
black: #1E1414
white: #FFF */