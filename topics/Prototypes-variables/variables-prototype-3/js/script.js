/**
 * moon car
 * Marko Anastasovski
 *
 * A guy who becomes visibly furious!
 */

"use strict";

//the sky is darkening, the clouds are gathering, and Mr. Furious is getting madder and madder.
let sky = {
    r : 255,
    g : 255,
    b : 255,
}
/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);
}

let moon = {
    x : 500,
    y : 55,
    velocity : 1

}


/**
 * make a road and moon
 */
function draw() {

  background(sky.r, sky.g, sky.b);

  fill("#dab86f")
  rect(0, 5, 400, 100)

  push()
  fill("grey")
  stroke("white");
  ellipse(moon.x, moon.y, 100, 100);
   sky.r = sky.r- 1;
  sky.g = sky.g- 1;
  sky.b = sky.b- 1;
  pop()
  moon.x = moon.x * 0.991;

  fill("blue");
  stroke("white");
  ellipse(200, 350, 200);

  



}

