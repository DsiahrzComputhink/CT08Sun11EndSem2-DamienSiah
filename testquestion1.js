let bird
let background, birdImg;

let birdSprite;
// placeholder for image to be put

function preload(){
    bird = loadImage("assets/bird.png");
    background = loadImage("assets/background.png");
    // preloads images for usage in draw function
}

function setup(){
    new Canvas(400, 600);
    birdSprite = new Sprite(width/2, height/2, 34, 24, "static")
    // Creates Placeholder sprite for image to be put in draw function
}

function draw(){
    image(background, 0, 0, width, height);
    birdSprite.image = image(bird, width/2, height/2, 34, 24);
}
