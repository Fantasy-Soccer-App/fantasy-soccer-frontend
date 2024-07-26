import "../CSS/Index.css";
import { useNavigate } from "react-router-dom";


export default function Index({ dataArr }) {

    // fetch the dataArr.

    const navigate = useNavigate();

    return (
        <div className="indexpage-container">
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
                                <p className="moreinfo-text" onClick={() => navigate(`/${obj.id}`)}>More Info...</p>
                            </div>
                            <button id={idx} className="player-add" type="button">Add</button>
                        </div>
                    </div>
                </div>
                )
            })}
        </div>
    )
}