/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(640, 640);

    // fill("red");
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    
    background("orange");
    fill(255,200,110);
    stroke(255,213,128)
    ellipse(320,500,345);
    fill("lightyellow");
    stroke("red")
    ellipse(320,500,280);
    //mountain 1
    fill("grey")
    stroke(255,200,110)
    triangle(350,475,550,475,450,200)
     //mountain 2
    fill("grey")
    stroke(255,200,110)
    triangle(450,475,750,475,550,300)
    // Ground green
    fill("darkgreen")
    stroke("green")
    rect(0, 475, 640, 300)

    // tree
    push();
    fill ("#0eb31f")
    stroke("black")
    triangle(0,475,100,475,50,350)
    pop();
    // tree left
    push();
    fill ("#0eb31f")
    stroke("black")
    triangle(150,475,250,475,200,350)
    pop();

    // background(640,600,480)
    push();
    fill ("#0eb31f")
    stroke("black")
    triangle(550,475,650,475,600,350)
    pop();

    // Write stuff here that makes a landscape
}