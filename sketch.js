const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var box ;
var box2;


var world, engine,ground,ball


function setup() {
  engine= Engine.create();
  world= engine.world;
  createCanvas(800,400);

  var options={

    isStatic: true

  }
  ground= Bodies.rectangle(400,height,800,20,options);
  World.add(world,ground);

  box= new Box(200,300,50,50);
  box2= new Box(240,100,50,100);
  
}

function draw() {
  background(0); 
  Engine.update(engine);
  fill("grey");
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);
  box.display();
box2.display()


}



