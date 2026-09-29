/**
 * Stardust Cruse
 * Marko Anastasovski
 * 
 * A ship crusing through stars ?
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
    //replae background with image hopefully
    
    push();
    fill(curser.fill.r, curser.fill.g, curser.fill.b);
    ellipse(mouseX,mouseY, curser.size, curser.size);
    pop();

}
