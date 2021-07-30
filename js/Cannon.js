//cannon is not a physics body

class Cannon{
    constructor(x,y,width,height)
    //constructor(x,y,width,height,angle)
    {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        //added after addition of angle
       // this.angle = angle;
    }

    /*part2
    display()
    {
        fill("grey")
        push();
      
        translate(this.x, this.y)
        rotate(this.angle);
        //we need to tilt the rectangle to a angle
        rect(-10, -20,this.width, this.height);
        pop();
        arc(this.x-35, this.y+85, 170, 230, PI, TWO_PI);
        //not compulsory to give
        noFill();
    }
    */

    
    /*part1
    display()
    {
        fill("grey")
       
        
      //  rect(100,30,this.width, this.height);
        rect(this.x,this.y,this.width, this.height);
       // arc(this.x-35, this.y+85, 170, 230, PI, TWO_PI);
        arc(this.x, this.y, 170, 230, PI, TWO_PI);
        //not compulsory to give
        noFill();
    }
    
    */
}