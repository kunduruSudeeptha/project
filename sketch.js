var ball,ground
var engine,world
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(1220, 600);

	rectMode(CENTER)
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	ball=Bodies.circle(200,100,20,ball_options)
    World.add(world,ball);

	ground=new Ground(width/2,550,width,10)
	left_side=new Ground(1000,520,10,70)
	right_side=new Ground(1100,520,10,70)

	Engine.run(engine);
    ellipseMode(RADIUS);
  
}

function draw() {

  rectMode(CENTER);
  background(0);
  
  //ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20)

  ground.display()
  left_side.display()
  right_side.display()
  Engine.update(engine)
}

function keyPressed(){
	if (keyCode===UP_ARROW){
		Body.applyForce(ball,{x:0,y:0},{x:0.05,y:1})
	}
}



