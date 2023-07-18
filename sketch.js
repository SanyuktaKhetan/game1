const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var bg_img;
var tower, tower_img; 
var cannon;
var angle=20;
var cannon_ball;
var ball_array=[];
var boat; 
var boat_array=[];



//practicing arrays
//var practice=["JT Shah",7,true, [2,3]];

//console.log(practice[3][1]);



//practice.push("Taksh");
//practice.pop();
//console.log(practice);


//the three great functions
function preload() {
  bg_img=loadImage("./assets/background.gif");
  tower_img=loadImage("./assets/tower.png");



}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

 options={
 isStatic:true
 }
 
 ground= Bodies.rectangle(0,height-1, width*2,1,options);
 World.add(world,ground);

 tower= Bodies.rectangle(140,350,160,310,options);
 World.add(world,tower);
 

 cannon= new Cannon (140,210,75,50,angle);
 



 
 angleMode(DEGREES);
 
}

function draw() {
  background(189);
  image(bg_img,0,0,1200,600);
  Engine.update(engine);
 
  rect(ground.position.x, ground.position.y,width*2,1);
  push();
  imageMode(CENTER);
  image(tower_img,tower.position.x, tower.position.y, 160, 310);
  pop();


 
  cannon.show();
  displayBoat();
  

  for(var i= 0; i<ball_array.length;i++) {
    showCannonBall(ball_array[i],i);

    collisionWithBoat(i);

  }

  
  



}









//lesser functions


function keyPressed() {
  if(keyCode===DOWN_ARROW) {
    cannon_ball = new CannonBall (cannon.x,cannon.y);
    ball_array.push(cannon_ball);
  }
}

function keyReleased() {
  if(keyCode===DOWN_ARROW) {
    ball_array[ball_array.length-1].shoot();
  }
}

function showCannonBall(ball,i) {
  if(ball) {
    ball.show_ball();
    if(ball.body.position.x >= width || ball.body.position.y >= height-50 ) {
      ball.remove_ball[i];
    }
  }

}

function displayBoat() {
  if(boat_array.length>0) {
    if( boat_array[boat_array.length-1] === undefined || boat_array[boat_array.length-1].body.position.x<width-300 ) {
      var random_pos=[-20, -60, -80, -30];
      var random_value= random(random_pos);
      boat = new Boat(width, height-50, 170, 170, random_value);
      boat_array.push(boat);

    }
    for(var i=0; i<boat_array.length; i++) {
      if(boat_array[i]) {
        Matter.Body.setVelocity(boat_array[i].body, {
          x:-1,
          y:0
        });
        boat_array[i].showBoat();
      }
      else {
        boat_array[i];
      }
    }
  }
  else{
    boat = new Boat(width, height-50, 170, 170, -80);
    boat_array.push(boat);
  }
}


function collisionWithBoat (index) {
  for(var i = 0;i<boat_array.length; i++) {
    if( ball_array[index] !== undefined && boat_array[i] !== undefined) {
      var store = Matter.SAT.collides(ball_array[index].body, boat_array[i].body);
      if(store.collided){
        boat_array[i].remove_boat(i);
        //ball_array[index].remove_ball(index);
        Matter.World.remove(world,ball_array[index].body);
            delete ball_array[index];
      }
    }


  }


}