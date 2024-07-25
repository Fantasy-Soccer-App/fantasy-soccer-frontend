import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';

//Components
import NavBar from './Components/NavBar';

//Pages
import Home from './Pages/Home';
import Index from './Pages/Index';

function App() {

  const API = import.meta.env.VITE_API_URL;
  const [ dataArr, setDataArr ] = useState([])
  
  useEffect(() => {
    fetch(`${API}/stats`).then(res => {
      return res.json();
    })
    .then(res => setDataArr(res));
  },[])

  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/index" element={<Index dataArr={dataArr}/>}/>
      </Routes>
    </Router>
  )
}

export default App
