/**
 * Spinning Blue Blur
 * Marko Anastasovski
 * 
 * A spinning blue circle, and a spining background made with rectangle and spining lines.
 */

"use strict";

/**
 * Green rect for Background, Blue cirle for hedghog, Black lines for spinning background effect
*/
function setup() {
    
createCanvas(1000, 1000, WEBGL);

}

let beam ={
    x: 1000,
    y: 100,
    size: 25,
    fill: "black",
};

/**
 * It will be a spinning blue circle, and a spining background made with rectangle and spining lines.
*/
function draw() {

    background("green");
    fill("black");
    stroke("black");
    line(-500,0,500,0);
    //spinning background effect
    fill("blue");
    stroke("rgb(7, 130, 245)");
    strokeWeight(10);
    circle(0, 0, 300);

}