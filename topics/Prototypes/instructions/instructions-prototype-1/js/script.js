/**
 * Stardust Cruse
 * Marko Anastasovski
 * 
 * A ship crusing through stars ?
 *
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(640, 640);

}


/**
 * A ship a
*/
function draw() {
    background("purple");
    fill("Brown");
    stroke("black");
    strokeWeight(20);
    arc(500, 580, 345,300,0,280, OPEN);
    //star piece 1
    fill ("yellow")
    stroke("gold")
    strokeWeight(10)
    triangle(15,275,115,275,60,350)
    //second star piece
    fill ("yellow")
    stroke("gold")
    strokeWeight(10)
    triangle(15,320,115,320,60,240)
    //ship sails LEARNED TO CHECK P5 REFERENCE TO UNDERSTAND SHAPES AND WHAT ALL THE PARAMETERS MEAN
    rect(600, 400, 20, 100)
    
    

}