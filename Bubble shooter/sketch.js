var bg;
function preload() {
    laserSound = loadSound('laser.ogg');
    deathSound = loadSound('death.ogg');
    bg = loadImage("assets/s.jpg");
}



function setup() {
    createCanvas(window.innerWidth,window.innerHeight);
    p = createVector(width / 2, height / 2)
    pVel = createVector(0, 0);
    force = createVector(0, 0);
    size = 10;
    heading = 0;
    boostColor = color("red");
    playerColor = color(255);
    Score = 0;
    Health = 100;
    bb = [];
    bbVel = [];
    bbSize = 25;

    for (var i = 0; i < 5; i++) {
        bb.push(createVector(random(0, width), random(0, height)));
        bbVel.push(p5.Vector.random2D().mult(random(0.25, 2.25)));
    }
}

function draw() {
    background(bg);
    if(Health<1){
        text("!!GAME OVER!!",700,300);
        textsize("1000");
    }
    text("Press SPACE to shoot. Press UP ARROW to start engine. Press DOWN ARROW to use NITRO & Press LEFT & RIGHT ARROW TO TURN", 50,50)

    updatePlayer();
    updateBubbles();
    updateLasers();
    

}