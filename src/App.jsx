import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';


//COMPONENTS
import NavBar from './Components/NavBar';
import SlidingCarousel from './Components/SlidingCarousel';
import Players from './Components/Players';
import EditPlayerForm from './Components/EditPlayerForm';
import Player from './Components/Player';
import NewPlayerForm from './Components/NewPlayerForm';

//PAGES
import Edit from "./Pages/Edit";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import Add from "./Pages/Add";
import Show from "./Pages/Show";
import About from "./Pages/About";
import Login from "./Pages/Login";
import MyTeam from './Pages/MyTeam';
import { useEffect, useState } from 'react';

function App() {

  const [ myTeamArr, setMyTeamArr ] = useState([]);
  

  return (
    <div>
      <Router>
        <main>
          <Routes>
            <Route path="/" element={<Login />} />      
            <Route path="/home" element={<Home NavBar={NavBar} SlidingCarousel={SlidingCarousel}/>} />
            <Route path="/about" element={<About NavBar={NavBar}/>} />
            <Route path="/players" element={<Index Players={Players} NavBar={NavBar} myTeamArr={myTeamArr} setMyTeamArr={setMyTeamArr}/>} />
            <Route path="/players/add" element={<Add NavBar={NavBar} NewPlayerForm={NewPlayerForm}/>} />
            <Route path="/players/:id" element={<Show NavBar={NavBar} Player={Player}/>} />
            <Route path="/players/:id/edit" element={<Edit NavBar={NavBar} EditPlayerForm={EditPlayerForm}/>} />
            <Route path="/myteam" element={<MyTeam NavBar={NavBar} myTeamArr={myTeamArr} setMyTeamArr={setMyTeamArr}/>}/>
            <Route path="*" element={<Error/>} />
          </Routes>
        </main>
       </Router>  
    </div>
  );
}

export default App;
