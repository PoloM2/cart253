/**
 * Title of Project
 * Marko
 * 
 * 
 */

"use strict";

let game = true

let ball = {
    x: 250,
    y: 0,
    size: 80,
    speed: 2,
    r: 1,
    g: 9,
    b: 9,
}

let floor = {

    x: 0,
    y: 450,
    size: 500,
    r: 1,
    g: 2,
    b: 3,


}



/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(500, 500);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    
    background("#407265");

    push();
    noStroke();
    fill(floor.r, floor.g, floor.b);
    rect(floor.x, floor.y, floor.size, 45);
    pop();

    push();
    fill(ball.r, ball.g, ball.b);
    ellipse(ball.x, ball.y, ball.size);

    //check
    if (ball.y + ball.size / 2 >= floor.y) {
        game = false
    }

    if (game === false) {

        push();
        fill("red");
        textSize(64);
        text("YOU LOSE MF", 50, 250);
        pop();
    }
}

function mousePressed() {
    const d = dist(mouseX, mouseY, ball.x, ball.y);
    const overlap = (d < ball.size / 2);
    


}

