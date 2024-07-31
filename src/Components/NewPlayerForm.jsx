import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/NewPlayerForm.css';

const API = import.meta.env.VITE_API_URL;

const NewPlayerForm = () => {
  const [player, setPlayer] = useState({
    name: '',
    position: '',
    mins_played: '',
    assists: '',
    goals: '',
    perc_score: '',
    rating: '',
    comments: '',
    ratings: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setPlayer({ ...player, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${API}/players`, {
      method: 'POST',
      body: JSON.stringify(player),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        navigate(`/players/${data.id}`);
      })
      .catch((error) => console.error('Error:', error));
  };

  function refresh () {
    window.location.reload(false);
  }

  const handleDelete = () => {
    // Add functionality for delete here
  };

  return (
    <div className="new-player-form">
      <h1 className="createform-title">Create New Player</h1>
      <form className="create-form" onSubmit={handleSubmit}>
        <label className="create-form-label">
            Name:
            <input className="create-form-input" id="name" type="text" value={player.name} onChange={handleChange} required />
        </label>

        <label className="create-form-label">
            Position:
            <input className="create-form-input" id="position" type="text" value={player.position} onChange={handleChange} />
        </label>

        <label className="create-form-label">
            Minutes Played:
            <input style={{width: "60.8%"}} className="create-form-input" id="mins_played" type="number" value={player.mins_played} onChange={handleChange} />
        </label>

        <label className="create-form-label">
            Assists:
            <input style={{width:"70.7%"}} className="create-form-input" id="assists" type="number" value={player.assists} onChange={handleChange} />
        </label>

        <label className="create-form-label">
            Goals:
            <input className="create-form-input" id="goals" type="number" value={player.goals} onChange={handleChange} />
        </label>

        <label className="create-form-label">
            Percentage Score:
            <input style={{width:"60%"}} className="create-form-input" id="perc_score" type="number" step="0.01" value={player.perc_score} onChange={handleChange} />
        </label>

        <label className="create-form-label">
            Rating:
            <input style={{width:"69.7%"}} className="create-form-input" id="rating" type="number" step="0.01" value={player.rating} onChange={handleChange} />
        </label>
        <div className="button-group">
          <button type="submit" className="create">Submit</button>
          <button type="button" className="cancel" onClick={() => navigate("/players")}>Cancel</button>
          <button type="button" className="reset" onClick={refresh}>Reset</button>
          <button type="button" className="delete" onClick={handleDelete}>Delete</button>
        </div>
      </form>
    </div>
  );
};

export default NewPlayerForm;