/**
* rainbowballz
* Marko
*
* A ball that bounces around on the canvas
*/

let orbSize = 50;
let colorNumber = 0;
const user = {
  x: undefined, // will be mouseX
  y: undefined, // will be mouseY
  size: 20,
  r: 10,
  g: 42,
  b: 200,
}

const balls = [];
let makeball = false

/**
* Create the canvas and the ball
*/
function setup() {
// Create the canvas
createCanvas(400, 400);

// Create the ball
ball1 = createBall();
ball2 = createBall();
ball3 = createBall();
ball4 = createBall();



}

/**
* Creates a random ball
*/
function createBall() {
// Create a ball object with appropriate properties
const newBall = {
// Position and dimensions
x: 200,
y: 200,
size: 20,
// Colour
fill: [random(255), random(255), random(255)],

// Movement
velocity: {
x: random(-5, 5),
y: random(-5, 5),
}

};
return newBall;
}

/**
* Moves and draws the ball
*/
function draw() {
background("#030503");
noSmooth()
// Move user
  moveUser();

// Draw the user 
  drawUser();

push();
fill("white");
textAlign(CENTER, CENTER);
textSize(30);
text("Keep clicking!", 200, 30);
pop();


for (let ball of balls){
moveBall(ball);
bounceBall(ball);
drawBall(ball);
}

}

/**
* Moves the ball according to its velocity
*/
function moveBall(ball) {
ball.x += ball.velocity.x;
ball.y += ball.velocity.y;
}

/**
* Bounces the ball off the walls
*/
function bounceBall(ball) {
// Check if the ball has reached the left or right
const bounceX = (ball.x > width || ball.x < 0);
// Check if the ball has reached the top or bottom
const bounceY = (ball.y > height || ball.y < 0);

// Handle bouncing horizontally
if (bounceX) {
ball.velocity.x *= -1;
}
// Handle bouncing vertically
if (bounceY) {
ball.velocity.y *= -1;
}
}


/**
* Draw the ball on the canvas
*/

function drawBall(ball) {

push();
noStroke();
ball.fill = [random(255), random(255), random(255)];
fill(ball.fill);
ellipse(ball.x, ball.y, ball.size);
pop();
}

function mousePressed(){
balls.push(ball1)
balls.push(ball2)
balls.push(ball3)
balls.push(ball4)

}


function drawUser() {

let breathing = sin(frameCount * 0.15) * 8;
   push();
   noFill()
   stroke(user.r, user.g, user.b, 250);
   strokeWeight(12);
   circle(mouseX, mouseY, orbSize + breathing);
   pop();
}

function moveUser() {
  user.x = mouseX;
  user.y = mouseY;
}