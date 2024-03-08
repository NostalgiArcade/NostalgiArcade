// /src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Games from "./pages/Games";
import Login from "./pages/Login";
import SpaceInvadersGame from "./components/Games/SpaceInvaders";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PongGame from "./components/Games/p5-pong/sketch";

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
          <Route path="/games/p5-pong/sketch.js" element={<PongGame />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
