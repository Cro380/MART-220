var x = 100;
var y = 100;

var crustX = 300;
var crustY = 250;
var crustSize = 310;

var cheeseX = 300;
var cheeseY = 250; 
var cheeseSize = 280;

var PepperoniX = 300;
var PepperoniY = 150;
var PepperoniSize = 75;

var PeppersX = 350;
var PeppersY = 350;
var PeppersSize = 20;


function setup()
{
    createCanvas(1920,1080);
}
function draw()
{
    background(220);
    textSize(30);
    //Text
    fill(0,0,0);
    text('Extra Large Anomaly(Pizza)',50,50);
    text('Dylan Crotto',500,500);
    
    //Crust
    fill(150,80,70);
    circle(300,250,310);
    
    //Cheese
    fill(300,225,0);
    for(var i = 0; i < 5; i++)
    {
        circle(cheeseX, cheeseY, cheeseSize)
        cheeseX+=random(5);
        cheeseX-=random(5);
        cheeseY-=random(5);
        cheeseY+=random(5);
    }
    
    //Pepperoni
    fill(100,0,0);
    circle(PepperoniX,PepperoniY,75);
    circle(PepperoniX,PepperoniY,75);
    circle(PepperoniX,PepperoniY,75);
    circle(PepperoniX,PepperoniY,75);
    circle(PepperoniX,PepperoniY,75);
    circle(PepperoniX,PepperoniY,75);
    if(keyIsPressed)
        {
            if(key == 'a')
            {
                PepperoniX-=3;
            }

            else if(key == 'd')
            {
                PepperoniX+=3;
            }

            else if(key == 'w')
            {
                PepperoniY-=3;
            }

            else if(key == 's')
            {
                PepperoniY+=3;
            }
        }
    
    //peppers
    fill(0,100,0);
    rect(PeppersX,PeppersY,20,20);
    rect(PeppersX,PeppersY,20,20);
    rect(PeppersX,PeppersY,20,20);
    rect(PeppersX,PeppersY,20,20);
    rect(PeppersX,PeppersY,20,20);
    rect(PeppersX,PeppersY,20,20);
    rect(PeppersX,PeppersY,20,20);
    if(keyIsPressed)
        {
            if(key == 'a')
            {
                PeppersX-=3;
            }

            else if(key == 'd')
            {
                PeppersX+=3;
            }

            else if(key == 'w')
            {
                PepperoniY-=3;
            }

            else if(key == 's')
            {
                PepperoniY+=3;
            }
        }
    
}