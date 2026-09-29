/**
 * drag the circle to its spot
 * Marko Anastasovski
 * 
 * an ellipse follows the cursor and the background implies it belongs in an area on the map
 *
 */

"use strict";

/**
 * i cannot spell cursor
*/
let bgImage;
function preload() {
    bgImage = loadImage("images/maze.webp");
}

let curser = {
    size: 50,
    //color
    fill: {
        r:255,
        g:255,
        b:255,
    }
}

function setup() {
    createCanvas(1000, 1000);
    Image(bgImage, 500, 500, 1000, 1000);
}


/**
 * circle follows curser
*/
function draw() {
    //replae background with image hopefully
    
    
    push();
    fill(curser.fill.r, curser.fill.g, curser.fill.b);
    ellipse(mouseX,mouseY, curser.size, curser.size);
    pop();

}
//add color, background image and youre done!