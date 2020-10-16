class Lines {
    constructor(x, y) {
        var opt = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, 0.5, 0.5, opt);

        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        rect(pos.x, pos.y, 10, 150);
    }
}