/**
 * MOODS
 * Marko
 * 
 * ellipse and shapes to make a random face
 */

"use strict";

/**
 * button that gives out random possibilities
*/
function setup() {
    
    createCanvas(500, 500);

}

 

/**
 * FACES need variables
*/
//set default
let mood = 0;
//sets base dimensions for all faces/moods
let faceSize = 100;


//faces and background
function draw() {

    background("black");

   //spacebar instructions with sauce!
    push();
    fill("grey");
    stroke("#FFFFFF");
    strokeWeight(2);
    rect(165, 400, 170, 40);
    
    fill("black");
    noStroke();
    textSize(25);
    textStyle(normal);
    textAlign(CENTER, CENTER);
    text("SPACEBAR", 165, 401, 170, 40);
    pop();

     //mood afffects color of face
    push();
    if (mood === 0) {
        fill("#f3d06ed3"); //happy
    } else if (mood === 1) {
        fill("red"); //upset
    }
    else {
        fill("#a6b6e2");  //surprised
    }

    stroke("grey");
    strokeWeight(3);
    circle(250, 250, faceSize);
    pop();
    fill("#221a08");
    circle(230, 240, 11);
    circle(270, 240, 11);


    function randomMood() {
        return floor(random(0, 3));
    }
//facial features 
    if (mood === 0) {
        arc(250, 260, 40, 25, 0, PI); //happy
    }
    else if (mood === 1) {
        arc(250, 275, 40, 25, PI, TWO_PI); //upset , by reversing the happy mouth with math
    }
    else {
        ellipse( 250, 265, 15, 25); //surprised
    }

}
//randomizer for diff moods
function randomMood() {
        return floor(random(0, 3));
    }

// key for changing moods
function keyPressed() {
    if (key === " ") {
        mood = randomMood();
    }
}