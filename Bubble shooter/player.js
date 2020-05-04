var p;
var size;
var heading;
var pVel;
var force;
var boostColor;
var touch;
var playerColor;
var Score;
var Health;
var pi;

function updatePlayer() {
    boostColor = color(0)
        //move and rotate player 

        pi = loadImage("assets/spaceship");

    if (keyIsDown(LEFT_ARROW)) {
        heading -= 10;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        heading += 10;
    }
    if (keyIsDown(UP_ARROW)) {
        force = p5.Vector.fromAngle(radians(heading));
        pVel.add(force.mult(0.1));
        boostColor = color(90, 300, 20);
    }
    if (keyIsDown(DOWN_ARROW)) {
        force = p5.Vector.fromAngle(radians(heading));
        pVel.add(force.mult(2));
        boostColor = color(400, 50, 20);
    }

    //contain player
    if (p.x > 1300) {
        p.x = 0
    }
    if (p.x < 0) {
        p.x = 1300
    }
    if (p.y > 700) {
        p.y = 0
    }
    if (p.y < 0) {
        p.y = 700
    }



    //update player location
    pVel.mult(0.978);
    p.add(pVel);
    //draw the player
    push();
    translate(p.x, p.y);
    rotate(radians(heading));
    //flame stuff

    fill(boostColor)
    triangle(-size + 10, size * .9, -size * 8, size / 6, size * -.7, -size * .7);
    //health


    fill(playerColor);
    triangle(-size + 2, -size + 2, size + 2, 0, -size + 2, size + 2);
    pop();
    fill(255);
    text(Health, p.x - 10, p.y + 25)

    fill(300,200,250);
    text(Score, 35, 35);

}