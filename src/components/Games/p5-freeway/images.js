//game's images & songs

let road;
let actor;
let car;
let car2;
let car3;
let carRotated1;
let carRotated2;
let carRotated3;

let standard;
let hitSong;
let scoreSong;

function preload(){
  road = loadImage("images/road.png");
  actor = loadImage("images/deer.png");
  car = loadImage("images/car-1.png");
  car2 = loadImage("images/car-2.png");
  car3 = loadImage("images/car-3.png");
  carRotated1 = loadImage("images/car-1-rotated.png");
  carRotated2 = loadImage("images/car-2-rotated.png");
  carRotated3 = loadImage("images/car-3-rotated.png");
  imageCars = [car, car2, car3];
  imageCarsRotated = [carRotated1, carRotated2, carRotated3];
  standard = loadSound("songs/standard.mp3");
  hitSong = loadSound("songs/hit.mp3");
  scoreSong = loadSound("songs/score.wav");
}