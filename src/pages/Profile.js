import React from "react";
import Player from "./Player"; // Import Player component

function Profile() {
  // Replace placeholders with your actual data
  const playerData = {
    name: "Player name",
    nickname: "NICKNAME",
    description: "A passionate gamer....",
    gameScore: 12345,
    profileImage: "path/to/profile.png", // Path to your profile image
  };

  return <Player {...playerData} />; // Pass data as props to Player component
}

export default Profile;
