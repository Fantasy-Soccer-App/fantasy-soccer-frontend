import  "../CSS/Index.css";
import { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

export default function Index({ NavBar, dataArr, myTeamArr, setMyTeamArr}) {

    const navigate = useNavigate();

    function addPlayer(newPlayer) {
        setMyTeamArr([...myTeamArr, newPlayer])
    }

    useEffect(() => {
        console.log(myTeamArr, "Updated Team Array")
    },[myTeamArr]);

    return (
        <div className="Index">
            <NavBar/>
            <div className="dreamteam-container">
                <p className="spantext-container"><span className="span-text">Add to your</span></p><p>DREAM TEAM</p>
            </div>
            {dataArr.map((obj, idx) => {
                return (
                <div className="player-card-container">
                    <p id={idx} className="player-name">{obj.name}</p>
                    <div id={idx} className="image-container">
                        <img className="player-image" id={idx} src={`${obj.name}.png`}/>
                        <div className="stats-and-btn-container">
                            <div className="stats-container">
                                <p className="player-stats">Position: {obj.position}</p>
                                <p className="player-stats">Goals: {obj.goals}</p>
                                <p className="player-stats">Rating: {obj.rating}</p>
                                <p className="moreinfo-text" onClick={() => navigate(`/players/${obj.id}`)}>More Info...</p>
                            </div>
                            <button id={idx} className="player-add" type="button" onClick={() => {
                                const newPlayer = {
                                    id: obj.id,
                                    name: obj.name,
                                    position: obj.position,
                                    goals: obj.goals,
                                    rating: obj.rating,
                                    mins_played: obj.mins_played,
                                    perc_score: obj.perc_score,
                                    assists: obj.assists
                                };
                                addPlayer(newPlayer);
                            }}>Add</button>
                        </div>
                    </div>
                </div>
                )
            })}
        </div>
    )
}

