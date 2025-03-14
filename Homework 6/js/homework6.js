var x = 1000;
var y = 400;
var myAnimation;
var animation = [];
var i = 0; 
var runPaths = [];
var idlePaths = [];
var currentPaths;
var counter = 0;
var myInterval;
var index = 0;
var idleresult;
var runresult;
var AnimationX = 550;
var AnimationY = 400;

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
    runresult = loadStrings('./assets/png/runani.txt');
    idleresult = loadStrings('./assets/png/IdleAni.txt');
    
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
        myAnimation.push(new imageclass('assets/' + runPaths[i], x, y));
        animation[i] = myAnimation[i].getImage();
    }

    for(var i = 0; i < idlePaths.length; i++)
    {
        myAnimation.push (new imageclass('assets/' + idlePaths[i], x, y));
        animation[i] = myAnimation[i];
    }

    currentPaths = idlePaths;
    myInterval = setInterval(incrementIndex, 100);

    setInterval(() => {
        myPizza.randomizePosition();
}, 2000);
   
}
function draw()
{
    background(250);
    textSize(30);
    
    myPizza.drawPizza();

    myPizza.checkCollision(AnimationX, AnimationY);
    
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
        image(animation[i].getImage(), AnimationX, AnimationY);
    }

    //Olives
    fill(0,0,0);
    ellipse(250, 300, 20, 20);

    if (keyIsPressed) {
      clearInterval(myInterval);
      myInterval = null;

      index++;
      if (index > 3)
      {
        incrementIndex();
        index = 0;
      }

      //Right
      if (key == "d")
      {

        currentPaths = runPaths;
        animation = myAnimation;
        
        if (counter >= currentPaths.length)
        {
            counter = 0;
        }

        currentPaths[counter].setX(currentPaths[counter].getX() + 2);

        for (var i = 0; i < currentPaths.length; i++)
        {
            currentPaths[i].setX(currentPaths[0].getX());
        }

        runPaths = currentPaths;
      }

    //Left
        else if (key == "a")
        {
            currentPaths = runPaths;
            animation = myAnimation;
            
            if (counter >= currentPaths.length)
            {
                counter = 0;
            }

                currentPaths[counter].setX(currentPaths[counter].getX() - 2);

            for (var i = 0; i < currentPaths.length; i++)
            {
                currentPaths[i].setX(currentPaths[0].getX());
            }

        runPaths = currentPaths;
        }

    else 
      {
        if (myInterval == null)
        {
            myInterval = setInterval(incrementIndex, 100);
        }
        currentPaths = idlePaths;
      }

      image(currentPaths[counter], currentPaths[counter].getX(), currentPaths[counter].getY());
    }
}

function incrementIndex()
{
    counter += 1;
    if (counter >= currentPaths.length)
    {
        counter = 0;
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
