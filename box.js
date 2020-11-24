class box{
    constructor(x,y,width,height){
        var options ={
            isStatic:false,
            /*restitution:0.8,
            friction:1.0,
            density:1.0*/
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.visibility = 255;
        World.add(world,this.body);
    }
    display(colour){
        console.log(this.visibility);

        if(this.body.speed<10){
            var angle = this.body.angle;
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            fill(colour);
            stroke(0);
            strokeWeight(4);
            rectMode(CENTER);
            rect(0,0,this.width,this.height);
            pop();
        }
        else{
            World.remove(world,this.body);

            push();
            this.visibility = this.visibility-5;
            tint(255,this.visibility);
            //rect(this.body.position.x,this.body.position.y,this.width,this.height);
            pop();
        }
    }
    scorebox(){
        if(this.visibility<0 && this.visibility>-150){
            score++;
        }
    }
}