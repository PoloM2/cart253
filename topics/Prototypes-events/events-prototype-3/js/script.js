/**
 * Don't Wake It!
 * Marko
 * 
 * This background image with have aa circle that covers the eye intitally, once you press spacebar once the circle shrinks to a small iris giving off the illusion of the eye opening...the more you presss the more the creature gets upset.
 */

"use strict";

/**
 * A variable for my background (IMAGE), pressing SPACEBAR wakes it up!
*/
//the eye variables

let trail = []
let eyeSize = 100;
let awakened = false;

//the eye anger

let anger = 0;
let shake = 0;

let backgroundImg;

async function preload() {

    backgroundImg = await loadImage("assets/images/dontwakeit1.jpg");
  }

async function setup() {
  createCanvas(500, 500);
  noSmooth();
  await preload();
  imageMode(CENTER);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

    shake = anger * 2;
    translate(random(-shake, shake), random(-shake, shake));

    image(backgroundImg, 250, 250, 240, 240);

    let breathing = sin(frameCount * (0.05 + anger * 0.03)) * (0.08 + anger *2);
    if (awakened) {
    fill("red");
    stroke("red");
} else {
    fill("black");
    stroke(0, 0, 0);
}
    circle(246, 255, eyeSize + breathing);

}

function keyPressed() {
    if (key === ' ') {
        awakened = true;
        eyeSize = 12;
        anger++;
    }
}