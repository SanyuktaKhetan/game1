class Cannon {
    constructor(x,y,w,h,angle){
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.angle=angle;
        this.cannon_img=loadImage("assets/cannon.png");
        this.cannon_base=loadImage("assets/cannonBase.png");
    }

    show(){
        console.log(this.angle);
        if(keyIsDown(RIGHT_ARROW) && this.angle<76) {
            this.angle+=1;
        }

        if(keyIsDown(LEFT_ARROW) && this.angle>-76) {
            this.angle-=1;
            
        }

        push();

        translate(this.x,this.y);
        rotate(this.angle);
        imageMode(CENTER);
        image(this.cannon_img,0,0,this.w,this.h);
        pop();
        image(this.cannon_base,90,165,100,100);
        noFill();
        
    }

}







