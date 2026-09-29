/**
 * Rainbow Nut
 * Marko Anastasovski
 * 
 * An acorn that experiences a crazy visual journey
 */

"use strict";

// The Nut in question
let nut= {
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
    r : 250,
    g : 250,
    b : 250,
    speed: 0.02,
    time: 0,
}

let nutImg;{

}
nutImg = loadImage("images/nut.png")

//trying to add image from images folder


function setup() {
  createCanvas(400, 400);
  imageMode(CENTER)
}

function draw() {
  //The background will shift to random colors. rainbow effect
  frameRate(5)
  background(random(0,255),random(0,255),random(0,255));
  push();
  noStroke();
  fill(nut.fill.r, nut.fill.g, nut.fill.b);
  




}