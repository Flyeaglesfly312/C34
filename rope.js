class Rope{
        constructor(bodyA,pointB){
           
            var options = {
                bodyA: bodyA,
                pointB: pointB,
                legnth: 300,
                stiffness: 0.3
            }
            this.pointB = pointB;
            
            this.rope = Constraint.create(options);
            World.add(myWorld,this.rope);
        }

        
        display(){
            if(this.rope.bodyA){
            
            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke("white");
            strokeWeight(5);
            line(pointB.x,pointB.y,pointA.x,pointA.y);
            pop();
        }
        }
       
}