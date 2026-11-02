/**
 * npc
 * Marko
 * 
 * with the press of the Spacebar, making the character display different texts, all being added to an array.
 * 
 */

"use strict";

/**
 *blue canvas 500x500 bgd, 
*/

//makes an array for the npc's messages
let messages = ["I'm Tired!", "Take a break", "Hello there!", "Take a breath", "SURPRISE MF!!!!", "ANOTHER OFF SUBJECT MESSAGE"];
let currentMessage = "Press SPACEBAR !";


function setup() {
createCanvas(500, 500);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

    background(30);
    // face
    fill("#f5b746");
    circle(250,200,100);
    //eyes
    fill("black");
    circle(230, 190,10);
    circle(270, 190,10);
    //mouth
    noFill();
    stroke("black");
    arc(250,215,40,25,0,PI);
    //instructions
    fill("white");
    noStroke();
    textAlign(CENTER);
    textSize(18);
    text(currentMessage, 250, 350);
}

//space bar function

function keyPressed() {
    if (key === " "){
 
    let index = floor(random(messages.length));
    currentMessage = messages[index];
    }

}