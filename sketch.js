const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Render = Matter.Render;

var myEngine, myWorld;

var tower, towerImg, ground, cannon;
var backgroundImg;

function preload()
{
  towerImg = loadImage("assets/tower.png");
  backgroundImg = loadImage('assets/background.gif');
    
}

function setup(){
    createCanvas(1200,600);
    myEngine = Engine.create();
    myWorld = myEngine.world;


    var render = Render.create({
        element: document.body,
        engine: myEngine,
        options: {
          width: 1200,
          height: 600,
          wireframes: false
        }
      });
      Render.run(render);

    tower = new Tower(150, 350, 180, 330);

    ground = new Ground(600, height-1, 1200,1);

    //angle = -PI/4
   // cannon = new Cannon(180, 110, 100, 50,angle);

     cannon = new Cannon(180, 110, 100, 50);

    
}

function draw(){
    background(backgroundImg);
    Engine.update(myEngine);

    tower.display();
    ground.display();
    cannon.display();

    textSize(20)
    text(mouseX + "," + mouseY, mouseX,mouseY);
}
