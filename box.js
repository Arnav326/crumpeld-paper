class Box
{
   constructor(x,y,w,h)
   {
     var options = 
     {
         isStatic : true
     }   
     this.body = Bodies.rectangle(x, y , w, h, options);
     this.w = w;
     this.h = h;
     World.add(world, this.body);
   }
   display()
   {
       
        push();
        translate(this.body.position.x, this.body.position.y);
        fill('white');
        rotate(this.body.angle);
        rectMode(CENTER);
        rect(0,0,this.w, this.h);
        pop();
   }
}