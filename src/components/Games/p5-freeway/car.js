let xCars = [600, 600, 600];
let xRotatedCars = [0, 0, 0]
let yCars = [45, 96, 150];
let yRotatedCars = [210, 265, 318];
let speedCars = [7, 3.5, 5.2];
let speedRotatedCars = [6, 4.3, 3.3];
let widthCar = 50;
let heightCar = 40;

function showCar(){
  for (let i = 0; i < imageCars.length; i++){
    image(imageCars[i], xCars[i], yCars[i], widthCar, heightCar);
  }
}

function showRotatedCar(){
  for (let i = 0; i < imageCarsRotated.length; i++){
    image(imageCarsRotated[i], xRotatedCars[i], yRotatedCars[i], widthCar, heightCar);
  }
}

function moveCar(){
  for (let i = 0; i < imageCars.length; i++){
    xCars[i] -= speedCars[i];
  }
}

function moveRotatedCars(){
  for (let i = 0; i < imageCarsRotated.length; i++){
    xRotatedCars [i] += speedRotatedCars[i];
  }
}

function restartCar(){
  for (let i = 0; i < imageCars.length; i++){
    if (crossedScreen(xCars[i])) {
      xCars[i] = 600;
    }
  }
}

function restartRotatedCar(){
  for (let i = 0; i < imageCarsRotated.length; i++){
    if (crossedScreenInverted(xRotatedCars[i])) {
      xRotatedCars[i] = - 50;
    }
  }
}

function crossedScreen(xCar){
  return xCar < - 50;
}

function crossedScreenInverted(xCarRotated){
  return xCarRotated > 650;
}