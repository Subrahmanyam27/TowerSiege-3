class polygon{
    constructor(x,y){
        var options ={
          'restitution':0,
          'friction':1,
          'density':1.0
        }
        this.body = Bodies.circle(x,y,20,options);
        this.radius = 30;
        this.image = loadImage("Hexagon.png");
        World.add(world,this.body);
    }
    display(){
        push();
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.radius,this.radius);
        pop();
    }
}