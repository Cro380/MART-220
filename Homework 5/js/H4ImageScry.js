class Pizza {
    constructor() 
    {
        this.x = random(300, width - 300);
        this.y = random(250, width - 250);
       
        this.cheeseSize = 280;
        this.cheeseX = this.x;
        this.cheeseY = this.y;
        
        this.pepperoniSize = 75;
    
        this.peppersSize = 20;

        this.crustSize = 300;
        
        this.visible = true;
    }


    drawPizza() 
    {
        if(!this.visible) return;
        
        // Crust
        fill(150, 80, 70);
        circle(this.X, this.Y, this.crustSize);

        // Cheese
        fill(255, 225, 0);
        for (let i = 0; i < 5; i++) {
            circle(this.cheeseX, this.cheeseY, this.cheeseSize);
            this.cheeseX += random(5);
            this.cheeseX -= random(5);
            this.cheeseY -= random(5);
            this.cheeseY += random(5);
        }

        // Pepperoni
        fill(100, 0, 0);
        circle(this.X, this.Y, this.pepperoniSize);

        // Peppers
        fill(0, 100, 0);
        rect(this.X, this.Y, this.peppersSize, this.peppersSize);

        // Move pepperoni
       if(keyIsPressed)
    {
         if(key == 'a')
         {
              this.X-=3;
         }
    
         else if(key == 'd')
         {
              this.X+=3;
         }
    
         else if(key == 'w')
         {
              this.Y-=3;
         }
    
         else if(key == 's')
         {
              this.Y+=3;
         }
    }

        // Move peppers
        if(keyIsPressed)
    {
         if(key == 'a')
         {
              this.peppersX-=3;
         }
    
         else if(key == 'd')
         {
              this.peppersX+=3;
         }
    
         else if(key == 'w')
         {
              this.peppersY-=3;
         }
    
         else if(key == 's')
         {
              this.peppersY+=3;
         }
    }
    }

    randomizePosition()
    {
        this.X = random(100, 500);
        this.Y = random(100, 400);
        this.crustSize = random(250, 300);
        this.cheeseSize = random(200, 300);
        this.cheeseX = random(250,300);
        this.cheeseY = random(250,300);
    }

    checkCollision(AnimationX, AnimationY)
    {
        let distance = dist(this.X, this.Y, AnimationX, AnimationY);
        if (distance < this.crustSize / 2)
        {
            this.visible = false;
        }
    }
}



class imageclass {
    constructor(path, x, y)
    {
        this.path = path;
        this.x = x;
        this.y = y;
        this.img = loadImage(this.path);
    }

    getImage()
    {
        return this.img;
    }

    getX()
    {
        return this.x;
    }

    getY()
    {
        return this.y;
    }

    
}
