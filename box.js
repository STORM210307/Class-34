class Box {
    constructor(x,y) {

        var options = {

        restitution: 0.8,
        density: 0.04,
        friction: 1

        }
        this.width = 70;
        this.height = 70;
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body)
        }

display() {

var pos = this.body.position;
var angle = this.body.angle;
push();
translate(pos.x,pos.y);
rotate(angle)
strokeWeight(4)
stroke("green")
rectMode(CENTER);
rect(0,0,this.width,this.height)
pop();
}

}