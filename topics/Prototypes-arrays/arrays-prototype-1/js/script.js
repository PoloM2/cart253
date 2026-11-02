    /**
     * zombz
     * Marko
     *
     * A ball that bounces around on the canvas and infects the following balls that get added to the array
     */

    const balls = [];
    let makeball = false

    /**
     * Create the canvas and the ball
     */
    function setup() {
    // Create the canvas
    createCanvas(400, 400);
    // Create the ball


    

    }

    /**
     * Creates a random ball
     */
    function createBall() {
    // Create a ball object with appropriate properties
    const newBall = {
        // Position and dimensions
        x: mouseX,
        y: mouseY,
        size: 20,
        // Colour intersting shortcut for if/else
        fill: balls.length === 0 ? "red" : "white", //checks if array has 0 balls, if so makes the frist ball red, then since the array is nt at zero the rest will alwways be zero. 
        // Movement
        velocity: {
        x: random(-5, 5),
        y: random(-5, 5)
        }
    };
    return newBall;
    }

    /**
     * Moves and draws the ball
     */
    function draw() {
    background("#295a1a");
    

    for (let ball of balls){
    moveBall(ball);
    bounceBall(ball);
    drawBall(ball);
    
    }
    infectBalls();

    }

    /**
     * Moves the ball according to its velocity
     */
    function moveBall(ball) {
    ball.x += ball.velocity.x;
    ball.y += ball.velocity.y;
    }

    /**
     * Bounces the ball off the walls
     */
    function bounceBall(ball) {
    // Check if the ball has reached the left or right
    const bounceX = (ball.x > width || ball.x < 0);
    // Check if the ball has reached the top or bottom
    const bounceY = (ball.y > height || ball.y < 0);
    
    // Handle bouncing horizontally
    if (bounceX) {
        ball.velocity.x *= -1;
    }
    // Handle bouncing vertically
    if (bounceY) {
        ball.velocity.y *= -1;
    }

    
    }
    function infectBalls() {

        for (let ball of balls) {
            for (let other of balls) {
                if (ball !== other) {
                    let d = dist(ball.x, ball.y, other.x, other.y);

                    if (d < (ball.size + other.size) / 2 && ball.fill === "red") {
                        other.fill = "red";
                    }
                }
            }
        }
    }

    /**
     * Draw the ball on the canvas
     */

    function drawBall(ball) {

    push();
    noStroke();
    fill(ball.fill);
    ellipse(ball.x, ball.y, ball.size);
    pop();
    }

    function mousePressed(){
    balls.push(createBall())
    } 
