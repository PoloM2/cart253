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
 * circle that reeacts to differet keys when pressed.
*/
function draw() {
    background("black");

    noFill();
    stroke(orbColor.r, orbColor.g, orbColor.b);
    strokeWeight(3);
    circle(250, 250, orbSize);
}

//key "1" makes the cirlce go big and key "2" makes it go small.

function keyPressed() {
    if (key === '1') {
        orbSize = 300;
    } else if (key === '2') {
        orbSize = 20;
    } else if (key === '3') {
        
        orbColor.r = 255;
        orbColor.g = 255;
        orbColor.b = 255;
    } else if (key === '4') {
        orbColor.r = 42;
        orbColor.g = 142;
        orbColor.b = 243;
    }
}
