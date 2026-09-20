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
    //I will disable the smoothness
    noSmooth();
    background("rgb(155, 243, 114)");
    //tried RBG color wheel mechanics and figured out after reading that webgl shifts the oigin point to the center of the canvas instead of the top left corner. I will have to adjust my shapes accordingly in the previous protoype if i manage to fix it.
    //logically a rectangle for the neck should replace the diameter setting for 2 new parameters for width and height?
    //onto the features of the face
    fill("rgb( 233, 206, 88)");
    stroke("black");
    strokeWeight(8);
    rect(-142.5, 160, 280, 200);
    //moved the head to the front , maybe there is a shortcut or more efficient way than copy pasting the code around.
    fill("rgb(233, 206, 88)");
    circle(0, -100, 600);
    //made the neck
    fill("white");
    stroke("black");
    strokeWeight(8);
    circle(-100, -120, 100);
    stroke("black");
    strokeWeight(8);
    circle(100, -100, 100);
    //pupils
    fill("blue");
    stroke("black");
    strokeWeight(10);
    circle(-100, -100, 50);
    fill("red");
    stroke("black");
    strokeWeight(10);
    circle(100, -100, 50);
    //pupils
    //now the mouth
    fill ("red");
    stroke("black");
    strokeWeight(10);
    arc(0, 50, 300, 250, 0, PI);
    
}