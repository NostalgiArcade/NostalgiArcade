// /src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Games from "./pages/Games";
import Login from "./pages/Login";
import About from "./pages/About";
import DinoGame from "./components/Games/DinoGame";
import Tetris from "./components/Tetris";
import AsteroidsGame from "./components/Games/Asteroids";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SpaceInvaders from "./components/Games/SpaceInvaders";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/games/spaceinvaders" element={<SpaceInvaders />} />
          <Route path="/games/dinogame" element={<DinoGame />} />
          <Route path="/components/tetris" element={<Tetris />} />
          <Route path="/games/asteroids" element={<AsteroidsGame />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
