/**
 * drag it!
 * Marko Anastasovski
 * 
 * an ellipse follows the cursor and the background acting as  pencil
 *
 */

"use strict";

/**
 * i cannot spell cursor
*/

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

}


/**
 * circle follows curser
*/
function draw() {
    push();
    fill(curser.fill.r, curser.fill.g, curser.fill.b);
    ellipse(mouseX,mouseY, curser.size, curser.size);
    pop();

}
//add color, background image and youre done!