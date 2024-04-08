import React, { useEffect, useRef } from "react"; // Import React and useRef

const PongGame = () => {
  const gameCanvasRef = useRef(null); // Create a ref for the canvas

  useEffect(() => {
    const gameCanvas = gameCanvasRef.current; // Access the canvas element using the ref
    const context = gameCanvas.getContext("2d"); // Get canvas context
    gameCanvas.width = 600; // Set the width of the canvas
    gameCanvas.height = 400; // Set the height of the canvas

    const width = gameCanvas.width;
    const height = gameCanvas.height;

    // Variables for the ball
    var xBall = 300;
    var yBall = 200;
    var diameter = 20;
    var radius = diameter / 2;

    // Speed of the ball
    var xSpeedBall = 6;
    var ySpeedBall = 6;

    // Variables for the paddle
    var xPaddle = 5;
    var yPaddle = 150;
    var paddleWidth = 10;
    var paddleHeight = 90;

    // Variables for the opponent
    var xPaddleOpponent = 585;
    var yPaddleOpponent = 150;
    var ySpeedOpponent;

    var collided = false;

    // Score of the game
    var myPoints = 0;
    var opponentPoints = 0;

    // Error of the opponent
    var chanceOfError = 0;

    // var racketSound = new Audio("./raquetada.mp3");
    // var pointSound = new Audio("./ponto.mp3");
    // var trilhaSound = new Audio("./trilha.mp3"); 

    function setup() {
      gameCanvas.width = 600; 
      gameCanvas.height = 400;
      // trilhaSound.loop = true;
      // trilhaSound.play();

      // Start the game loop
      requestAnimationFrame(draw); 
    }

    function draw() {
      background(0);
      console.log("draw");
      showBall();
      console.log("showBall");
      moveBall();
      checkCollisionBorder();
      showPaddle(xPaddle, yPaddle);
      moveMyPaddle();
      // checkCollisionPaddle();
      //collisionMyPaddleLibrary();
      showPaddle(xPaddleOpponent, yPaddleOpponent);
      //movePaddleOpponent();
      checkCollisionPaddleLibrary(xPaddle, yPaddle);
      checkCollisionPaddleLibrary(xPaddleOpponent, yPaddleOpponent);
      includeScoreboard();
      scorePoint();
      movePaddleOpponentPc();
      ballDoesNotGetStuck();
      // requestAnimationFrame(draw); // Continue the loop
    }

    // Helper functions for drawing
    function background(color) {
      context.fillStyle = color;
      context.fillRect(0, 0, gameCanvas.width, gameCanvas.height); 
    }

    function circle(x, y, d) {
      context.beginPath();
      context.arc(x, y, d / 2, 0, 2 * Math.PI);
      context.fill(); 
    }  

    function rect(x, y, w, h) {
      context.fillRect(x, y, w, h); 
    }

    function circleRectangleCollision(circle, rect) {
      // Temporary variables to set edges for testing
      let testX = circle.x;
      let testY = circle.y;

      // Find the closest point to the circle within the rectangle
      if (circle.x < rect.x) testX = rect.x;      // Left edge
      else if (circle.x > rect.x + rect.width) testX = rect.x + rect.width;   // Right edge
      if (circle.y < rect.y) testY = rect.y;      // Top edge
      else if (circle.y > rect.y + rect.height) testY = rect.y + rect.height;   // Bottom edge

      // Get distance from closest point to circle center
      const distX = circle.x - testX;
      const distY = circle.y - testY;
      const distance = Math.sqrt((distX * distX) + (distY * distY));

      // If the distance is less than the circle's radius, a collision occurs
      if (distance <= circle.radius) {
        return true;
      }
      return false;
    }


    function showBall() {
      circle(xBall, yBall, diameter);
    }

    function moveBall() {
      xBall += xSpeedBall;
      yBall += ySpeedBall;
    }

    function checkCollisionPaddleLibrary(x, y) {
      const paddle = { x: x, y: y, width: paddleWidth, height: paddleHeight };
      const ball = { x: xBall, y: yBall, radius: radius };

      collided = circleRectangleCollision(ball, paddle); 

      if (collided) {
        xSpeedBall *= -1;
        // racketSound.play();
      }
    }

    //check width and height variables
    function checkCollisionBorder() {
      if (xBall + radius >= width || xBall - radius <= 0) {
        xSpeedBall *= -1;
      }

      if (yBall + radius >= height || yBall - radius <= 0) {
        ySpeedBall *= -1;
      }
    }

    function showPaddle(x, y) {
      rect(x, y, paddleWidth, paddleHeight);
    }

    function constrain(value, min, max) {
      return Math.min(Math.max(value, min), max);
    }    

  //   const moveMyPaddle = (event) => {
  //     if (!event) return; 
  //     if (event.key === 'ArrowUp') { 
  //       yPaddle -= 10;
  //     } else if (event.key === 'ArrowDown') {
  //       yPaddle += 10;
  //     }
  //     // Limit the paddle on the screen
  //     yPaddle = constrain(yPaddle, 5, 305);
  // }

  const moveMyPaddle = (event) => {
    if (!event) return;
    if (event.key === 'ArrowUp') {
      yPaddle = constrain(yPaddle - 10, 5, height - paddleHeight - 5);
    } else if (event.key === 'ArrowDown') {
      yPaddle = constrain(yPaddle + 10, 5, height - paddleHeight - 5);
    }
  };
  
  // const handleKeyUp = (event) => {
  //     // ... (Potential logic to stop paddle when key is released)
  // } 
  
  // window.addEventListener('keydown', moveMyPaddle);
  document.addEventListener("keydown", moveMyPaddle); // Use document instead of window
  // window.addEventListener('keyup', handleKeyUp);

    // //check keyIsDown variables and constrain variables
    // function moveMyPaddle() {
    //   if (keyIsDown(UP_ARROW)) {
    //     yPaddle -= 10;
    //   }
    //   if (keyIsDown(DOWN_ARROW)) {
    //     yPaddle += 10;
    //   }

    //   // Limit the paddle on the screen
    //   yPaddle = constrain(yPaddle, 5, 305);
    // }

    // function checkCollisionPaddle() {
    //   if (
    //     xBall - radius < xPaddle + paddleWidth &&
    //     yBall - radius < yPaddle + paddleHeight &&
    //     yBall + radius > yPaddle
    //   ) {
    //     xSpeedBall *= -1;
    //   }
    // }


    // function checkCollisionPaddleLibrary(x, y) {
    //   collided = collideRectCircle(
    //     x,
    //     y,
    //     paddleWidth,
    //     paddleHeight,
    //     xBall,
    //     yBall,
    //     radius
    //   );
    //   if (collided) {
    //     xSpeedBall *= -1;
    //     racketSound.play();
    //   }
    // }


    // function movePaddleOpponent() {
    //   if (keyIsDown(87)) {
    //     yPaddleOpponent -= 10;
    //   }
    //   if (keyIsDown(83)) {
    //     yPaddleOpponent += 10;
    //   }

    //   // Limit the paddle on the screen
    //   yPaddleOpponent = constrain(yPaddleOpponent, 5, 305);
    // }

    function movePaddleOpponentPc() {
      ySpeedOpponent = yBall - yPaddleOpponent - paddleWidth / 2 - 30;
      yPaddleOpponent += ySpeedOpponent + chanceOfError;
      calculateChanceOfError();
    }

    function calculateChanceOfError() {
      if (opponentPoints >= myPoints) {
        chanceOfError += 1;
        if (chanceOfError >= 39) {
          chanceOfError = 40;
        }
      } else {
        chanceOfError -= 1; 
        if (chanceOfError <= 35) {
          chanceOfError = 35;
        }
      }
    }

    function includeScoreboard(){
      context.strokeStyle = 'white'; // Replaces stroke
      context.textAlign = 'center'; // Replaces textAlign
      context.textSize = '16'; // Replaces textSize
      context.fillStyle = 'white'; // Replaces fill
      // fill(color(255, 140, 0));
      rect(150, 10, 40, 20);
      context.fillStyle = 'black'; // Replaces fill
      // fill(255);
      context.fillText(myPoints, 170, 26);
      // text(myPoints, 170, 26);
      context.fillStyle = 'white'; // Replaces fill
      // fill(color(255, 140, 0));
      rect(450, 10, 40, 20);
      context.fillStyle = 'black'; // Replaces fill
      // fill(255);
      context.fillText(opponentPoints, 470, 26);
      // text(opponentPoints, 470, 26);
    }

    function scorePoint(){
      if(xBall > 590){
        myPoints += 1;
        // pointSound.play();
      }
      if(xBall < 10){
        opponentPoints += 1;
        // pointSound.play();
      }
    }

    function ballDoesNotGetStuck(){
      if (xBall - radius < 0){
        xBall = 23;
      }
    }
    setup(); // Call setup to initialize the game
    }, []); // Empty array to run the effect only once
  return (
    <div>
      <h2>Pong Game</h2>
      <canvas ref={gameCanvasRef} width={600} height={400} />
    </div>
  );
};

export default PongGame;
