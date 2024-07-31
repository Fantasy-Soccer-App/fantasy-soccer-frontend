import "../CSS/Show.css";

import { useParams } from "react-router-dom" 

export default function Show({ NavBar, Player }) {

    const { id } = useParams();
  
    return (
        <>
            <NavBar/>
            <Player id ={id}/>
        </>
    )
}