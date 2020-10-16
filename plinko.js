class Plinko {
    constructor(x, y) {
        var opt = {
            isStatic: true
        }

        this.body = Bodies.circle(x, y, 15, opt);
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        ellipse(pos.x, pos.y, 15, 15);
    }
}