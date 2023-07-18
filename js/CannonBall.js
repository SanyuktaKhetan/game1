class CannonBall {

    constructor(x,y) {
        var options_ball= {
          isStatic:true  
        };

        this.r=60;
        this.body=Bodies.circle(x,y,this.r,options_ball);
        this.cannonBall_img=loadImage("./assets/cannonball.png");
        this.trajectory=[];

        World.add(world,this.body);
    }

    show_ball()
    {
        var pos=this.body.position;
        push();
        imageMode(CENTER);
        image(this.cannonBall_img, pos.x, pos.y, this.r,this.r)
        pop();

        if(this.body.velocity.x>0 && pos.x>10) {
            var position=[pos.x,pos.y];
            this.trajectory.push(position);



        }
        for(var i=0;i<this.trajectory.length;i++) {
            image(this.cannonBall_img,this.trajectory[i][0],this.trajectory[i][1],10,10);
        }
        
    }

    shoot() {
        var new_angle = cannon.angle-30;
        new_angle = new_angle * (3.14/180);
        var velocity = p5.Vector.fromAngle(new_angle);
        velocity.mult(0.5);
        Matter.Body.setStatic(this.body,false);
        Matter.Body.setVelocity(this.body, {
            x: velocity.x*(180/3.14),
            y: velocity.y*(180/3.14)

            
        });
    }

    remove_ball(index) {
        
        Matter.Body.setVelocity(this.body, {
            x:0,
            y:0
        });

        setTimeout(()=> {
            Matter.World.remove(world,this.body);
            delete ball_array[index];

        }, 2000);
    }


}