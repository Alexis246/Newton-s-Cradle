class Bob {
    constructor(x, y) {
      var options = {
          'restitution':1.4,
          'friction':0,
          'density':0.5,
          isStatic:false
      }
      this.body = Bodies.circle(x, y, 40, options);
      this.radius = 40;
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      ellipse(0,0,this.radius*2);
      pop();
    }
  };