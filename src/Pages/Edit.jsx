import "../CSS/Edit.css";
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";

export default function Edit({ NavBar, EditPlayerForm }) {

    const { id } = useParams();

    
    const API = import.meta.env.VITE_API_URL;
    
    const [ dataArr, setDataArr ] = useState([]);
    const [ currPlayer, setCurrPlayer ] = useState({})

    useEffect(() => {
        fetch(`${API}/players`)
        .then(response => response.json())
        .then(res => setDataArr(res))
      },[]);
    
    useEffect(() => {
        if (dataArr[0]) {
            const player = dataArr.find(obj => obj.id === Number(id));
            setCurrPlayer(player);
        }
    },[dataArr])
    
    return (
        <>
            <NavBar/>
            {currPlayer ? <EditPlayerForm currPlayer={currPlayer}/> : null}
        </>
    )
}