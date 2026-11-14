/**
 * ROOTED
 * Marko Anastasovski
 * 
 * A scenery of bushes and trees, clciking on the bushes takee you to another view of a tall tree, click on this  tree takes you to the ROOTED TREE, wheere little animals lie and sleep within the roots, click on them to awaken them and unlock dialogue. optionally go back and click on another animal for more wisdom.
 */

"use strict";

let scene = 1 // sets scene value to one so it always starts with the bushes where you click and get lead to the second scene.
let bushArea = {
    x:200,
    y:650,
    w:600,
    h:350,
}; // this will hopefully serve as an area where if the mouse overlaps and mousePressed are both valid, then it will change the ''let scene =' to '=2'.


/**
 * scenes 1 to 3 ( maybe the scenes where a clsoe uop of the animal is drawn and it talkwith a text bubble)
*/
function setup() {
    creatCanvas(1000,1000);
}


/**
 * sepaking of the close ups of the animals, i realised its simper andunavoidable for me to just create functions that draw the scenes and kind of load them
*/
function draw() {

}