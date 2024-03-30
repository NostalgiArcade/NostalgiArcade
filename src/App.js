// /src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Games from "./pages/Games";
import Login from "./pages/Login";
import Register from "./pages/Signup";
import SpaceInvadersGame from "./components/Games/SpaceInvaders";
import PongGame from "./components/Games/p5-pong/PongGame";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import PongGame from "./components/Games/p5-pong/sketch";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/games/spaceinvaders" element={<SpaceInvadersGame />} />
          <Route path="/games/pong" element={<PongGame />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
