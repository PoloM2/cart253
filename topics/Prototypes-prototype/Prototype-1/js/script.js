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
    w:650,
    h:400,
}; // this will hopefully serve as an area where if the mouse overlaps and mousePressed are both valid, then it will change the ''let scene =' to '=2'.
let treeArea = {
    x: 500,
    y: 140,
    w: 100,
    h: 580, 
}

//animal homes/dens
let denArea = {
    x: 50,
    y: 350,
    w: 300,
    h: 200
}

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
    } else if (scene === 4) {
        drawSceneBear();
    } 


}



//SCENE 1


function drawScene1() {
    rectMode(CORNER); // so apperently rectmode(CENTER) is a global setting and i realised I need to adjust from the start by using CORNER and so forth
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
    fill("#917691");
    rect(500, 580, 50, 300);
    fill("rgb(39, 73, 36)")
    rect(100, 180, 110, 110);
    rect(260, 80, 200, 190);
    rect(630, 90, 150, 150);
    rect(820, 180, 110, 110);
    fill("rgb(209, 162, 206)")
    rect(480, 490, 90, 90);

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


// SCENE 2

function drawScene2() {
     rectMode(CORNER); // so apperently rectMode(CENTER) is a global setting and i realised I need to adjust from the start by using CORNER and so forth
    background("rgb(245, 166, 245)");

    //gradiant effect simple my way
    noStroke();
    fill("rgb(252, 224, 252)");
    ellipse(500, 110, 1300, 350);
    fill("rgb(245, 186, 245)");
    ellipse(500, 320, 1300, 300);

    //background trees
    noStroke();
    fill("#7e657c");
    rect(140, 640, 50, 480);
    rect(880, 670, 50, 450); 

    fill("#2d3a2e");
    rect(110, 540, 100, 100);
    rect(850, 600, 100, 70);
    

    // tall main tree
    noStroke();
    
    fill("rgb(85, 48, 58)")
    rect(500, 140, 100, 580);
    
    //same hovercheck as bushes
    let hoveringTree = isMouseOverTree();
    
    if (hoveringTree) {
        cursor(HAND);
        fill(200, 120, 130);
    } else {
        cursor(ARROW);
        fill("rgb(85, 48, 58)");
    }

    //highlight tree overlap
    noStroke();
    rect(treeArea.x, treeArea.y, treeArea.w, treeArea.h);

    //hill or mountain path up to7 tree
    fill("rgb(138, 5, 56)");
    ellipse(500, 1000, 800, 550);

    fill("rgb(138, 5, 56)");
    ellipse(600, 790, 500, 400);

    fill("rgb(201, 47, 106)");
    ellipse(330, 160, 260, 220);
    ellipse(510, 130, 340, 260);
    ellipse(690, 170, 250, 210);

    fill("rgb(80, 2, 32)");
    ellipse(430, 210, 220, 160);
    ellipse(610, 210, 230, 170);

    //same principle as the bushes but for the tree
    if (hoveringTree) {
        rectMode(CENTER);
        fill(0 , 150);
        noStroke();
        rect(width / 2, 300, 460, 40, 10);

        fill(255);
        textAlign(CENTER);
        textSize(22);
        text("Click to examine the Rooted Tree...", width / 2, 308);
    }
}

//SCENE 3

function drawScene3() {
    rectMode(CORNER);
background("rgb(75, 50, 27)");

    //gradiant effect simple my way
    noStroke();
    
    fill("rgb(138, 5, 56)");
    ellipse(500, 90, 1300, 270);

    
    //roots using bezier for the first time from p5js
    stroke(40, 15, 25);
    strokeWeight(12);
    noFill();
    bezier(500, 200, 400, 250, 250, 300, 80, 550);
    bezier(500, 200, 600, 250, 750, 300, 920, 550);
    bezier(450, 180, 350, 350, 200, 500, 100, 800);
    bezier(550, 180, 650, 350, 800, 500, 900, 800);
    noStroke();

        //tree trunk
    fill(85, 48, 58);
    noStroke();
    rect(410, 0, 180, 228);

    //THE DENS IN QUESTION
    let hoveringDen = isMouseOverDen();
    if (hoveringDen) {
        cursor(HAND);
        fill(200, 120, 130);
    } else {
        cursor(ARROW);
        fill(120, 60, 70);
    }
// the den using the variable's preset attributes 

    ellipse(denArea.x + denArea.w / 2, denArea.y + denArea.h / 2, denArea.w, denArea.h);
    fill(35, 12, 20);
    ellipse(denArea.x + denArea.w / 2, denArea.y + denArea.h / 2, denArea.w - 40, denArea.h - 40);










//definitely reusing this for the other amimals
//the bear (to move around) i drew this after the the highlight and instructions and it was making the position of the bear move when i would hover so that makes more sense now.
    let denCenterX = denArea.x + denArea.w / 2;
    let denCenterY = denArea.y + denArea.h / 2;   //this will find the exact middle of my dens, doesnt matter where denArea x & y are set.

    //BEAR 
    //body
    rectMode(CENTER);
    fill("rgb(60, 30, 35)");   //black for now im thinking of the bear as i go and imagining it//changed to reddish brown
    stroke("black");
    strokeWeight(2);
    rect(denCenterX, denCenterY + 30, 160, 80, 25);
    //head
    ellipse(denCenterX - 45, denCenterY - 5, 75, 65);
    //feet poking out at the bottom
    fill(45, 20, 25);
    ellipse(denCenterX - 60, denCenterY + 55, 60, 30);
    ellipse(denCenterX + 40, denCenterY + 55, 70, 40);
    //ears
    fill("rgb(60, 30, 35)");
    ellipse(denCenterX - 20, denCenterY - 30, 25, 35);
    fill(20, 10, 15);
    ellipse(denCenterX - 20, denCenterY - 30, 15, 25);
    //nose
    fill(20, 10, 15);
    ellipse(denCenterX - 75, denCenterY - 2, 20, 20);
    // havent used arcs in a long time but it should do the trick for eyes to look sleepy
    stroke(20, 10, 15);
    strokeWeight(2);
    noFill();
    arc(denCenterX - 60, denCenterY - 15, 14, 10, 0, PI);
    noStroke();






    // I wanted to move around the den and the text but it's not effiecient enough to always play with the coordinates and try to align them each time so i am going to make 2 variable to calculate the x1&xx2 and y1&y2 of the den area added and div by 2 to center it and added + 40 to make sure its lower then the actual den
    // Instruction Banner at the bottom when hovering
    if (hoveringDen) {
        rectMode(CENTER);
        fill(0, 150);
        noStroke();
        
        // Calculate center based on the den's new position
        let bannerX = denArea.x + denArea.w / 2; // this should make it center everytime
        let bannerY = denArea.y + denArea.h + 40; // right under the den as i said
        
        rect(bannerX, bannerY, 440, 40, 10);
        
        fill(255);
        textAlign(CENTER);
        textSize(18);
        text("Click a sleeping animal to wake them and listen...", bannerX, bannerY + 6);
    }

    


    

}

//



//checks if mouse is overlapping with bushes
function isMouseOverBush() {
    return (
        mouseX > bushArea.x &&
        mouseX < bushArea.x + bushArea.w &&
        mouseY > bushArea.y &&
        mouseY < bushArea.y + bushArea.h
    );
}
function isMouseOverTree() {
    return (
        mouseX > treeArea.x &&
        mouseX < treeArea.x + treeArea.w &&
        mouseY > treeArea.y &&
        mouseY < treeArea.y + treeArea.h
    );
}

//this will enable mouse click if the cursor overalps with bushes and if scene is equal to 1, whihch it wil be, it should then shift to the next draw ( aka scene 2)

function mousePressed() {
    if (scene === 1 && isMouseOverBush()) {
        scene = 2;
    } else if (scene === 2 && isMouseOverTree()) {
        scene = 3;
    } else if (scene === 3 && isMouseOverDen()) {
        scene = 4;
    }
}
//testing if the den area will work
function isMouseOverDen() {
    return (
        mouseX > denArea.x &&
        mouseX < denArea.x + denArea.w &&
        mouseY > denArea.y &&
        mouseY < denArea.y + denArea.h
    );

}
