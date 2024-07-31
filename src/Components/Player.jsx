import "../CSS/Player.css";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Player({ NavBar, id }) {

    const navigate = useNavigate();

    const API = import.meta.env.VITE_API_URL;
    const API2 = import.meta.env.VITE_API_NEWS_URL;
    const API_KEY = import.meta.env.VITE_API_KEY;

    const [ news, setNews ] = useState([]);
    const [ dataArr, setDataArr ] = useState([]);

    useEffect(() => {
      fetch(`${API}/players`)
      .then(response => response.json())
      .then(res => setDataArr(res))
    },[])

    const [ playerData, setPlayerData ] = useState({})
   
    useEffect(() => {
        const player = dataArr.find(obj => obj.id === Number(id));
        if (player) {
            setPlayerData(player);
            console.log(playerData)
        }    
    },[dataArr, id]);


    useEffect(() => {
        if (playerData.name) {
            fetch(`${API2}${API_KEY}&q=${playerData.name}`)
            .then(response => response.json())
            .then(res => setNews(res.results));
        }
    },[playerData]);
    
    useEffect(() => {
        console.log(news, "Line 44");
    },[news])
    return (
        <>
            {playerData ? <div className="container">
                <div className="image-name-container">
                    <img className="showpage-image" src={`../public/${playerData.name}.png`}/>
                    <div className="right-side">
                        <p className="showpage-player-name">{playerData.name}</p>
                        <div className="showstats-container">
                            <p className="showpage-stats">Position: {playerData.position}</p>
                            <p className="showpage-stats">Minutes Played: {playerData.mins_played}</p>
                            <p className="showpage-stats">Assists: {playerData.assists}</p>
                            <p className="showpage-stats">Goals: {playerData.goals}</p>
                            <p className="showpage-stats">Score Percentage: {playerData.perc_score}%</p>
                            <p className="showpage-stats">Overall Rating: {playerData.rating}</p>
                        </div>
                        <button className="showpage-edit-btn" type="button" onClick={() => navigate(`/players/${playerData.id}/edit`)}>Edit</button>
                        <button className="showpage-delete-btn" type="button">Delete</button>
                    </div>
                </div>
            </div> : null}
            {news ? <p className="news-title">Latest News</p> : null}
            {news ? news.map(arr => {
                return  (
                    <div className="news-container">
                        <p className="news">{arr.summary}</p>
                    </div>
                )}) : null}
        </>
    )
}