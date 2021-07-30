class Tower
{
    constructor(x,y,width,height)
    {
        var options = {

            isStatic: true,
        };
        /*
        this.width = width;
        this.height = height;
        this.image = loadImage('assets/tower.png')
        this.body = Bodies.rectangle(x, y, this.width,this.height, options);

        */
        //alternate way
        this.image = loadImage('assets/tower.png')
        this.body = Bodies.rectangle(x, y, width,height, options);
        //instance variable
        //this.x and this.y are not compusory for physics body but can be used.
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

                 
        World.add(myWorld, this.body);
        //console.log(this.width)
    }

    display()
    { 
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        //translate(pos.x, pos.y)
       // rotate(angle);


        imageMode(CENTER);
      //if this.x is used then pass that in the image()  
      //image(this.image, this.x, this.y, this.width, this.height);
        image(this.image, pos.x, pos.y, this.width, this.height);
        pop();
        
        
    }


}