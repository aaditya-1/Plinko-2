class Ball {
    constructor(x, y) {

        var opt = {
            restitution: 0.4
        }

        this.body = Bodies.circle(x, y, 5, opt);
        World.add(world, this.body);
        this.color = color(random(0, 255), random(0, 255), random(0, 255));

    }
    display() {
        var pos = this.body.position;
        fill(this.color);
        stroke(this.color)
        strokeWeight(2);
        ellipse(pos.x, pos.y, 10, 10);
    }
}