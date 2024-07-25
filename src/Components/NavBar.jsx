import "../CSS/NavBar.css"

export default function NavBar() {
    return (
        <div className="navbar-container">
            <div className="logo-name-container">
                <img className="logo" src="#" alt="image-logo"/>
                <p className="logo-text">Fantasy Soccer</p>
            </div>
            <button className="navbar-btn" type="button">Create Fantasy Team</button>
        </div>
    )
}