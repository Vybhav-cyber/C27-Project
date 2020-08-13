
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var bob1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
	
	var bobDiameter = 40;
	var posX = width/2;//400
	var posY = height/4 + 500;//675


	//Create the Bodies Here.

	//Bob's
	bob1 = new Bob(320, 675, 40);
	bob2 = new Bob(320,675, 40);
	bob3 = new Bob(400,675,40);
	bob4 = new Bob(440, 675, 40);
	bob5 = new Bob(440 , 675, 40);
	//circle(this.x,this.y,(this.radius)/2, options); ---- Formula
	
	//Roof
	roof = new Roof(400, 175, 175, 20);
	 
	//Rope
    rope1 = new Rope(bob1.body, roof.body, -80, 0);
	rope2 = new Rope(bob2.body, roof.body, -40, 0);
	rope3 = new Rope(bob3.body, roof.body, 0, 0); 
 	rope4 = new Rope(bob4.body, roof.body, 40, 0); 
	rope5 = new Rope(bob5.body, roof.body, 80, 0);
    // rope = new Rope(exampleA.body,exampleB.body, x, y); ---- Formula

	Engine.run(engine);
  
}


  function draw() {
  rectMode(CENTER);
  background(255);
    
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  drawSprites();
 
}

// Moves 1 Bob
function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45}); } 
} 

// Moves 1 Bob
function keyPressed() { 
	if (keyCode === DOWN_ARROW) 
	{ 
		Matter.Body.applyForce(bob2.body,bob2.body.position,{x:-50,y:-45}); } 

		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45}); 
	} 
 

