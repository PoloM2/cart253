/**
 * ROOTED
 * Marko Anastasovski
 * 
 * A scenery of bushes and trees, clicking on the bushes takee you to another view of a tall tree, click on this  tree takes you to the ROOTED TREE, wheere little animals lie and sleep within the roots, click on them to awaken them and unlock dialogue. optionally go back and click on another animal for more wisdom.
 */

"use strict";
//now for sound
let song; //theme song
let buttonClick; //mouse click

//BEAR STUFF
let bearSound;
let bearLines = [
    "Zzzz... Ohh, are you the masseuse I booked ?",
    "Ah... It's you again, you look...Different...",
    "Go bother my friends, I have Honey to Taste-Test",
    "SCRAM!",
    "*Farts*",
    "My man...",
    "LEAVE ME BE!",
    "I'm running out of things to say",
    "FINE! Break the immersion!",
    "Wait !!!", "Lemme say one more line before looping back!", "Have you seen Lady Gala ?","Boy I miss my Lady", "Okay go... NOW!",
    "Zzzzz..."
];
let currentBearLine = 0;

//MOLE STUFF
let moleSound;

let moleLines = [
    "Zzzz....galaaa",
    "*YAWN AGGRESSIVELY*",
    "GALAAAA!?!",
    "Ugh... Was having the dream of me life",
    "'Who's Gala' ?... Noone...I mean..ugh",
    "Never heard of her, or him....",
    "Im going back to sleep...",
    "Take 33 away from 100, what are they?",
    "ZZzzz....Gala?",
    "*The mole snores and dreams...",
    "...Of things it's never seen"
];
let currentMoleLine = 0;


///ANIMAL 3 STUFF
//let animal3Sound;

let animal3Lines = [
    "Yawn... oh, a visitor among the roots!",
    "Placeholder wisdom 1 for Animal 3.",
    "Placeholder wisdom 2 for Animal 3."
];
let currentAnimal3Line = 0;

//backward buton from animal to roots scene
let backButton = {
    x: 50,
    y: 50,
    w: 120,
    h: 50
}
let scene = 1 // sets scene value to one so it always starts with the bushes where you click and get lead to the second scene.
//cursor mechnanics
let cursorType = "arrow";


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
//SCENE 3 DENS
//bear
let denArea = {
    x: 50,
    y: 350,
    w: 300,
    h: 200
}
//Mole
let den2Area = {
    x: 650,
    y: 350,
    w: 300,
    h: 200
};
//animal3
let den3Area = {
    x: 350,
    y: 680,
    w: 300,
    h: 200
};


//loads the sound

function preload() {
    song = loadSound('assets/sounds/animaljam.mp3');
    buttonClick = loadSound('assets/sounds/buttonclick.wav');
    bearSound = loadSound('assets/sounds/bear.mp3') //bear when clicking den and on him for dialogue
    moleSound = loadSound('assets/sounds/mole.mp3')// mole when clicking den and on him for dialogue
}
/**
 * scenes 1 to 3 ( maybe the scenes where a clsoe uop of the animal is drawn and it talkwith a text bubble)
*/
function setup() {
    createCanvas(1000,1000);
    noCursor();
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
    } else if (scene === 5) {
        drawSceneMole();
    } else if (scene === 6) {
        drawSceneBunny();
    }

//cursor draw
    if (cursorType === "hand") {
        drawHandCursor();
    } else {
        drawArrowCursor();
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
        cursorType = "hand";
        fill(45, 85, 65);
    } else {
        cursorType = "arrow";
        fill(30, 60, 45);
    }

    //the bushes in question
    
    ellipse(320, 830, 260, 220);
    ellipse(500, 800, 340, 260);
    ellipse(680, 840, 250, 210);

    if (hoveringBushes) {
        fill(35, 70, 55);
    } else {
        fill(20, 45, 35);
    }
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
    
    //same hovercheck as bushes
    let hoveringTree = isMouseOverTree();
    // tall main tree
    noStroke();
    if (hoveringTree) {
        cursorType = "hand";
        fill(200, 120, 130);
    } else {
        cursorType = "arrow";
        fill("rgb(85, 48, 58)");
    }
    rect(500, 140, 100, 580);
    
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
        fill(235, 110, 160);
    } else {
        fill("rgb(201, 47, 106)");
    }
    ellipse(330, 160, 260, 220);
    ellipse(510, 130, 340, 260);
    ellipse(690, 170, 250, 210);

    //lower leaves
    if (hoveringTree) {
        fill(150, 40, 80);
    } else {
        fill("rgb(80, 2, 32)");
    }
    ellipse(430, 210, 220, 160);
    ellipse(610, 210, 230, 170);
    
    if (hoveringTree) {
        rectMode(CENTER);
        fill(0, 150);
        noStroke();
        rect(width / 2, 300, 460, 40, 10);

        fill(255);
        textAlign(CENTER);
        textSize(22);
        text("Click to examine the Rooted Tree...", width / 2, 308);
    } // accidentally deleted this so i had to go to the logs

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
    let hoveringDen2 = isMouseOverDen2();
    let hoveringDen3 = isMouseOverDen3();

    if (hoveringDen || hoveringDen2 || hoveringDen3) { //removed fill because it would interfere with hovering effects
        cursorType = "hand";
    } else {
        cursorType = "arrow";
        fill(120, 60, 70);
    }

// den 1 using the variable's preset attributes 
    if (hoveringDen) {
        fill(200, 120, 130);
    } else {
        fill(120, 60, 70);
    }

    ellipse(denArea.x + denArea.w / 2, denArea.y + denArea.h / 2, denArea.w, denArea.h);
    fill(35, 12, 20);
    ellipse(denArea.x + denArea.w / 2, denArea.y + denArea.h / 2, denArea.w - 40, denArea.h - 40);

//den 2
     if (hoveringDen2) {
        rectMode(CENTER);
        fill(0, 150);
        noStroke();

        let bannerX = min(den2Area.x + den2Area.w / 2, width - 220);
        let bannerY = den2Area.y + den2Area.h + 40;

        rect(bannerX, bannerY, 440, 40, 10);

        fill(255);
        textAlign(CENTER);
        textSize(18);
        text("Click a sleeping animal to wake them and listen...", bannerX, bannerY + 6);
    }
    
    
//MOLE
    let den2CenterX = den2Area.x + den2Area.w / 2;
    let den2CenterY = den2Area.y + den2Area.h / 2;
    fill(180, 140, 100);
    ellipse(den2CenterX, den2CenterY + 10, 110, 70);

//den 3

    if (hoveringDen3) {
        fill(200, 120, 130);
    } else {
        fill(120, 60, 70);
    }
    ellipse(den3Area.x + den3Area.w / 2, den3Area.y + den3Area.h / 2, den3Area.w, den3Area.h);
    fill(35, 12, 20);
    ellipse(den3Area.x + den3Area.w / 2, den3Area.y + den3Area.h / 2, den3Area.w - 40, den3Area.h - 40);
    //Bunny
    let den3CenterX = den3Area.x + den3Area.w / 2;
    let den3CenterY = den3Area.y + den3Area.h / 2;
    fill(140, 160, 130);
    ellipse(den3CenterX, den3CenterY + 10, 110, 70);

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
//BEAR CLOSE UP SCENE
}
  function drawSceneBear() {
    // I want the face to be a big ellipse, same colors. so ill reuse the previous code based on my needs. this time hopefully it will actually look like a bear.
    rectMode(CORNER);
    background("rgb(75, 50, 27)");
    fill("rgb(60, 30, 35)");
    ellipse(500, 500, 700, 600);
    //ears went pretty smoothly
    fill("rgb(60, 30, 35)");
    ellipse(250, 250, 300, 300);
    ellipse(750, 250, 300, 300);
    //inside of the ears
    fill("rgb(31, 15, 18)");
    ellipse(250, 250, 200, 200);
    ellipse(750, 250, 200, 200);
    //ended up moving the head to the front 
    //the ears look more realistic and it is satisfying
    fill("rgb(60, 30, 35)");
    ellipse(500, 500, 700, 600);
    //nose same code as ealier for color
    fill(20, 10, 15);
    ellipse(500, 600, 200, 100);
    //eyes
    fill("black");
    //left eye
    ellipse(345, 400, 110, 110);
    //right eye
    ellipse(645, 400, 110, 110);
    //details eyes
    fill("white");
    //left eye detail
    ellipse(370, 380, 20, 20);
    //rigth eye detail
    ellipse(670, 380, 20, 20);
    //left eye detail 2
    ellipse(330, 400, 50, 50);
    //rigth eye detail 2
    ellipse(630, 400, 50, 50); 
    //same as mouth for previous scene but with a twist
    //upper lips
    stroke(20, 10, 15);
    strokeWeight(8);
    noFill();
    arc(435, 700, 120, 54, 0, PI);
    noStroke();

    stroke(20, 10, 15);
    strokeWeight(8);
    noFill();
    arc(565, 700, 120, 54, 0, PI);
    noStroke();
    //bottom lip
    stroke(20, 10, 15);
    strokeWeight(7);
    noFill();
    arc(500, 750, 80, 34, 0, PI);
    noStroke();

    stroke(20, 10, 15);
    strokeWeight(7);
    noFill;
    line(500, 600, 500, 700);

    //DIALOGUE
    rectMode(CENTER);
    fill(255, 245, 235, 235); 
    stroke(40, 15, 25);
    strokeWeight(4);
    rect(width / 2, 880, 820, 130, 20); //bubble
    noStroke();
    fill(35, 12, 20);
    textAlign(CENTER, CENTER);
    textSize(40);
    textStyle(ITALIC);
    textFont('Courrier New');
    text(bearLines[currentBearLine], width / 2, 870);// dialogue itself
    fill(120, 60, 70);
    textSize(22);
    textStyle(BOLD);
    text("(Click the BEAR to hear more 'wisdom')", width / 2, 920); //instruciton to click

    //backward button 
    let hoveringBack = isMouseOverBackButton();


    if (hoveringBack) {
        cursorType = "hand";
        fill(188, 5, 56)
    } else if (isMouseOverBear()) {
        cursorType = "hand";
        fill(120, 60, 70);
    } else {
        cursorType = "arrow";
        fill(120, 60, 70);
    }
    //BACKBUTTON
    rectMode(CORNER);
    noStroke();
    rect(backButton.x, backButton.y, backButton.w, backButton.h, 10); // an extra category after the height gives it a bevling for rounded corners,
    
    //I should add a text for the button
    fill("White");
    textAlign(CENTER, CENTER);
    textSize(18);
    text("← Back", backButton.x + backButton.w / 2, backButton.y + backButton.h / 2);

    }
//SCENE 5 mole close

function drawSceneMole() {
    rectMode(CORNER);
    background("rgb(75, 50, 27)");

    // Neck 
    fill("rgb(68, 65, 66)");
    
    ellipse(500, 720, 640, 560);

    // Head 
    fill("rgb(61, 56, 57)");
    ellipse(500, 490, 580, 660);
    //nose
    fill("rgb(82, 75, 77)");
    ellipse(500, 610, 250, 180);

    fill("rgb(230, 146, 205)");
    ellipse(500, 585, 115, 140);
    fill("rgb(160, 85, 135)");
    ellipse(478, 575, 16, 24);
    ellipse(522, 575, 16, 24);
    //stach
    stroke("white");
    strokeWeight(4);
    line(360, 585, 260, 565);
    line(355, 605, 250, 605);
    line(360, 625, 260, 645);

    line(640, 585, 740, 565);
    line(645, 605, 750, 605);
    line(640, 625, 740, 645);
    noStroke();

    // eyes
    fill("black");
    ellipse(390, 420, 20, 20);
    ellipse(600, 420, 20, 20);



    // hands
    fill("rgb(230, 146, 205)");
    ellipse(260, 770, 110, 80);
    ellipse(740, 770, 110, 80);

    //DIALOGUE
    rectMode(CENTER);
    fill(255, 245, 235, 235); 
    stroke(40, 15, 25);
    strokeWeight(4);
    rect(width / 2, 880, 820, 130, 20); //bubble
    noStroke();
    fill(35, 12, 20);
    textAlign(CENTER, CENTER);
    textSize(40);
    textStyle(ITALIC);
    textFont('Courrier New');
    text(moleLines[currentMoleLine], width / 2, 870);// dialogue itself
    fill(120, 60, 70);
    textSize(22);
    textStyle(BOLD);
    text("(Click the MOLE to hear more 'confusion')", width / 2, 920); //instruciton to click

    //backward button 
    let hoveringBack = isMouseOverBackButton();


    if (hoveringBack) {
        cursorType = "hand";
        fill(188, 5, 56)
    } else if (isMouseOverBear()) {
        cursorType = "hand";
        fill(120, 60, 70);
    } else {
        cursorType = "arrow";
        fill(120, 60, 70);
    }
    //BACKBUTTON
    rectMode(CORNER);
    noStroke();
    rect(backButton.x, backButton.y, backButton.w, backButton.h, 10); // an extra category after the height gives it a bevling for rounded corners,
    
    //I should add a text for the button
    fill("White");
    textAlign(CENTER, CENTER);
    textSize(18);
    text("← Back", backButton.x + backButton.w / 2, backButton.y + backButton.h / 2);

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
function isMouseOverTree() {
    return (
        mouseX > treeArea.x &&
        mouseX < treeArea.x + treeArea.w &&
        mouseY > treeArea.y &&
        mouseY < treeArea.y + treeArea.h
    );
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
//den 2 testing
function isMouseOverDen2() {
    return (
        mouseX > den2Area.x &&
        mouseX < den2Area.x + den2Area.w &&
        mouseY > den2Area.y &&
        mouseY < den2Area.y + den2Area.h
    );
}

//den 3 //
function isMouseOverDen3() {
    return (
        mouseX > den3Area.x &&
        mouseX < den3Area.x + den3Area.w &&
        mouseY > den3Area.y &&
        mouseY < den3Area.y + den3Area.h
    );
}
//testing for the backward button

function isMouseOverBackButton() {
    return (
        mouseX > backButton.x &&
        mouseX < backButton.x + backButton.w &&
        mouseY > backButton.y &&
        mouseY < backButton.y + backButton.h
    );
}

//adding the mouseoverbear for the sounds now
function isMouseOverBear() {
        let bearX = 350;
        let bearY = 300;
        let bearW = 300;
        let bearH = 400;

    return (
        mouseX > bearX &&
        mouseX < bearX + bearW &&
        mouseY > bearY &&
        mouseY < bearY + bearH
    );  
}

function isMouseOverMole() {
        let moleX = 350;
        let moleY = 300;
        let moleW = 300;
        let moleH = 400;

    return (
        mouseX > moleX &&
        mouseX < moleX + moleW &&
        mouseY > moleY &&
        mouseY < moleY + moleH
    );  
}

//this will enable mouse click if the cursor overalps with bushes and if scene is equal to 1, whihch it wil be, it should then shift to the next draw ( aka scene 2)

function mousePressed() {
    buttonClick.play();
    if (!song.isPlaying()) {
        song.loop();
    }



    if (scene === 1 && isMouseOverBush()) {
        scene = 2;
    } else if (scene === 2 && isMouseOverTree()) {
        scene = 3;
    } else if (scene === 3 && isMouseOverDen()) {
        bearSound.play();//bear sound effect when pressing on his den, a noise he will make when you get up close to him for a chat
        currentBearLine = 0; //sets the line its at
        scene = 4;
    } else if (scene === 4 && isMouseOverBackButton()) {
        scene = 3; //this will hopefully bring me back to the previous scene
    } else if (scene === 4 && isMouseOverBear()) {
        bearSound.play(); //this should make a sound for each time the bear's face is presssed
        currentBearLine = (currentBearLine + 1) % bearLines.length;//thisd should make the lines cycle in order
    } else if (scene === 3 && isMouseOverDen2()) {
        moleSound.play(); // mole sfx
        currentMoleLine = 0; 
        scene = 5;
    } else if (scene === 5 && isMouseOverBackButton()) {
        scene = 3; //brings backButton, 
    } else if (scene === 5 && isMouseOverMole()) {
        moleSound.play();
        currentMoleLine = (currentMoleLine + 1) % moleLines.length;
    }
}

//how the cursor will look when moveing around and not interacting or hovering

function drawArrowCursor() {
    
    translate(mouseX, mouseY);
    rectMode(CENTER);
    fill("rgb(248, 248, 248)");
    stroke("black");
    strokeWeight(1.5);

    rect(0, 18, 18, 12, 3);   
    rect(-14, 3, 14, 8, 4);      
    rect(0, -1, 24, 32, 10); 
    
}

// how the cursor looks when interacting
function drawHandCursor() {
    
    translate(mouseX, mouseY);
    rectMode(CENTER);
    fill("hsl(0, 0%, 100%)");
    stroke("black");
    strokeWeight(1.5);

    rect(-7, -17, 7, 18, 4.5);  //index i moved it up because it looked more natural
    rect(0, 18, 18, 12, 3); //wrist   
    rect(-12, 2, 14, 8, 4); //thumb
    ellipse(0, 2, 26, 26);  //hand
    
    
}
