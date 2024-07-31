import "../CSS/MyTeam.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function MyTeam({ NavBar, myTeamArr, setMyTeamArr}) {

    const navigate = useNavigate();
    
    function removePlayer(id) {
        myTeamArr.splice(id,1);
        navigate("/myTeam");
    }

    useEffect(() => {
        console.log(myTeamArr);
    },[myTeamArr])

    return (
        <div className="myteam-page-container">
            <NavBar/>
            <p className="myteam-title">MY TEAM PROFILE</p>
            {myTeamArr.length === 0 ? <><p className="noteam-text">You don't have any players in your squad</p><button className="add" type="button" onClick={() => navigate("/players")}>Add Players</button></> : <p className="myteam-subtitle">Players</p>}
            <div className="playercard-mothercontainer">
            {myTeamArr.length > 0 ? myTeamArr.map((obj, idx) => {
                return (
                    <div className="player-card-container2">
                        <p id={idx} className="player-name">{obj.name}</p>
                        <div id={idx} className="image-container">
                            <img className="player-image" id={idx} src={`${obj.name}.png`}/>
                            <div className="stats-and-btn-container">
                                <div className="stats-container">
                                    <p className="player-stats">Position: {obj.position}</p>
                                    <p className="player-stats">Goals: {obj.goals}</p>
                                    <p className="player-stats">Rating: {obj.rating}</p>
                                    <p className="moreinfo-text" onClick={() => navigate(`/players/${obj.id}`)}>More Info...</p>
                                    <button className="removeplayer-btn" type="button" onClick={() => removePlayer(idx)}>Remove</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )    
            }) : null}
            </div>
        </div>
    )
}