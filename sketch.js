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

    world.gravity.x = 0
    ;

    box1 = new Box(0,410,100,40);
    ground = new Ground(3200,400,worldLength + 100,20)
    ground2 = new Ground(3200,446,worldLength + 100,20)
    ground3 = new Ground(worldLength+25,400,50,50)
    resetClicked()
}

function draw(){
    background("black");
    Engine.update(engine);
    console.log(box1.body.velocity.x);
    box1.display();
    ground.display();
    ground2.display();
}

function resetClicked() {
    console.log("Setting box");
    Matter.Body.setPosition(box1.body,{x:0,y:410});
    Matter.Body.setVelocity(box1.body,{x:0,y:0})
    Matter.Body.applyForce(box1.body, {x:0, y:410}, {x:30000,y:0});
    
}

function updateFriction(f) {
    box1.body.friction = f/1000;
    console.log(box1.body.friction);

    //box1.body.friction = 0;
    resetClicked();
}
