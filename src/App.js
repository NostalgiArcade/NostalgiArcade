// /src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Games from "./pages/Games";
import Login from "./pages/Login";
import SpaceInvadersGame from "./components/Games/SpaceInvaders";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MoonLander from "./components/Games/MoonLander";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <MoonLander/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/games/spaceinvaders" element={<SpaceInvadersGame />} />
        z</Routes>
      </Router>
    </div>
  );
}

export default App;
