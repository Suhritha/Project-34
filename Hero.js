class Hero{
      constructor(x,y,r){
      	var options = {
          density:1
          frictionAir:1
      };

         this.x=x;
         this.y=y;
         this.r=r;
         this.image=loadImage("Superhero-01.png , Superhero-02.png");
         this.body=Bodies.circle( this.x, this.y,(this.r)/2,options);
         World.add(world,this.body);
          
          }
      display(){
     	push()
     	translate(this.body.position.x,this.body.position.y)
     	rotate(this.body.angle)
     	ellipseMode(RADIUS);
     	ellipse(0,0,this.width,this.height)
     	pop()
     }
}
