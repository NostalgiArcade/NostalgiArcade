//actor's variables
let yActor = 369;
let xActor = 300;
let hit = false;
let myScore = 0;

function showActor(){
    image(actor, xActor, yActor, 25, 25);
}

function moveActor(){
  if (keyIsDown(UP_ARROW)){
    yActor -= 4;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(canMove()){
      yActor += 4;
    }
  }
}
function verifyCollision(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imageCars.length; i++){
    hit = collideRectCircle(xCars[i], yCars[i], widthCar, heightCar, xActor, yActor, 12.5);
    if (hit){
      restartActor();
      hitSong.play();
      if (positiveScore()){
              myScore--;
      }
    }
  }
}

function verifyCollisionRotatedCars(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imageCarsRotated.length; i++){
    hit = collideRectCircle(xRotatedCars[i], yRotatedCars[i], widthCar, heightCar, xActor, yActor, 11);
    if (hit){
      restartActor();
      hitSong.play();
      if (positiveScore()){
              myScore--;
      }
    }
  }
}

function restartActor(){
  yActor = 369;
}

function addScore(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 0));
  text(myScore, width / 5, 27);
}

function scores(){
  if (yActor < 10){
    myScore++;
    scoreSong.play();
    restartActor();
  }
}

function positiveScore(){
  return myScore > 0
}

function canMove(){
  return yActor < 369;
}