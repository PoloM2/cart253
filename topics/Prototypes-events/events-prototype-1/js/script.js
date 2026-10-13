/**
 * Nervous Circle
 * Marko
 * 
 * A circle that reacts to keys when pressed in difference ways.
 */

"use strict";

/**
 * 500 by 500 canvas with noaliasing using nosmooth(), using a LET to track the size of the circle call "ORB",
*/

let orbSize = 50;
const orbColor = {
    r: 42,
    g: 142,
    b: 243,
}


function setup() {

createCanvas(500, 500);
noSmooth();
}


/**
 * circle that reeacts to differet keys when pressed. making suree the background odesnt draw black every frame
*/
function draw() {
    background(0, 10);
    push()
    //i want a breathing effect with a speed of 0.15 and how much it expands by 10
let breathing = sin(frameCount * 0.15) * 10;
    noFill();
    stroke(42, 142, 243, 60);
    strokeWeight(12);
    circle(250, 250, orbSize + breathing);
    
    stroke(orbColor.r, orbColor.g, orbColor.b);
    strokeWeight(3);
    circle(250, 250, orbSize + breathing);
    pop()

//add text for instructions

     fill("2#ffffff");
  textAlign(CENTER, BOTTOM);
  textSize(24);
  text("Press number keys (1 through 5)", 250, 470);
}

//key "1" makes the cirlce go big and key "2" makes it go small.

function keyPressed() {
    if (key === '1') {
        orbSize = 100;
    } else if (key === '2') {
        orbSize = 20;
    } else if (key === '4') {
        
        orbColor.r = 255;
        orbColor.g = 255;
        orbColor.b = 255;
    } else if (key === '5') {
        orbColor.r = 200;
        orbColor.g = 200;
        orbColor.b = 0;
    } else if (key === '3') {
        orbSize = 300;
}
}
let Red = false;

function mousePressed() {

if (Red== false){
    Red = true;
    
}
else{
    Red = false;
}
}
