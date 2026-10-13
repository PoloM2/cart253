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



function setup() {

createCanvas(500, 500);
noSmooth();
}


/**
 * circle that reeacts to differet keys when pressed.
*/
function draw() {
    background("black");

    fill("rgb(42, 142, 243)");
    noStroke();
    circle(250, 250, orbSize);
}


function keyPressed() {

    orbSize += 10;
}