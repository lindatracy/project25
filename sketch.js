
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render;
var ground;
function preload()
{
	dustbin=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
	var render=Render.create({
		element:document.body,
		engine:engine,
		options:{
			width:800,
			height:700,
			wireframes:false
		}
	});
	Render.run(render);
	//Create the Bodies Here.
    ground=new Ground();
	ball=new Ball();
	//image(paperImage,100,200);
	box1=new Box(400,590,10,100);
	box2=new Box(500,590,10,100);
	box3=new Box(450,640,100,10);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  
  ground.display();
  
  box1.display();
  box2.display();
  box3.display();
  image(dustbin,400,540,100,100);
  ball.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Body.applyForce(ball.body,ball.body.position,{x:35,y:-85})
	}
}


