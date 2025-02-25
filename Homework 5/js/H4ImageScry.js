class Pizza {
    constructor() 
    {
        this.x = 300;
        this.y = 250;
       
        this.cheeseX = 300;
        this.cheeseY = 250;
        this.cheeseSize = 280;
        
        this.pepperoniX = 300;
        this.pepperoniY = 250;
        this.pepperoniSize = 75;
    
        this.peppersX = 300;
        this.peppersY = 250;
        this.peppersSize = 20;
    
        this.crustX = random(300, width - 300);
        this.crustY = random(250, height - 250);
        this.crustSize = 310;
    }

    drawPizza() 
    {
        // Crust
        fill(150, 80, 70);
        circle(this.crustX, this.crustY, this.crustSize);

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
        circle(this.pepperoniX, this.pepperoniY, this.pepperoniSize);

        // Peppers
        fill(0, 100, 0);
        rect(this.peppersX, this.peppersY, this.peppersSize, this.peppersSize);

        // Move pepperoni
       if(keyIsPressed)
    {
         if(key == 'a')
         {
              this.pepperoniX-=3;
         }
    
         else if(key == 'd')
         {
              this.pepperoniX+=3;
         }
    
         else if(key == 'w')
         {
              this.pepperoniY-=3;
         }
    
         else if(key == 's')
         {
              this.pepperoniY+=3;
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

    randomizeCrust() 
    {
        this.crustX = random(300,width - 300);
        this.crustY = random(250, height - 250);
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
