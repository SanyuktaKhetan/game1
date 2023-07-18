class Boat {
    constructor(x,y,w,h,boatPos){

        this.w=w;
        this.h=h;

        var boat_options = {
            restitution:0.8,
            friction:1,
            density:1
        };

        this.body=Bodies.rectangle(x, y, w, h, boat_options);
        this.boat_img= loadImage("./assets/boat.png");
        this.boatPosition= boatPos;
        
        World.add(world,this.body);
    }

    showBoat(){
       var pos=this.body.position;
       push();
       translate(pos.x, pos.y);
       imageMode(CENTER);
       image(this.boat_img, 0, this.boatPosition, this.w, this.h);

    
       pop();

    }

    remove_boat(index) {
        setTimeout(()=> {
            Matter.World.remove(world,boat_array[index].body);
            delete boat_array[index];

        }, 2000);
        
    }

}