function setup() {
  createCanvas(600, 400);
  standard.loop();
}

function draw() {
  background(road);
  showActor();
  showCar();
  showRotatedCar();
  moveCar();
  moveRotatedCars();
  moveActor();
  restartCar();
  restartRotatedCar();
  verifyCollision();
  verifyCollisionRotatedCars();
  addScore();
  scores();
}

