class Ball{
    constructor(x,y,width,height,angle){
        
        var options = {
            density: 2
        }

        
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(myWorld,this.body);

    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;

        angleMode(RADIANS)
        push();
        
        fill("purple");
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        ellipse(0,0,this.width,this.height)
        pop();
    }


}
