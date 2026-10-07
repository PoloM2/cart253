/**
 * Score It!
 * Marko
 * 
 * a football field, move the BALL using the mouse to insert it into the goal and CLICK to SCORE!
 */

"use strict";

/**
 * not sure 
*/
//goal  hitbox!

let bg = {
//color
    r: 27,
    g: 92,
    b: 32,

}

let goal = {
    x: 106,
    y: 19,
    h: 288,
    w: 90,
    //color
    r: 27,
    g: 120,
    b: 32,
    
}

const user = {
    
    x: undefined, // will be mouseX
    y: undefined, // will be mouseY
    size: 30,
    fill: "#fffefa"
}


function setup() {
createCanvas(500, 500);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

background(bg.r, bg.g, bg.b);

fill("black");
    textSize(30);
    textAlign(CENTER, CENTER);
    textStyle(BOLD)
    text("Drag and click to score!", 250, 470);

 stroke(255);
  strokeWeight(12);
  noFill();
  
  // GOAL!
  rect(100, 10, 300, 200);
  //making the rect partially empty
  fill("#1b5c20");
  stroke("#1b5c20");
  rect(100, 120, 300, 200);
  
  //HALF COURT!
  stroke(255);
  strokeWeight(12);
  noFill();
  ellipse(250,350, 150);
  line(0, 350, 170, 350);
  line(330, 350, 500, 350);

  //draw goal hit box

  fill(goal.r, goal.g, goal.b);
  noStroke();
  rect(goal.x, goal.y, goal.h, goal.w);

// Move user

  moveUser();

// Draw the user

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
    // Math updated to match your horizontal drawing layout
    const overlap = (mouseX > goal.x && mouseX < goal.x + goal.h && mouseY > goal.y && mouseY < goal.y + goal.w);
    
    console.log(overlap);
    if (overlap) {
        goal.r = 253;
        goal.g = 253;
        goal.b = 150;
    }
}