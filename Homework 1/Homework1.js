function setup()
{
    createCanvas(1920,1080)
}
function draw()
{
    background(500)
    textSize(30)
    //Text
    fill(0,0,0)
    text('Pizza',50,50)
    fill(0,0,0)
    text('Dylan Crotto',500,500)
    //Crust
    fill(150,80,70)
    circle(300,250,310)
    //Cheese
    fill(300,225,0)
    circle(300,250,280)
    //Pepperoni
    fill(100,0,0)
    circle(300,350,75)
    circle(220,285,75)
    circle(220,200,75)
    circle(300,150,75)
    circle(380,210,75)
    circle(380,310,75)
    //peppers
    fill(0,100,0)
    rect(350,350,20,20)
    rect(250,145,20,20)
    rect(330,210,20,20)
    rect(220,320,20,20)
    rect(250,250,20,20)
    rect(370,260,20,20)
    rect(380,130,20,20)
}