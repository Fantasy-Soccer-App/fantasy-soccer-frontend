import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';

import NavBar from './Components/NavBar';
import Edit from "./Pages/Edit";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import Add from "./Pages/Add";
import Show from "./Pages/Show";
import About from "./Pages/About";
import Login from "./Pages/Login";

function App() {

  return (
    <div>
      <Router>
        {/* NavBar is only included on pages other than the landing page */}
        <main>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route element={<NavBar />}>
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/players" element={<Index />} />
              <Route path="/players/add" element={<Add />} />
              <Route path="/players/:id" element={<Show />} />
              <Route path="/players/:id/edit" element={<Edit />} />
            </Route>
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
      </Router>
      {/* <h1>Welcome to Fantasy Soccer!</h1> */}
    </div>
  );
}

export default App;
