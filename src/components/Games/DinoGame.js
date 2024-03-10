import React, { useEffect, useRef } from "react";

const DinoGame = () => {
  const canvasRef = useRef(null);
  let context;
  let dino;
  let obstacles = [];
  let gravity = 1.5;
  let jumpCount = 0;

  useEffect(() => {
    const canvas = canvasRef.current;
    context = canvas.getContext("2d");

    dino = {
      x: 50,
      y: canvas.height - 50,
      width: 50,
      height: 50,
      color: "#4CAF50",
      jumping: false,
    };

    document.addEventListener("keydown", jump);

    spawnObstacle();
    update();

    return () => {
      document.removeEventListener("keydown", jump);
    };
  }, []);

  const jump = (e) => {
    if (e.code === "Space" && !dino.jumping) {
      dino.jumping = true;
      jumpCount = 0;
    }
  };

  const spawnObstacle = () => {
    const obstacle = {
      x: canvasRef.current.width,
      y: canvasRef.current.height - 50,
      width: 30,
      height: 30,
      color: "#FF5722",
      speed: 5,
    };

    obstacles.push(obstacle);

    setTimeout(spawnObstacle, Math.random() * 2000 + 1000);
  };

  const update = () => {
    requestAnimationFrame(update);

    context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    if (dino.jumping) {
      dino.y -= 10;
      jumpCount++;

      if (jumpCount > 20) {
        dino.jumping = false;
      }
    } else if (dino.y < canvasRef.current.height - dino.height) {
      dino.y += gravity;
    }

    drawDino();
    drawObstacles();

    checkCollision();
  };

  const drawDino = () => {
    context.fillStyle = dino.color;
    context.fillRect(dino.x, dino.y, dino.width, dino.height);
  };

  const drawObstacles = () => {
    for (let obstacle of obstacles) {
      context.fillStyle = obstacle.color;
      context.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);

      obstacle.x -= obstacle.speed;

      if (obstacle.x + obstacle.width < 0) {
        obstacles.shift();
      }
    }
  };

  const checkCollision = () => {
    for (let obstacle of obstacles) {
      if (
        dino.x < obstacle.x + obstacle.width &&
        dino.x + dino.width > obstacle.x &&
        dino.y < obstacle.y + obstacle.height &&
        dino.y + dino.height > obstacle.y
      ) {
        // gameOver();
      }
    }
  };

  // const gameOver = () => {
  //   // alert("Game Over!");
  //   document.location.reload();
  // };

  return (
    <div>
      <h2>Dino Game</h2>
      <canvas ref={canvasRef} id="board" width={800} height={200} />
    </div>
  );
};

export default DinoGame;
