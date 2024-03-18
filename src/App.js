import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Games from "./pages/Games";
import Login from "./pages/Login";
import SpaceInvadersGame from "./components/Games/SpaceInvaders";
import TicTacToe from "./components/Games/TicTacToe"; // Import the Tic Tac Toe component
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import DinoGame from "./components/Games/DinoGame";
import AsteroidsGame from "./components/Games/Asteroids";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <br></br>
        <br></br>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/games/spaceinvaders" element={<SpaceInvadersGame />} />
          <Route path="/games/tictactoe" element={<TicTacToe />} />
          <Route path="/games/dinogame" element={<DinoGame />} />
          <Route path="/games/asteroids" element={<AsteroidsGame />} />
          <Route path="/About" element={<About />} />
        </Routes>
        <br />
        <br />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
