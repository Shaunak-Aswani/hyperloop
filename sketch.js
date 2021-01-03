const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,marker;
var worldLength = 6400;
var worldHeight = 800;

function setup(){
    var canvas = createCanvas(worldLength,worldHeight);
    
    engine = Engine.create();
    world = engine.world;

    world.gravity.x = 1;

    box1 = new Box(0,410,100,40);
    ground = new Ground(3200,400,worldLength,20)
    ground2 = new Ground(3200,446,worldLength,20)
    ground3 = new Ground(worldLength+25,400,50,50)
}

function draw(){
    background("black");
    Engine.update(engine);

    box1.display();
    ground.display();
    ground2.display();
}