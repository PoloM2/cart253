/**
 * Hide the stash!
 * Marko Anastasovski
 * 
 * A criminal is about get caught with the stash! Help him stow it away for later!
 */

"use strict";

/**
 * const for criminal and cash bag, follows mouse to push bag out of scene when overlapping.
*/

let r = 0
//crook  is for the money bag that the "crook" will stow away
const crook = {
  x: 200,
  y: 200,
  size: 100,
  fill: "#2ea111e5"
};

const user = {
  x: undefined, // will be mouseX
  y: undefined, // will be mouseY
  size: 60,
  fill: "#665757"
};

/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);
}

/**
 * Move the user circle, check for overlap, draw the two circles
 */
function draw() {
  frameRate(8)
  background(r, 0, 255 - r);
  r = (r + 100) %255;

  push();


// Move user and "crook" bag"!
  moveUser();

  movecrook();

// Draw the user and "crook" bag!
  drawUser();
  drawcrook();
}

//mouse follows character

function moveUser() {
  user.x = mouseX;
  user.y = mouseY;
}

/**
 * Displays the user circle
 */
function drawUser() {
  push();
  fill(user.fill);
  stroke("black");
  strokeWeight("3");
  ellipse(user.x, user.y, user.size);
  pop();

}

/**
 * Displays the puck circle
 */
function drawcrook() {
  push();
  noStroke();
  fill(crook.fill);
  ellipse(crook.x, crook.y, crook.size);
  pop();
  fill("#131111");
  textAlign(CENTER, CENTER);
  textSize(100);
  text("$", crook.x, crook.y);
}

function movecrook() {
  //distance between crook and user
  const d = dist(user.x, user.y, crook.x, crook.y);

  const overlap = (d < user.size / 2 + crook.size / 2);

  if (overlap) {
    let positiondifferncex = user.x - crook.x
    let positiondifferncey = user.y - crook.y
    if (positiondifferncex < 0) {
      crook.x = crook.x + 2
    }
    if (positiondifferncex > -1) {
      crook.x = crook.x - 2
    }
    if (positiondifferncey < 0) {
      crook.y = crook.y + 2
    }
    if (positiondifferncey > -1) {
      crook.y = crook.y - 2
    }
  }
}