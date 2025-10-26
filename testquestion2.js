let square;

function setup(){
    new Canvas(400, 600);
   
    // code to set the gravity of the world
    world.gravity.y = 1;

    // code to create a new square sprite
    square = new Sprite(width/2, height/2, 50, 50, "dynamic")
}

function draw(){
    background("grey");

    // code to check if mouse is pressed i.e. mouse.presses()
        // if mouse is pressed, the square sprite "flies" up
    if (mouse.presses()) {
        square.velocity.y = -1
    }
}