const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var line, line2, line3, line4, line5, line6, line7;
var ground, ground2, ground3, ground4;
var plinko = [];
var ball;

var count = 0;

var score = 0;

var gamestate = "start";

var state = "play";

// function preload() {

// }

function setup() {
    var canvas = createCanvas(500, 700);
    engine = Engine.create();
    world = engine.world;





    for (var i = 40; i <= width; i = i + 50) {
        plinko.push(new Plinko(i, 50));
    }

    for (var i = 15; i <= width - 10; i = i + 50) {
        plinko.push(new Plinko(i, 170));
    }

    for (var i = 40; i <= width; i = i + 50) {
        plinko.push(new Plinko(i, 290));
    }

    for (var i = 15; i <= width - 10; i = i + 50) {
        plinko.push(new Plinko(i, 410));
    }

    line = new Lines(80, 530);
    line2 = new Lines(160, 530);
    line3 = new Lines(240, 530);
    line4 = new Lines(320, 530);
    line5 = new Lines(400, 530);
    line6 = new Lines(0, 530);
    line7 = new Lines(490, 530);

    ground = new Ground(300, 680, 190, 20);
    ground2 = new Ground(0, 680, 250, 20);
    ground3 = new Ground(300, 680, 250, 20);
    ground4 = new Ground(250, 680, 250, 20);



}

function draw() {
    background(52, 152, 202);
    Engine.update(engine);


    fill("orange");

    // console.log(World.frameRate);



    for (var i = 0; i < plinko.length; i++) {
        plinko[i].display();
    }

    for (var i = 0; i < plinko.length; i++) {
        plinko[i].display();
    }

    ;

    // fill("lime");


    if (state == "play") {


        if (ball != null) {

            ball.display();

            if (ball.body.position.y >= 450) {

                if (ball.body.position.x < 140 && ball.body.position.x > 20) {
                    score = score + 500;
                    // ball = null;
                    gamestate = "loop"
                }

                if (ball.body.position.x > 230 && ball.body.position.x < 150) {
                    score = score + 100;
                    // ball = null
                    gamestate = "loop"


                }

                if (ball.body.position.x > 151 && ball.body.position.x < 321) {
                    score = score + 100;
                    // ball = null
                    gamestate = "loop"

                }

                // if (ball.body.position.x > 250 && ball.body.position.x < 170) {
                //     score = score + 50;
                //     // ball = null
                //     gamestate = "loop"

                // }

                // if (ball.body.position.x > 180 && ball.body.position.x < 260) {
                //     score = score + 50;
                //     // ball = null
                //     gamestate = "loop"

                // }

                // if (ball.body.position.x > 270 && ball.body.position.x < 190) {
                //     score = score + 50;
                //     // ball = null
                //     gamestate = "loop"

                // }

                if (ball.body.position.x > 322 && ball.body.position.x < 490) {
                    score = score + 50;
                    // ball = null
                    gamestate = "loop"

                }


            }
        }

        if (gamestate === "loop") {
            ball = null;
            gamestate = "start"
        }


        if (count >= 6) {
            state = "end";
        }
    }




    // if (gamestate === "c") {
    //     mousePressed();
    // }

    // console.log(mouseX);

    noStroke();
    fill("yellow");
    line.display();
    line2.display();
    line3.display();
    line4.display();
    line5.display();
    line6.display();
    line7.display();


    fill("yellow");
    ground.display();
    ground2.display();
    ground3.display();
    ground4.display();

    textSize(25);
    strokeWeight(10);
    text("SCORE : " + score, 50, 30);

    fill("maroon");

    textSize(25);
    strokeWeight(10);
    text("500", 25, 580);
    text("500", 105, 580);
    text("100", 185, 580);
    text("100", 265, 580);
    text("50", 350, 580);
    text("50", 430, 580);





    if (state === "end") {

        fill("Brown");

        textSize(50);
        strokeWeight(25);
        text("GAME_OVER", width / 6, height / 2);

    }
    // console.log(score);

}

function mousePressed() {

    if (mouseY < 20 && count < 6 && state == "play") {
        ball = new Ball(mouseX, mouseY);
        count++;
    }
}
