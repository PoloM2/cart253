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
let orbSize = 50;
let colorNumber = 0;
const user = {
  x: undefined, // will be mouseX
  y: undefined, // will be mouseY
  size: 30,
  r: 200,
  g: 42,
  b: 2243,
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

  fill("rgb(186, 140, 238)");
  textAlign(CENTER, BOTTOM);
  textSize(14);
  text("Press A for bigger Brush", 250, 490);

  fill("rgb(179, 247, 21)");
  textAlign(CENTER, BOTTOM);
  textSize(14);
  text("Press S for smaller Brush", 250, 470);

}


function drawUser() {

// house coordiantes and math to simplify  drwaing
let houseX = 250;
let houseY = 270; 
let boxSize = 200; 
let half = boxSize / 2;

let breathing = sin(frameCount * 0.15) * 8;
   push();
   noFill()
   stroke(user.r, user.g, user.b, 60);
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

function keyPressed() {
    if (key === 'a') {
        orbSize = 100;
    } else if (key === 's') {
        orbSize = 10;
    }
}

function mousePressed() {
    colorNumber = colorNumber + 1;

    if (colorNumber === 1) {
        user.r = 255;
        user.g = 255;
        user.b = 255;
    } else if (colorNumber === 2) {
        user.r = 255;
        user.g = 0;
        user.b = 0;
    } else {
        user.r = 200;
        user.g = 42;
        user.b = 243;
        colorNumber = 0;
    }
}