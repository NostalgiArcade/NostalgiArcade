import React from "react";
import { StyledStartButton } from "./stylestetris/StyledStartButton";

const StartButton = ({ callback }) => (
  <StyledStartButton onClick={callback}>Start Game</StyledStartButton>
);

export default StartButton;
