var x = 1000;
var y = 400;
var myAnimation;
var animation = [];
var i = 0; 
var runPaths = [];

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
    runPaths = loadStrings('./assets/png/runani.txt');
    
}



function setup()
{
    createCanvas(5000,5000);
    textAlign(CENTER);
    setInterval(changeSpeed, 1000);
    setInterval(incrementIndex, 100);
    myPizza = new Pizza();
    
    for(var i = 0; i < runPaths.length; i++)
    {
        myAnimation = new imageclass(runPaths[i], x, y);
        animation[i] = myAnimation;
    }
}
function draw()
{
    background(250);
    textSize(30);
    
    myPizza.drawPizza();
    
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

    //image insert
    image(pizza1, pizza1X, pizza1Y);
    pizza1X += pizza1Speed;
    if(pizza1X >= width - pizza1.width || pizza1X <= pizza1.width/8)
    {
        pizza1Speed *= 1;
    }

    image(pizza2, pizza2X, pizza2Y);

    image(pizzaAI, pizzaAIX, pizzaAIY);

    if(animation.length > 0)
    {
        image(animation[i].getImage(), x, y);
    }
}

function incrementIndex()
{
    i++;
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

function mousePressed()
{
    myPizza.randomizePosition(myPizza);
}




