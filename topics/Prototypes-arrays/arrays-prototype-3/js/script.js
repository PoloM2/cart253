/**
 * MemeBOX
 * Marko 
 * 
 * an array containing sounds mp3 probably, randomly suffled and played by the mousePressed function
 */

"use strict";
//array for sounds
let sounds = [];

//loading sounds from arraybefore sketch starts
function preload() {
    console.log("Preload started");
    sounds.push(loadSound("assets/sounds/whatmeme.mp3"));
    sounds.push(loadSound("assets/sounds/susmeme.mp3"));
    sounds.push(loadSound("assets/sounds/pop.mp3"));
    sounds.push(loadSound("assets/sounds/whoosh.mp3"));
}
/**
 * maybe a background and some kind of draw of a instrument?
*/
function setup() {
createCanvas(500, 500);
}


/**
 * It will display a instrument or something to correlate with the sounds
*/
function draw() {
background("pink");



}

function mousePressed() {
    let index = floor(random(sounds.length));
    sounds[index].play();
}