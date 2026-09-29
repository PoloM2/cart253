/**
 * Rainbow Nut
 * Marko Anastasovski
 * 
 * An acorn that experiences a crazy visual journey
 */

"use strict";

// The Nut in question
let nutImage= {
  // Position and size
  x: 200,
  y: 200,
  size: 200,
  // Colour
  fill: {
    r: 100,
    g: 100,
    b: 100,
  }
};

//Background
let bG = {
    r : 10,
    g : 10,
    b : 10,
}

//trying to add image from images folder
function preload() {
  nut = loadImage("images/nut.png");
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(bG.r, bG.g, bG.b);
  push();
  noStroke();
  fill(nut.fill.r, nut.fill.g, nut.fill.b);
  
//nut/acorn image
  image(nutImage, nut.x, nut.y, nut.size, nut.size);
  nut.fill.r = nut.fill.r + 1;
  nut.fill.g = nut.fill.g + 1;

//The background will shift to various colors. rainbow effect
  bG.g = bG.g- 2;
  bG.b = bG.b- 2;
  bG.r = bG.r+ 1;

 



}