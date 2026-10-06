/**
 * Hide the stash!
 * Marko Anastasovski
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * constants for the mouse and object,
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
  size: 75,
  fill: "#000000"
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


// Move user 
  moveUser();

// move crook
  movecrook();

// Draw the user and "crook"
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
  noStroke();
  fill(user.fill);
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