/**
 * Foggy face
 * Marko Anastasovski
 * 
 * HOW EMBARRASSING! The face is foggy and I can't see it! I will have to fix it!
 */

"use strict";

/**
 * Planning to use WebGL to make a foggy face, maybe having it rotate
 * Circles for face and features, and a rectangle for the neck. Will try to use rotate to make it spin.
*/
function setup() {
    createCanvas(1000, 1000, WEBGL);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background("rgb(155, 243, 114)");
    //tried RBG color wheel mechanics and figured out after reading that webgl shifts the oigin point to the center of the canvas instead of the top left corner. I will have to adjust my shapes accordingly in the previous protoype if i manage to fix it.
    fill("rgb(233, 206, 88)");
    circle(0, -100, 600);
}