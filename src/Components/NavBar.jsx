import "../CSS/NavBar.css"
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav className="nav">
            
            <Link to="/home">
                <p className="logo">
                    <img src="src/assets/fs-logo-without-background.png" alt="logo" className="w-8 h-8 rounded-full" />
                </p>
            </Link>

            <Link to="/">
                <p>Login</p>
            </Link>

            <Link to="/home">
                <p>Home</p>
            </Link>

            <Link to="/stats">
                <p>Player Directory</p>
            </Link>

            <Link to="/stats/add">
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