/**
 * Spinning Blue Blur
 * Marko Anastasovski
 * 
 * A spinning blue circle, and a spining background made with rectangle and spining lines.
 */

"use strict";

// The blue blur charges his attack
let ball = {
  // Position and size
  x: 200,
  y: 200,
  size: 200,
  // Colour
  fill: {
    r: 0,
    g: 0,
    b: 225,
  }
};

//the sky is darkening, the clouds are gathering, and Mr. Furious is getting madder and madder.
let bG = {
    r : 10,
    g : 10,
    b : 250,
}
/**
 * 
 */
function setup() {
  createCanvas(400, 400);
}

/**
 * Draw (and update) Mr. Furious
 */
function draw() {
  background(bG.r, bG.g, bG.b);
  push();
  noStroke();
  fill(ball.fill.r, ball.fill.g, ball.fill.b);
  

  ellipse(random(-50, 50)+ random(-50, 50), ball.y, ball.size);
  pop();
  ball.fill.r = ball.fill.r - 1;
  ball.fill.g = ball.fill.g - 1;

//making an affect to showcase impact of charging attack
  bG.g = bG.g- 2;
  bG.b = bG.b- 2;
  bG.r = bG.r+ 1;
//grass
fill("green");
rect(0, 300, 400, 305);
 



}