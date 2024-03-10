// /src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Games from "./pages/Games";
import Login from "./pages/Login";
import About from "./pages/About";
import SpaceInvadersGame from "./components/Games/SpaceInvaders";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DinoGame from "./components/Games/DinoGame";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/games/spaceinvaders" element={<SpaceInvadersGame />} />
//not sure what it was supposed to be here merge pull by augusto - reviewed by jack
//<<<<<<< aboutUs
          <Route path="/About" element={<About />} />
          <Route path="/games/dinointerface" element={<DinoGame />} />
//>>>>>>> main
        </Routes>
      </Router>
    </div>
  );
}

export default App;
