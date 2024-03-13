// /src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Games from "./pages/Games";
import Login from "./pages/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SpaceInvaders from "./components/Games/SpaceInvaders";
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
          <Route path="/games/spaceinvaders" element={<SpaceInvaders />} />
          <Route path="/games/dinogame" element={<DinoGame />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
