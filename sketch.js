
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	var ground_options = {
		isStatic : true
	}
	
	ground = Bodies.rectangle(400,695,800, 10, ground_options);
	World.add(world, ground)
	Engine.run(engine);
	box1 = new Box(500, 675, 200, 15);
	box2 = new Box(500 - 100, 630, 15, 70);
	box3 = new Box(500 + 100, 630, 15, 70);
	var ball_options = {
		restitution: 0.3,
		friction: 0.5,
		density:1.2
	}
	ball = Bodies.circle(125, 675, 10,ball_options);
	World.add(world, ball)
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 10);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 800, 10);
  box1.display()
  box2.display()
  box3.display()
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
      Matter.Body.applyForce(ball,ball.position,{x:12, y: -12})
	   
	 }
   }


