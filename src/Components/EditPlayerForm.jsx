import "../CSS/EditPlayerForm.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function EditPlayerForm({ currPlayer }) {

    const navigate = useNavigate();

    const API = import.meta.env.VITE_API_URL;

    const [ dataArr, setDataArr ] = useState([]);
    const [ newValues, setNewValues ] = useState({})

    useEffect(() => {
        fetch(`${API}/players`)
        .then(response => response.json())
        .then(res => setDataArr(res))
      },[]);
    
    function handleSubmit(e) {
        e.preventDefault();
        // console.log(newValues);
        fetch(`${API}/players/${currPlayer.id}`, {
            method: 'PUT',
            body: JSON.stringify(newValues),
            headers: {
                'Content-Type':'application/json'
            }
        })
        .then(() => navigate("/players"))
        .catch(error => console.error(error))
    }
    

    return (
        <div className="mothercontainer">
            <img className="editform-image" src={`/${currPlayer.name}.png`}/>
            <form className="form-container" onSubmit={handleSubmit}>
                <label className="form-label">
                    Player's Name: 
                    <input style={{width:"40%"}} id="form-name" className="editform-input" placeholder={currPlayer.name}/>
                </label>
                <label className="form-label">
                    Position:
                    <input style={{width:"46.5%"}} id="form-position2" className="editform-input" placeholder={currPlayer.position}/>
                </label>
                <label className="form-label">
                    Minutes Played:
                    <input style={{width:"39%"}} id="form-minutes" className="editform-input" placeholder={currPlayer.mins_played}/>
                </label>
                <label className="form-label">
                    Assists:
                    <input style={{width:"47%"}} id="form-assists" className="editform-input" placeholder={currPlayer.assists}/>
                </label>
                <label className="form-label">
                    Goals:
                    <input style={{width:"48%"}} id="form-goals" className="editform-input" placeholder={currPlayer.goals}/>
                </label>
                <label className="form-label">
                    Percentage Score:
                    <input style={{width:"36%"}} id="form-percScore" className="editform-input" placeholder={currPlayer.perc_score}/>
                </label>
                <label className="form-label">
                    Rating:
                    <input style={{width:"47.5%"}} id="form-rating" className="editform-input" placeholder={currPlayer.rating}/>
                </label>
                <button className="form-submit" type="submit" onClick={() => {
                    const values = {
                        id: currPlayer.id,
                        name: currPlayer.name,
                        position: document.getElementById("form-position2").value,
                        mins_played: document.getElementById("form-minutes").value,
                        assists: document.getElementById("form-assists").value,
                        goals: document.getElementById("form-goals").value,
                        perc_score: document.getElementById("form-percScore").value,
                        rating: document.getElementById("form-rating").value
                    }
                    setNewValues(values);
                }}>Submit</button>
            </form>
        </div>
    )
}