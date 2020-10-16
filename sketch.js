const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var line, line2, line3, line4, line5, line6, line7;
var ground, ground2, ground3, ground4;
var plinko = [];
var ball = [];

var count = 0;

var score = 0;

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




    for (var j = 0; j < ball.length; j++) {

        if (ball[j] != null) {

            ball[j].display();

            if (ball[j].body.position.x > 300) {
                score = score + 500;
                ball[j] = null;
            }

            if (ball[j].body.position.x > 301 && ball[j].body.position.x < 600) {
                score = score + 100;
                ball[j] = null;

            }

            if (ball[j].body.position.x > 601 && ball[j].body.position.x < 700) {
                score = score + 50;
                ball[j] = null;

            }




        }
    }

    noStroke();
    fill("yellow");
    line.display();
    line2.display();
    line3.display();
    line4.display();
    line5.display();
    line6.display();
    line7.display();


    fill("green");
    ground.display();
    ground2.display();
    ground3.display();
    ground4.display();

    textSize(25);
    text("SCORE : " + score, 50, 30);

    // console.log(score);

}

function mousePressed() {
    if (mouseY < 20 && count < 5) {
        ball.push(new Ball(mouseX, mouseY));
        count++;
    }
}
