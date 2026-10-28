/**
 * Protect the human
 * Marko
 * 
 * fight off the aliens with a shield,
 */

"use strict";
let r = 0
// Our ball
let enemies = [];
let speedBoost = 0;


//ball numnber 2
const ball2 = {
    x: 100,
    y: 50,
    width: 14,
    height: 13,
    velocity: {
        x: 3,
        y: 5
    }
};

// Our paddle
const paddle = {
    x: 300,
    y: 200,
    width: 30,
    height: 8
};

/**
 * Create the canvas
*/
function setup() {
    createCanvas(600, 300);
}


function createEnemy() {

    speedBoost += 20

    return {
        x: random (60, width - 60),
        y: 0,
        width: 14,
        height: 15,
        velocity: {
            x: random(-2, 2),
            y: random(3, 6),
        }
    }
}

/**
 * Move and spawn   the enemies and the paddle
*/
function draw() {
    frameRate(25)
  background(r, 0, 20 - r);
  r = (r + 5) %255;
//alert! code red!

fill("#ffefef");
text("CODE RED!!!", 300, 20);
textAlign(CENTER, CENTER);
textSize(20);
textStyle(normal);
//spaceship walls
  fill("grey");
  rect(0, 0, 50, 300);
  fill("grey");
  rect( 550,0,50,300);
push();

//human face
  fill("#619fc9");
  stroke("white");
  strokeWeight(4);
  ellipse(300, 280, 40, 40);

  //face of the humann
  fill("black");
  noStroke();
  textStyle(normal);
  textSize(16);
  textAlign(CENTER, CENTER);
  text("0_0'", 300, 280);

  fill("white");
  noStroke();
  rect(309, 295, 50, 10);
  pop();



    movePaddle(paddle);
//to see if framecount is divisible by 25 = making enemies spawn each second
   if (frameCount % 25 === 0) {
    enemies.push(createEnemy());
   }

   for (let enemy of enemies) {
    moveBall(enemy);
    handleBounce(enemy, paddle);
    drawBall(enemy);
   }

   drawPaddle(paddle);
}



/**
 * Moves the paddle
 */
function movePaddle(paddle) {

    paddle.x = constrain(mouseX,paddle.width / 2,width - paddle.width / 2);

}

/**
 * Moves the ball passed in as a parameter
 */
function moveBall(ball) {
    ball.x += ball.velocity.x
    ball.y += ball.velocity.y + speedBoost

    if (ball.x <= 57 || ball.x >= 543) {
    ball.velocity.x *= -1;}
}

//enemies react walls
if (ball.x <= 57 || ball.x >= 543) {
    ball.velocity.x *= -1;
}

/**
 * Bounces the provided ball off the provided paddle, reverse direction and repos
 */
function handleBounce(ball, paddle) {

    if (checkOverlap(ball, paddle) && ball.velocity.y > 0) {

        ball.velocity.y = ball.velocity.y * -1;

        ball.y = paddle.y - (paddle.height / 2) - (ball.height / 2);
    }
}


function checkOverlap(rectA, rectB) {
    return (rectA.x + rectA.width/2 > rectB.x - rectB.width/2 && 
            rectA.x - rectA.width/2 < rectB.x + rectB.width/2 && 
            rectA.y + rectA.height/2 > rectB.y - rectB.height/2 && 
            rectA.y - rectA.height/2 < rectB.y + rectB.height/2);
}

/**
 * Draws the specified paddle on the canvas
 */
function drawPaddle(paddle) {
    push();
    rectMode(CENTER);
    noStroke();
    fill("#21f8ff");
    rect(paddle.x, paddle.y, paddle.width, paddle.height);
    pop();
}

/**
 * Draws the balls /enemies
 */
function drawBall(ball) {
    push();
    rectMode(CENTER);
    stroke("black");
    fill("green");
    rect(ball.x, ball.y, ball.width, ball.height);
    pop();
}
