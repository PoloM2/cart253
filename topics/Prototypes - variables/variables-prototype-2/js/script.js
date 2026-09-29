/**
 * Rainbow Nut
 * Marko Anastasovski
 * 
 * An acorn that experiences a crazy visual journey
 */

"use strict";

// The Nut in question
let img;

async function setup() {
  // Load the image.
  img = await loadImage('/images/nut.png');

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