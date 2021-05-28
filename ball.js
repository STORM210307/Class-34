class Ball {
    constructor(x,y,radius) {

        var options = {

        density: 1,
        frictionAir: 0.005

        }
        this.radius = radius
        this.body = Bodies.circle(x,y,radius,options);
        World.add(world,this.body)
        }

display() {

var pos = this.body.position;
ellipseMode(CENTER);
ellipse(pos.x,pos.y,this.radius,this.radius)

}

}