const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
// const Composites = Matter.Composites;

var engine, world;
var box1,marker, car;
var worldLength = 6400;
var worldHeight = 800;
var startTime, endTime;
var distanceTravelled

function setup(){
    var canvas = createCanvas(worldLength,worldHeight);
    
    engine = Engine.create();
    world = engine.world;

    world.gravity.x = 0;

    box1 = new Box(0,410,100,40);
    ground = new Ground(3200,400,worldLength + 100,20);
    ground2 = new Ground(3200,446,worldLength + 100,40);
    ground3 = new Ground(worldLength+25,400,50,50);

    resetClicked();
}

function draw(){
    background("black");
    Engine.update(engine);
    box1.display();
    ground.display();
    ground2.display();

    if (box1.body.velocity.x <= 0) {
        distanceTravelled = box1.body.position.x;
        endTime = new Date();
        

        var timeDiff = endTime - startTime; //in ms
        var Speed = distanceTravelled/timeDiff;
        timeDiff /= 1000;
        console.log("Train stopped after " + timeDiff + " seconds, and travelled a distance of " + Math.round(distanceTravelled) + " pixels. The trains speed is " + Math.round(Speed*1000) + " pixels per second");
        resetClicked();
    }

    //console.log(box1.body.velocity.x);
}

function resetClicked() {
    startTime = new Date();
    Matter.Body.setPosition(box1.body,{x:0,y:410});
    Matter.Body.setVelocity(box1.body,{x:0,y:0})
    Matter.Body.applyForce(box1.body, {x:0, y:410}, {x:30000,y:0});
    
}

function updateFriction(f) {
    box1.body.friction = f/1000;
    console.log(box1.body.friction);

    resetClicked();
}
