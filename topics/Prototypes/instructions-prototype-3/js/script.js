/**
 * Spinning Blue Blur
 * Marko Anastasovski
 * 
 * A spinning blue circle, and a spining background made with rectangle and spining lines.
 */

"use strict";

/**
 * Green rect for Background, Blue cirle for hedghog, Black lines for spinning background effect
*/
function setup() {
    
createCanvas(1000, 1000, WEBGL);

}


/**
 * It will be a spinning blue circle, and a spining background made with rectangle and spining lines.
*/
function draw() {
    background("rgb(59, 158, 13)");

    fill("blue");
    stroke("blue");
    circle(0, 0, 100);
}