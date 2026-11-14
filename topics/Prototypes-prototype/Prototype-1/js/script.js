/**
 * ROOTED
 * Marko Anastasovski
 * 
 * A scenery of bushes and trees, clciking on the bushes takee you to another view of a tall tree, click on this  tree takes you to the ROOTED TREE, wheere little animals lie and sleep within the roots, click on them to awaken them and unlock dialogue. optionally go back and click on another animal for more wisdom.
 */

"use strict";

let scene = 1 // sets scene value to one so it always starts with the bushes where you click and get lead to the second scene.
let bushArea = {
    x:150,
    y:600,
    w:700,
    h:400,
}; // this will hopefully serve as an area where if the mouse overlaps and mousePressed are both valid, then it will change the ''let scene =' to '=2'.


/**
 * scenes 1 to 3 ( maybe the scenes where a clsoe uop of the animal is drawn and it talkwith a text bubble)
*/
function setup() {

    createCanvas(1000,1000);
}


/**
 * sepaking of the close ups of the animals, i realised its simper andunavoidable for me to just create functions that draw the scenes and kind of load them
*/
//checks if its on scene 1, so it draws it first connects to LET scene, and for the rest etc
function draw() {
    if (scene === 1) {
        drawScene1();
    } else if (scene === 2) {
        drawScene2(); //loads this draw which i will make nexxt
    } else if (scene === 3) {
        drawScene3();
    }

}
//scene 1
function drawScene1() {
    rectMode(CORNER);
    background("rgb(245, 166, 245)");
    //gradiant effect simple my way
    noStroke();
    fill("rgb(252, 224, 252)");
    ellipse(500, 120, 1300, 350);
    fill("rgb(245, 186, 245)");
    ellipse(500, 320, 1300, 300);
    //background trees
    noStroke();
    fill("#4e314c");
    rect(120, 180, 45, 620);
    rect(340, 120, 60, 680);
    rect(680, 150, 50, 650);
    rect(860, 200, 40, 600);
    //branchees and bigger trees
    fill(45, 35, 30);
    rect(0, 0, 108, 850);
    rect(893, 0, 108, 850);
    //
    stroke(45, 35, 30);
    strokeWeight(14);
    line(110, 250, 280, 150);
    line(900, 320, 730, 210);
    noStroke();
    //grass/ground
    fill("rgb(138, 5, 56)");
    ellipse(500, 920, 1300, 350);

    //bushes that will be pressable made from ellipses that overlap
    let hoveringBushes = isMouseOverBush();
    //this will hopefully let me know if the overlap is being registered
    if (hoveringBushes) {
        cursor (HAND);
        fill(45, 85, 65);
    } else {
        cursor(ARROW);
        fill(ARROW);
        fill(30, 60, 45);
    }

    //the bushes in question
    
    ellipse(320, 830, 260, 220);
    ellipse(500, 800, 340, 260);
    ellipse(680, 840, 250, 210);

    fill(20, 45, 35);
    ellipse(410, 870, 220, 160);
    ellipse(590, 870, 230, 170);

    if (hoveringBushes) {
        rectMode(CENTER);
        fill(0, 150); // background for text readability   
        noStroke();
        rect(width / 2, 632, 420, 40, 10);
        
        fill(255);
        textAlign(CENTER);
        textSize(22);
        text("Click to push through the bushes...", width / 2, 640);
    }
}

//checks if mouse is overlapping with bushes
function isMouseOverBush() {
    return (
        mouseX > bushArea.x &&
        mouseX < bushArea.x + bushArea.w &&
        mouseY > bushArea.y &&
        mouseY < bushArea.y + bushArea.h
    );
}

//this will enable mouse click if the cursor overalps with bushes and if scene is equal to 1, whihch it wil be, it should then shift to the next draw ( aka scene 2)

function mousePressed() {
    if (scene === 1 && isMouseOverBush()) {
        scene = 2;
    }
}
