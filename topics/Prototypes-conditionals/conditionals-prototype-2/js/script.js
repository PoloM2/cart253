/**
 * OPEN THE DOOR NOW!
 * Marko
 * 
 * It a hand that follow th mouse x and y, when it overlaps with the door nob and mouse is clicked, the rect aka door and ellipse aka doornob VANISH aka turn to rgb ZERo in all values.
 */

"use strict";

/**
 * I want a user skin for the mouse pointer, and text that reads " open the door, and the door will open when the user clicks!!
*/
let door = {

    r: 165,
    g: 42,
    b: 42,
}

let nob = {
    x: 200,
    y: 350,
    //color
    r: 67,
    g: 27,
    b: 27,
    size: 20,
}

const user = {
  x: undefined, // will be mouseX
  y: undefined, // will be mouseY
  size: 30,
  fill: "#e7d8a7"
}

function setup() {
createCanvas(500, 500);
}


/**
 * It a hand that follow th mouse x and y, when it overlaps with the door nob and mouse is clicked, the rect aka door and ellipse aka doornob VANISH aka turn to rgb ZERo in all values.
*/
function draw() {
    //house

    background("#a98427");

    fill("black");
    textSize(24);
    textAlign(CENTER, CENTER);
    text("OPEN THE DOOR NOW!", 250, 20);

    //door

    fill(door.r, door.g, door.b);
    stroke("lightbrown");
    strokeWeight(3);
    rect(180, 200, 150, 400);
    
//doornob
   
    fill(nob.r, nob.g, nob.b);  
    
    ellipse(nob.x, nob.y, nob.size);
    
// Move user
  moveUser();

// Draw the user and "crook" bag!
  drawUser();

}

function moveUser() {
  user.x = mouseX;
  user.y = mouseY;
}

function drawUser() {
   push();
   fill(user.fill);
   stroke("black");
   strokeWeight("3");
   ellipse(user.x, user.y, user.size);
   pop();


   
}

function mousePressed() {
const d = dist(mouseX, mouseY,nob.x, nob.y);
const overlap = (d<nob.size/2);
console.log(overlap);
if (overlap) {
door.r = 0;
door.g = 0;
door.b = 0;
nob.r = 0;
nob.g = 0;
nob.b = 0;
}

}