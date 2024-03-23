

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

// // Key controls
// let upPressed = false;
// let downPressed = false;

// // Event listeners for key presses
// document.addEventListener('keydown', (event) => {
//   if (event.key === 'ArrowUp') {
//       upPressed = true;
//   } else if (event.key === 'ArrowDown') {
//       downPressed = true;
//   }
// });

// document.addEventListener('keyup', (event) => {
//   if (event.key === 'ArrowUp') {
//       upPressed = false;
//   } else if (event.key === 'ArrowDown') {
//       downPressed = false;
//   }
// });

// function draw() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);

//   mostraBolinha();
//   movimentaBolinha();
//   verificaColisaoBorda();
//   mostraRaquete(xRaquete, yRaquete);
//   movimentaMinhaRaquete();
//   mostraRaquete(xRaqueteOponente, yRaqueteOponente);
//   verificaColisaoRaqueteBiblioteca(xRaquete, yRaquete);
//   verificaColisaoRaqueteBiblioteca(xRaqueteOponente, yRaqueteOponente);
//   incluiPlacar();
//   marcaPonto();
//   movimentaRaqueteOponentePc();
//   bolinhaNaoFicaPresa();

//   window.requestAnimationFrame(draw);
// }

// // Convert p5.js specific functions to vanilla JS
// function mostraBolinha() {
//   ctx.beginPath();
//   ctx.arc(xBolinha, yBolinha, raio, 0, Math.PI * 2);
//   ctx.fill();
//   ctx.closePath();
// }

// function mostraRaquete(x, y) {
//   ctx.fillRect(x, y, raqueteComprimento, raqueteAltura);
// }

// window.requestAnimationFrame(draw);

// setup();
// });

// function preload(){
//   trilha = loadSound("trilha.mp3");
//   ponto = loadSound("ponto.mp3");
//   raquetada = loadSound("raquetada.mp3");
// }

// function setup() {
//   createCanvas(600, 400);
//   trilha.loop();
// }

// function draw() {
//   background(0);
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
// }

// function mostraBolinha(){
//   circle(xBolinha, yBolinha, diametro);
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

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.createElement('canvas');
  document.body.appendChild(canvas);
  canvas.width = 600;
  canvas.height = 400;
  const ctx = canvas.getContext('2d');

  let xBolinha = 300, yBolinha = 200, diametro = 20;
  let velocidadeXBolinha = 6, velocidadeYBolinha = 6;
  let raio = diametro / 2;

  let xRaquete = 5, yRaquete = 150;
  let xRaqueteOponente = 585, yRaqueteOponente = 150;
  let raqueteComprimento = 10, raqueteAltura = 90;

  let meusPontos = 0, pontosOponente = 0;
  let upPressed = false, downPressed = false;

  // Sound effects
  let trilha = new Audio('trilha.mp3');
  let ponto = new Audio('ponto.mp3');
  let raquetada = new Audio('raquetada.mp3');

  // Event listeners for key presses
  document.addEventListener('keydown', event => {
      if (event.key === 'ArrowUp') upPressed = true;
      if (event.key === 'ArrowDown') downPressed = true;
  });

  document.addEventListener('keyup', event => {
      if (event.key === 'ArrowUp') upPressed = false;
      if (event.key === 'ArrowDown') downPressed = false;
  });

  function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drawBall();
      moveBall();
      checkCollisionWithWalls();
      drawPaddle(xRaquete, yRaquete);
      moveMyPaddle();
      drawPaddle(xRaqueteOponente, yRaqueteOponente);
      checkScore();
      moveOpponentPaddle();

      requestAnimationFrame(draw);
  }

  function drawBall() {
      ctx.beginPath();
      ctx.arc(xBolinha, yBolinha, raio, 0, Math.PI * 2);
      ctx.fillStyle = 'white';
      ctx.fill();
      ctx.closePath();
  }

  function moveBall() {
      xBolinha += velocidadeXBolinha;
      yBolinha += velocidadeYBolinha;
  }

  function checkCollisionWithWalls() {
      if (xBolinha + raio > canvas.width || xBolinha - raio < 0) {
          velocidadeXBolinha *= -1;
      }
      if (yBolinha + raio > canvas.height || yBolinha - raio < 0) {
          velocidadeYBolinha *= -1;
      }
  }

  function drawPaddle(x, y) {
      ctx.fillRect(x, y, raqueteComprimento, raqueteAltura);
  }

  function moveMyPaddle() {
      if (upPressed) yRaquete -= 10;
      if (downPressed) yRaquete += 10;
      yRaquete = Math.max(0, Math.min(canvas.height - raqueteAltura, yRaquete));
  }

  function checkScore() {
      if (xBolinha < 0 || xBolinha > canvas.width) {
          if (xBolinha > canvas.width) meusPontos++;
          else pontosOponente++;
          xBolinha = canvas.width / 2;
          yBolinha = canvas.height / 2;
          ponto.play();
      }
  }

  function moveOpponentPaddle() {
      let paddleCenter = yRaqueteOponente + raqueteAltura / 2;
      if (paddleCenter < yBolinha) yRaqueteOponente += 4;
      else if (paddleCenter > yBolinha) yRaqueteOponente -= 4;
  }

  draw();
});
