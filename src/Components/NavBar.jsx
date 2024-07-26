import "../CSS/NavBar.css"
import { useNavigate } from "react-router-dom"

export default function NavBar() {

    const navigate = useNavigate();

    return (
        <div className="navbar-container">
            <div className="logo-name-container">
                <img className="logo" src="soccer icon.png" alt="image-logo"/>
                <p className="logo-text">Fantasy Soccer</p>
            </div>
            <div className="link-icons-container">
                <img className="home-icon" src="home.svg" onClick={() => navigate("/")}/>
                <img className="players-icon" src="team.svg" onClick={() => navigate("/index")}/>
                <button className="navbar-btn" type="button">Create Fantasy Team</button>
            </div>
        </div>
    )
}