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

var pizza1;
var pizza1X = 1;
var pizza1Y = 900;
var pizza1Speed = 2;

var pizza_2;
var pizza2X = 100;
var pizza2Y = 3000;
var pizza_2Speed = 2;

var pizza_AI;
var pizzaAIX = 2500;
var pizzaAIY = 550;
var pizzaAISpeed = 2;

var newFont;
var timerText = 0;
var timerValue = 100;
var startButton;

function preload()
{
    pizza1 = loadImage('pics/AIPizza2.webp');
    pizza2 = loadImage('pics/AIPizza3.webp');
    pizzaAI = loadImage('pics/AIPizza.webp');
    newFont = loadFont('fonts/AURORAPRO.otf');
}

function setup()
{
    createCanvas(5000,5000);
    textAlign(CENTER);
    setInterval(changeSpeed, 1000);
}
function draw()
{
    background(250);
    textSize(30);
    
    //Text
    fill(0,0,0);
    textFont(newFont);
    textSize(20);
    text('Extra Large Anomaly(Pizza)',50,50);
    text('Dylan Crotto',500,500);
    text('Time:' + timerText, 550, 550);

    if (timerValue >= 100) {
        text('0:' + timerValue, width / 2, height / 2);
    }
    if (timerValue < 100) {
        text('0:0' + timerValue, width / 2, height / 2);
    }
    if (timerValue == 0) {
        text('0:' + timerValue, width / 2, height / 2);
    }
    
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
    //image insert
    image(pizza1, pizza1X, pizza1Y);
    pizza1X += pizza1Speed;
    if(pizza1X >= width - pizza1.width || pizza1X <= pizza1.width/8)
    {
        pizza1Speed *= 1;
        pizza1Speed *= 1;
    }
    image(pizza2, pizza2X, pizza2Y);

    image(pizzaAI, pizzaAIX, pizzaAIY);

}

function changeSpeed()
{
    timerText++;
    if (timerText % 5 == 0)
    {
        pizza1Speed = random(1, 10);
        pizza2Speed = random(1, 10);
        pizzaAISpeed = random(1, 10);
    }
}
