class Box{
  constructor(x, y, width, height, radiusX, radiusY){
    var options = {
        'restitution':0,
        'friction':0,
        'density':27
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    // this.body2 = Bodies.ellipse(x, y, width, height);
    this.width = width;
    this.height = height;

    World.add(world, this.body);
    // World.add(world, this.body2);
  }
  display(){
    var pos =this.body.position;
    push();
    translate(pos.x, pos.y);
    rectMode(CENTER);
    fill(255,255,255);
    rect(0, 0, this.width, this.height);
    pop();
  }
};
