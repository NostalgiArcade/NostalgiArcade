import React, { useEffect, useRef } from "react";

const Breakout = () => {
  const canvasRef = useRef(null);
  let ctx;
  let ballRadius = 10;
  let x;
  let y;
  let dx;
  let dy;
  let paddleHeight = 10;
  let paddleWidth = 75;
  let paddleX;
  let rightPressed = false;
  let leftPressed = false;
  let brickRowCount = 3;
  let brickColumnCount = 9;
  let brickWidth = 75;
  let brickHeight = 20;
  let brickPadding = 10;
  let brickOffsetTop = 60;
  let brickOffsetLeft = 23;
  let bricks = [];
  let score = 0;
  let lives = 3;
  let interval;
  let textAlpha = 0;
  let text;
  let target = brickRowCount * brickColumnCount;

  const TEXT_FADE_TIME = 2.5;
  const FPS = 30;
  const TEXT_SIZE = 40;

  useEffect(() => {
    const canvas = canvasRef.current;
    ctx = canvas.getContext("2d");
    x = canvas.width / 2;
    y = canvas.height - 80; // Adjust the starting position of the ball
    dx = 2;
    dy = -2;
    paddleX = (canvas.width - paddleWidth) / 2;

    for (let c = 0; c < brickColumnCount; c++) {
      bricks[c] = [];
      for (let r = 0; r < brickRowCount; r++) {
        bricks[c][r] = {
          x: 0,
          y: 0,
          status: 1,
        };
      }
    }

    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);

    interval = setInterval(draw, 10);

    levelUp(); // Call levelUp function when the game starts

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
      document.removeEventListener("keyup", keyUpHandler);
      clearInterval(interval);
    };
  }, []);

  function keyDownHandler(e) {
    if (e.key === "Right" || e.key === "ArrowRight") {
      rightPressed = true;
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
      leftPressed = true;
    }
  }

  function keyUpHandler(e) {
    if (e.key === "Right" || e.key === "ArrowRight") {
      rightPressed = false;
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
      leftPressed = false;
    }
  }

  function collisionDetection() {
    
    for (let c = 0; c < brickColumnCount; c++) {
      for (let r = 0; r < brickRowCount; r++) {
        let b = bricks[c][r];
        if (b.status === 1) {
          if (
            x > b.x &&
            x < b.x + brickWidth &&
            y > b.y &&
            y < b.y + brickHeight
          ) {
            dy = -dy;
            b.status = 0;
            score++;

            if (score === target) {
              if (brickRowCount < 13) {
                brickRowCount++;
                dx *= 5; // Increase the velocity of the ball
                dy *= 5; // Increase the velocity of the ball
                bricks = [];
                for (let c = 0; c < brickColumnCount; c++) {
                  bricks[c] = [];
                  for (let r = 0; r < brickRowCount; r++) {
                    bricks[c][r] = { x: 0, y: 0, status: 1 };
                  }
                }
                levelUp(); // Call levelUp function when progressing to the next level
                target += brickRowCount * brickColumnCount;
                console.log(target);
              } else {
                theEnd(); // Call theEnd function when the game is over
              }
            }
          }
        }
      }
    }
  }

  function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
  }

  function drawPaddle() {
    ctx.beginPath();
    ctx.rect(
      paddleX,
      canvasRef.current.height - paddleHeight,
      paddleWidth,
      paddleHeight
    );
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
  }

  function drawBricks() {
    for (let c = 0; c < brickColumnCount; c++) {
      for (let r = 0; r < brickRowCount; r++) {
        if (bricks[c][r].status === 1) {
          let brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
          let brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
          bricks[c][r].x = brickX;
          bricks[c][r].y = brickY;
          ctx.beginPath();
          ctx.rect(brickX, brickY, brickWidth, brickHeight);
          ctx.fillStyle = "#0095DD";
          ctx.fill();
          ctx.closePath();
        }
      }
    }
  }

  function draw() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    drawBricks();
    drawBall();
    drawPaddle();
    drawLives();
    drawScore();
    collisionDetection();

    // Draw "GAME OVER" text if the game is over
    if (textAlpha >= 0) {
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "rgba(255, 255, 255, " + textAlpha + ")";
      ctx.font = "small-caps " + TEXT_SIZE + "px dejavu sans mono";
      ctx.fillText(
        text,
        canvasRef.current.width / 2,
        canvasRef.current.height * 0.75
      );
      textAlpha -= 1.0 / TEXT_FADE_TIME / FPS;
    }

    // Check for game over condition
    if (lives <= 0) {
      clearInterval(interval); // Stop the game loop
    }

    // Move the paddle
    if (rightPressed && paddleX < canvasRef.current.width - paddleWidth) {
      paddleX += 7;
    } else if (leftPressed && paddleX > 0) {
      paddleX -= 7;
    }

    // Move the ball
    x += dx;
    y += dy;

    // Check for ball collision with walls
    if (x + dx > canvasRef.current.width - ballRadius || x + dx < ballRadius) {
      dx = -dx;
    }
    let topEdge = ballRadius + 40;
    if (y + dy < topEdge) {
      dy = -dy;
    }

    // Draw the top edge
    ctx.beginPath();
    ctx.rect(0, topEdge - 5, canvasRef.current.width, 2);
    ctx.fillStyle = "#FFFFFF";
    ctx.fill();
    ctx.closePath();

    // Check for ball collision with paddle and bottom wall
    if (y + dy > canvasRef.current.height - ballRadius) {
      if (x + ballRadius > paddleX && x - ballRadius < paddleX + paddleWidth) {
        dy = -dy;
      } else {
        // Check if the ball reaches the bottom without colliding with the paddle
        lives--; // Deduct a life
        if (lives === 0) {
          gameOver(); // Call gameOver if lives are zero
        } else {
          // Reset ball and paddle position
          x = canvasRef.current.width / 2;
          y = canvasRef.current.height - 80; // Adjust the starting position of the ball
          dx = 2;
          dy = -2;
          paddleX = (canvasRef.current.width - paddleWidth) / 2;
        }
      }
    }
  }

  function drawLives() {
    ctx.fillStyle = "white"; // Set the fill color to white
    for (let i = 0; i < lives; i++) {
      ctx.beginPath();
      ctx.arc(20 + 30 * i, 23, ballRadius, 0, Math.PI * 2);
      ctx.fill();
      ctx.closePath();
    }
  }

  function drawScore() {
    ctx.font = "20px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("Score: " + score, canvasRef.current.width - 150, 25);
  }

  // Define a function to restart the game
  function restartGame() {
    // Clear any existing interval
    clearInterval(interval);

    // Reset all game variables to their initial state
    x = canvasRef.current.width / 2;
    y = canvasRef.current.height - 80; // Adjust the starting position of the ball
    dx = 2;
    dy = -2;
    paddleX = (canvasRef.current.width - paddleWidth) / 2;
    rightPressed = false;
    leftPressed = false;
    score = 0;
    lives = 3;
    brickRowCount = 3;
    levelUp(); // Call levelUp function when the game starts
    
    target = brickRowCount * brickColumnCount;
    console.log(target);
    bricks = [];
    for (let c = 0; c < brickColumnCount; c++) {
      bricks[c] = [];
      for (let r = 0; r < brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 };
      }
    }

    // Remove and re-add event listeners for key presses
    document.removeEventListener("keydown", keyDownHandler);
    document.removeEventListener("keyup", keyUpHandler);
    document.addEventListener("keydown", keyDownHandler);
    document.addEventListener("keyup", keyUpHandler);

    // Restart the game loop
    interval = setInterval(draw, 10);
  }

  // Modify the gameOver function to restart the game when it's over
  function gameOver() {
    text = "GAME OVER";
    textAlpha = 1.0;
    // Restart the game automatically after a delay
    setTimeout(restartGame, 3000); // Adjust the delay time as needed
  }

  // Function to handle level up
  function levelUp() {
    text = `LEVEL ${brickRowCount - 2}`;
    textAlpha = 1.0;
    // Reset ball and paddle position
    x = canvasRef.current.width / 2;
    y = canvasRef.current.height - 80; // Adjust the starting position of the ball
    dx = 2;
    dy = -2;
    paddleX = (canvasRef.current.width - paddleWidth) / 2;
  }

  function theEnd() {
    text = "THE END";
    textAlpha = 1.0;
    clearInterval(interval);
  }

  return (
    <div>
      <canvas
        id="breakoutCanvas"
        ref={canvasRef}
        width={800}
        height={600}
      ></canvas>
    </div>
  );
};

export default Breakout;
