import React, { useEffect, useRef } from 'react';
import p5 from 'p5';

const MoonLander = () => {
  const canvasRef = useRef(null);
  const initializedRef = useRef(false);

  useEffect(() => {
    if (!initializedRef.current) {
      initializedRef.current = true;
      const sketch = (p) => {
        let lander;
        let ground;

        const FUEL_CAPACITY = 500;
        const FUEL_CONSUMPTION = 1;
        const GRAVITY = 0.05;

        p.setup = () => {
          p.createCanvas(600, 400).parent(canvasRef.current);
          lander = new Lander(p, FUEL_CAPACITY);
          ground = new Ground(p);
        };

        p.draw = () => {
          p.background(0);

          // Update and display lander
          lander.update();
          lander.display();

          // Display ground
          ground.display();

          // Check for collision with ground
          if (lander.collidesWith(ground)) {
            lander.stop();
          }

          // Check for landing on the safe platform
          if (lander.isOnSafePlatform(ground)) {
            lander.land();
          }
        };

        class Lander {
          constructor(p, fuelCapacity) {
            this.p = p;
            this.pos = p.createVector(p.random(p.width), 50);
            this.vel = p.createVector(0, 0);
            this.acc = p.createVector(0, GRAVITY);
            this.size = 20;
            this.isStopped = false;
            this.isLanded = false;
            this.fuel = fuelCapacity;
            this.keysPressed = {};
          }

          applyForce(force) {
            if (!this.isStopped) {
              this.acc.add(force);
            }
          }

          update() {
            if (!this.isStopped && !this.isLanded) {
              this.applyForce(p.createVector(0, GRAVITY)); // Gravity

              // Consume fuel for movement
              if (this.keysPressed[p.LEFT_ARROW] && this.fuel > 0) {
                this.vel.x -= 0.1;
                this.fuel -= FUEL_CONSUMPTION;
              } else if (this.keysPressed[p.RIGHT_ARROW] && this.fuel > 0) {
                this.vel.x += 0.1;
                this.fuel -= FUEL_CONSUMPTION;
              }

              if (this.keysPressed[p.DOWN_ARROW] && this.fuel > 0) {
                this.vel.y -= 0.1;
                this.fuel -= FUEL_CONSUMPTION;
              }

              this.vel.add(this.acc);
              this.pos.add(this.vel);
              this.acc.mult(0);
            }
          }

          display() {
            this.p.fill(255);
            this.p.rectMode(this.p.CENTER);
            this.p.rect(this.pos.x, this.pos.y, this.size, this.size);
            this.p.text(`Fuel: ${this.fuel}`, 10, 20);
          }

          collidesWith(other) {
            return (
              this.pos.y + this.size / 2 >= other.y && this.pos.x >= other.x && this.pos.x <= other.x + other.width
            );
          }

          stop() {
            this.isStopped = true;
          }

          land() {
            this.isLanded = true;
            this.isStopped = true;
            console.log("Landed safely!");
          }

          isOnSafePlatform(ground) {
            const safePlatformStart = ground.safePlatformStart;
            const safePlatformEnd = ground.safePlatformEnd;
            return (
              this.pos.y + this.size / 2 >= ground.y && this.pos.x >= safePlatformStart && this.pos.x <= safePlatformEnd
            );
          }

          keyPressed(key) {
            this.keysPressed[key] = true;
          }

          keyReleased(key) {
            delete this.keysPressed[key];
          }
        }

        class Ground {
          constructor(p) {
            this.p = p;
            this.y = p.height - 10;
            this.width = p.width;
            this.height = 10;
            this.generateGround();
          }

          generateGround() {
            const platformWidth = 100;
            const platformX = Math.floor(Math.random() * (this.p.width - platformWidth));
            this.safePlatformStart = platformX;
            this.safePlatformEnd = platformX + platformWidth;
          }

          display() {
            this.p.fill(100);
            this.p.rect(0, this.y, this.width, this.height);
            this.p.fill(0, 255, 0);
            this.p.rect(this.safePlatformStart, this.y, this.safePlatformEnd - this.safePlatformStart, this.height);
          }
        }

        p.keyPressed = () => {
          lander.keyPressed(p.keyCode);
        };

        p.keyReleased = () => {
          lander.keyReleased(p.keyCode);
        };
      };

      new p5(sketch);
    }
  }, []);

  return <div ref={canvasRef}></div>;
};

export default MoonLander;