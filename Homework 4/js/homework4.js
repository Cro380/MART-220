var x = 1000;
var y = 400;
var animation = [];
var i = 0; 
var HatBoyObjects = [];

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

var pizza2;
var pizza2X = 100;
var pizza2Y = 3000;
var pizza2Speed = 2;

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
    HatBoy = loadImage('Assets/png/Run (1).png');
    animation[0] = HatBoy;
    HatBoy = loadImage('Assets/png/Run (2).png');
    animation[1] = HatBoy;
    HatBoy = loadImage('Assets/png/Run (3).png');
    animation[2] = HatBoy;
    HatBoy = loadImage('Assets/png/Run (4).png');
    animation[3] = HatBoy;
    HatBoy = loadImage('Assets/png/Run (5).png');
    animation[4] = HatBoy;
    HatBoy = loadImage('Assets/png/Run (6).png');
    animation[5] = HatBoy;
    HatBoy = loadImage('Assets/png/Run (7).png');
    animation[6] = HatBoy;
    HatBoy = loadImage('Assets/png/Run (8).png');
    animation[7] = HatBoy;
    HatBoy = loadImage('Assets/png/Run (9).png');
    animation[8] = HatBoy;
    HatBoy = loadImage('Assets/png/Run (10).png');
    animation[9] = HatBoy;
    HatBoy = loadImage('Assets/png/Run (11).png');
    animation[10] = HatBoy;
    HatBoy = loadImage('Assets/png/Run (12).png');
    animation[11] = HatBoy;
    HatBoy = loadImage('Assets/png/Run (13).png');
    animation[12] = HatBoy;
    HatBoy = loadImage('Assets/png/Run (14).png');
    animation[13] = HatBoy;
    HatBoy = loadImage('Assets/png/Run (15).png');
    animation[14] = HatBoy;
}





function setup()
{
    createCanvas(5000,5000);
    textAlign(CENTER);
    setInterval(changeSpeed, 1000);
    setInterval(incrementIndex, 50);
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
    fill(255,225,0);
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
                PeppersY-=3;
            }

            else if(key == 's')
            {
                PeppersY+=3;
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
    }

    image(pizza2, pizza2X, pizza2Y);

    image(pizzaAI, pizzaAIX, pizzaAIY);
    
    image(animation[i], x, y);
}

function incrementIndex()
{
    i += 1;
    if(i >= animation.length) 
    {
        i = 0;
    }
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




