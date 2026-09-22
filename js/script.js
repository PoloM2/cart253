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
    background("#d800bb");
    fill("white");
    stroke("black");
    rect(470, 120, 180, 280);
    fill("brown");
    stroke("black");
    strokeWeight(20);
    arc(500, 580, 345,300,0,280, OPEN);
    //star piece 1
    fill ("yellow");
    stroke("gold");
    strokeWeight(10);;
    triangle(15,275,115,275,60,350);
    //second star piece
    fill ("yellow");
    stroke("gold");
    strokeWeight(10);
    triangle(15,320,115,320,60,240);
    //ship sails LEARNED TO CHECK P5 REFERENCE TO UNDERSTAND SHAPES AND WHAT ALL THE PARAMETERS MEAN
    fill("brown");
    stroke("brown");
    strokeWeight(4);
    rect(600, 400, 30, 260);
    
    //TRIED ROTATE FUNCTION TO ROTATE SHAPES FOR SHIP SAIL BEAM will ask help   rotate(quarter_PI);
    //will attempt on fresh slate ( prototype 2 ) to see if I can get it to work.
    
    //added sails to ship, moving to next project rotate" and WebGL
    //not seeing logged changes in github, will check to see if I need to push changes to github.
    // projet is blank and i dont see te problem. i seemed to have lost progress. Somehow lost my files and ressources from the template will paste code into a fresh download.
}
