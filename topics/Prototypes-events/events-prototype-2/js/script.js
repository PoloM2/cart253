/**
 * Trail Blazer
 * Marko
 * 
 * the user mouse will leave behind a trail, maybe like a drawing
 */

"use strict";

/**
 * making a draw follow user mouse
*/
let orbSize = 10;
const user = {
  x: undefined, // will be mouseX
  y: undefined, // will be mouseY
  size: 30,
  r: 255,
  g: 255,
  b: 255,
}

function setup() {

createCanvas(500, 500);
noSmooth();
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

background(0, 1);


// Move user
  moveUser();

// Draw the user 
  drawUser();



}
function drawUser() {

// house coordiantes and math to simplify  drwaing
let houseX = 250;
let houseY = 270; 
let boxSize = 200; 
let half = boxSize / 2;

let breathing = sin(frameCount * 0.15) * 20;
   push();
   noFill()
   stroke(200, 42, 243, 60);
   strokeWeight(12);
   circle(mouseX, mouseY, orbSize + breathing);
   pop();

push()
noFill();
stroke(42, 142, 243, 80);
strokeWeight(3);
rectMode(CENTER);

//house body
rect(houseX, houseY, boxSize, boxSize);
//roof
line(houseX - half, houseY - half, houseX, houseY - boxSize);
line(houseX + half, houseY - half, houseX, houseY - boxSize);

}





function moveUser() {
  user.x = mouseX;
  user.y = mouseY;
}