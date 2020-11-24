
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var score = 0;
var backgroundImg;

function preload(){
	polygonimg = loadImage("Hexagon.png");
	getBackGroundImage();
}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	/*polygon = Bodies.circle(170,400,20);
	World.add(world,polygon);*/

	polygon1 = new polygon(170,400);

	slingShot = new SlingShot(polygon1.body,{x:170,y:400});
	
	//Pyramid1
	base1 = new ground(550,600,500,20);
	
	block1 = new box(370,560,50,60);
	block2 = new box(420,560,50,60);
	block3 = new box(470,560,50,60);
	block4 = new box(520,560,50,60);
	block5 = new box(570,560,50,60);
	block6 = new box(620,560,50,60);
	block7 = new box(670,560,50,60);
	block8 = new box(720,560,50,60);

	block9 = new box(420,500,50,60);
	block10 = new box(470,500,50,60);
	block11 = new box(520,500,50,60);
	block12 = new box(570,500,50,60);
	block13 = new box(620,500,50,60);
	block14 = new box(670,500,50,60);

	block15 = new box(470,440,50,60);
	block16 = new box(520,440,50,60);
	block17 = new box(570,440,50,60);
	block18 = new box(620,440,50,60);

	block19 = new box(520,380,50,60);
	block20 = new box(570,380,50,60);

	//Pyramid2
	base2 = new ground(920,420,300,20);

	bblock1 = new box(820,380,50,60);
	bblock2 = new box(870,380,50,60);
	bblock3 = new box(920,380,50,60);
	bblock4 = new box(970,380,50,60);
	bblock5 = new box(1020,380,50,60);

	bblock6 = new box(870,320,50,60);
	bblock7 = new box(920,320,50,60);
	bblock8 = new box(970,320,50,60);

	bblock9 = new box(920,260,50,60);

	Engine.run(engine);
}

function draw() {
	rectMode(CENTER);
	
	if(backgroundImg){
		background(backgroundImg);
	}
	
  
	fill("orange");
	textSize(30);
	text("Score : "+score,800,50);

	polygon1.display();

	slingShot.display();

	base1.display("brown");

	block1.display("skyblue");
	block2.display("skyblue");
	block3.display("skyblue");
	block4.display("skyblue");
	block5.display("skyblue");
	block6.display("skyblue");
	block7.display("skyblue");
	block8.display("skyblue");
	block9.display("pink");
	block10.display("pink");
	block11.display("pink");
	block12.display("pink");
	block13.display("pink");
	block14.display("pink");
	block15.display("skyblue");
	block16.display("skyblue");
	block17.display("skyblue");
	block18.display("skyblue");
	block19.display("grey");
	block20.display("grey");

	block1.scorebox();
	block2.scorebox();
	block3.scorebox();
	block4.scorebox();
	block5.scorebox();
	block6.scorebox();
	block7.scorebox();
	block8.scorebox();
	block9.scorebox();
	block10.scorebox();
	block11.scorebox();
	block12.scorebox();
	block13.scorebox();
	block14.scorebox();
	block15.scorebox();
	block16.scorebox();
	block17.scorebox();
	block18.scorebox();
	block19.scorebox();
	block20.scorebox();

	base2.display("brown");

	bblock1.display("skyblue");
	bblock2.display("skyblue");
	bblock3.display("skyblue");
	bblock4.display("skyblue");
	bblock5.display("skyblue");
	bblock6.display("pink");
	bblock7.display("pink");
	bblock8.display("pink");
	bblock9.display("grey");

	bblock1.scorebox();
	bblock2.scorebox();
	bblock3.scorebox();
	bblock4.scorebox();
	bblock5.scorebox();
	bblock6.scorebox();
	bblock7.scorebox();
	bblock8.scorebox();
	bblock9.scorebox();

  	drawSprites();
}

function mouseDragged(){
	Matter.Body.setPosition(polygon1.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	slingShot.fly();
}

function keyPressed(){
	if(keyCode === 32){
		//Matter.Body.setPosition(polygon1.body,{x:170,y:400});
		slingShot.attach(polygon1.body);
	}
}

async function getBackGroundImage(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    var dateTime = responseJSON.datetime;
    var hour = dateTime.slice(11,13);
    console.log(hour);

    // Load day or night image based on hour of day
    if( hour >= 7 && hour <= 18){
        bg = "bg.png"
    }
    else{
        bg = "bg2.jpg"
    }
    backgroundImg = loadImage(bg);
}

