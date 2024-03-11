// import React, { useEffect } from "react";
// import { P5Wrapper } from "react-p5-wrapper"

// function PongGame(p) {
//   useEffect(() => {
//   let isGameOver = false;
//   let isGameStarted = false;
//   let isPaused = false;

//   return {
//     update() {
//       // Here you'll check game state and update game logic accordingly
//       if (!isGameOver && isGameStarted && !isPaused) {
//         // Example: Update ball position
//         movimentaBolinha();
//         verificaColisaoBorda();
//         movimentaRaqueteOponentePc();
//         marcaPonto();
//         bolinhaNaoFicaPresa();
//       }
//     },

//     render() {
//       // Based on the game state, render the game components
//       if (!isGameOver && isGameStarted && !isPaused) {
//         background(0); // Clear the canvas
//         mostraBolinha();
//         mostraRaquete(xRaquete, yRaquete);
//         mostraRaquete(xRaqueteOponente, yRaqueteOponente);
//         incluiPlacar();
//       } else if (isGameOver) {
//         // Code to display game over screen goes here
//       }
//     },

//     start() {
//       isGameStarted = true;
//     },

//     pause() {
//       isPaused = !isPaused;
//     },

//     gameOver() {
//       isGameOver = true;
//     },
//   };

//   p.setup = function ()  {
//   p.createCanvas(600, 400);
//   game = GameComponent();
//   trilha.loop();
//   game.start();
// }

// // function draw() {
// //   game.update();
// //   game.render();
// // }

// //variaveis da bolinha
// let xBolinha = 300;
// let yBolinha = 200;
// let diametro = 20;
// let raio = diametro/2;

// //velocidade da bolinha
// let velocidadeXBolinha = 6;
// let velocidadeYBolinha = 6;

// //variaveis da raquete
// let xRaquete = 5;
// let yRaquete = 150;
// let raqueteComprimento = 10;
// let raqueteAltura = 90;

// //variaveis do oponente
// let xRaqueteOponente = 585;
// let yRaqueteOponente = 150;
// let velocidadeYOponente;

// let colidiu = false;

// //placar do jogo
// let meusPontos = 0;
// let pontosOponente = 0;

// //sons do jogo
// let raquetada;
// let ponto;
// let trilha;

// //erro do oponente
// let chanceDeErrar = 0;

// function preload(){
//   trilha = loadSound("trilha.mp3");
//   ponto = loadSound("ponto.mp3");
//   raquetada = loadSound("raquetada.mp3");
// }

// // function setup() {
// //   createCanvas(600, 400);
// //   trilha.loop();
// // }

// p.draw = function () {{
//   p.background(0);
//   mostraBolinha();
//   movimentaBolinha();
//   verificaColisaoBorda();
//   mostraRaquete(xRaquete, yRaquete);
//   movimentaMinhaRaquete();
//   //verificaColisaoRaquete();
//   //colisaoMinhaRaqueteBiblioteca();
//   mostraRaquete(xRaqueteOponente, yRaqueteOponente);
//   //movimentaRaqueteOponente();
//   verificaColisaoRaqueteBiblioteca(xRaquete, yRaquete);
//   verificaColisaoRaqueteBiblioteca(xRaqueteOponente, yRaqueteOponente);
//   incluiPlacar();
//   marcaPonto();
//   movimentaRaqueteOponentePc();
//   bolinhaNaoFicaPresa();
//   game.update();
//   game.render();
// }

// function mostraBolinha(){
//   p.circle(xBolinha, yBolinha, diametro);
// }

// function movimentaBolinha(){
//   xBolinha += velocidadeXBolinha;
//   yBolinha += velocidadeYBolinha;
// }

// function verificaColisaoBorda(){
//   if (xBolinha + raio >= width || xBolinha - raio <= 0){
//     velocidadeXBolinha *= -1;
//   }
  
//   if(yBolinha + raio >= height || yBolinha - raio <= 0){
//     velocidadeYBolinha *= -1;
//   }
// }

// function mostraRaquete(x, y){
//   rect(x, y, raqueteComprimento, raqueteAltura);
// }

// function movimentaMinhaRaquete(){
//   if (keyIsDown(UP_ARROW)){
//     yRaquete -= 10;
//   }
//   if (keyIsDown(DOWN_ARROW)){
//     yRaquete += 10;
//   }
  
//   //Limita a raquete na tela
//   yRaquete = constrain(yRaquete, 5, 305);
// }

// function verificaColisaoRaquete(){
//   if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio< yRaquete + raqueteAltura && yBolinha + raio > yRaquete){
//     velocidadeXBolinha *= -1;
//   }
  
// }

// function verificaColisaoRaqueteBiblioteca(x, y){
//   colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
//   if (colidiu){
//     velocidadeXBolinha *= -1;
//     raquetada.play();
//   }
// }

// function movimentaRaqueteOponente(){
//    if (keyIsDown(87)){
//     yRaqueteOponente -= 10;
//   }
//   if (keyIsDown(83)){
//     yRaqueteOponente += 10;
//   }
  
//   //Limita a raquete na tela
//   yRaqueteOponente = constrain(yRaqueteOponente, 5, 305);
// }

// function movimentaRaqueteOponentePc(){
//   velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento /2 -30;
//   yRaqueteOponente += velocidadeYOponente + chanceDeErrar;
//   calculaChanceDeErrar();
// }

// function calculaChanceDeErrar(){
//   if (pontosOponente >= meusPontos){
//     chanceDeErrar +=1
//     if (chanceDeErrar >= 39){
//       chanceDeErrar = 40;
//     }
//   } else {
//     chanceDeErrar -= 1
//     if (chanceDeErrar <= 35){
//       chanceDeErrar = 35
//     }
//   }
// }

// function incluiPlacar(){
//   stroke(255);
//   textAlign(CENTER);
//   textSize(16);
//   fill(color(255, 140, 0));
//   rect(150, 10, 40, 20);
//   fill(255);
//   text(meusPontos, 170, 26);
//   fill(color(255, 140, 0));
//   rect(450, 10, 40, 20);
//   fill(255);
//   text(pontosOponente, 470, 26);
// }

// function marcaPonto(){
//   if(xBolinha > 590){
//     meusPontos += 1;
//     ponto.play();
//   }
//   if(xBolinha < 10){
//     pontosOponente += 1;
//     ponto.play();
//   }
// }

// function bolinhaNaoFicaPresa(){
//   if (xBolinha - raio < 0){
//     xBolinha = 23;
//   }
// }
// }
// }, []); // Empty dependency array ensures that the effect runs only once when the component mounts

// return (
//   <div>
//     <h2>Space Invaders Game</h2>
//     <P5Wrapper sketch={PongGame} />
//     <canvas id="board" />
//   </div>
// );
// };

// export default PongGame;
