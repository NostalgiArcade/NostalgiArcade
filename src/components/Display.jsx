import React from "react";
import { StyledDisplay } from "./stylestetris/StyledDisplay";

const Display = ({ gameOver, text }) => (
  <StyledDisplay gameOver={gameOver}>{text}</StyledDisplay>
);

export default Display;
