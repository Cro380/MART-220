
let toppings = [];

function setup() {
    createCanvas(600, 600);
    
    // Adding pepperoni (red circles)
    toppings.push(new Topping(300, 350, 40, color(200, 0, 0))); 
    toppings.push(new Topping(250, 250, 40, color(200, 0, 0))); 
    toppings.push(new Topping(350, 200, 40, color(200, 0, 0)));

    // Adding peppers (green squares)
    toppings.push(new Topping(200, 300, 20, color(0, 200, 0), "rect")); 
    toppings.push(new Topping(400, 250, 20, color(0, 200, 0), "rect")); 
    toppings.push(new Topping(320, 320, 20, color(0, 200, 0), "rect"));
}

function draw() {
    background(255);
    
    // Draw pizza crust
    fill(200, 140, 70);
    ellipse(width / 2, height / 2, 350);

    // Draw cheese
    fill(255, 220, 100);
    ellipse(width / 2, height / 2, 320);
    
    // Draw and update toppings
    toppings.forEach(topping => topping.display());
}

// Class for draggable toppings
class Topping {
    constructor(x, y, size, col, shape = "circle") {
        this.x = x;
        this.y = y;
        this.size = size;
        this.col = col;
        this.shape = shape;
        this.dragging = false;
        this.offsetX = 0;
        this.offsetY = 0;
    }

    display() {
        fill(this.col);
        noStroke();
        if (this.shape === "circle") {
            ellipse(this.x, this.y, this.size);
        } else {
            rect(this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
        }
    }

    contains(px, py) {
        if (this.shape === "circle") {
            return dist(px, py, this.x, this.y) < this.size / 2;
        } else {
            return px > this.x - this.size / 2 && px < this.x + this.size / 2 &&
                   py > this.y - this.size / 2 && py < this.y + this.size / 2;
        }
    }
}

// Handle mouse pressed
function mousePressed() {
    for (let topping of toppings) {
        if (topping.contains(mouseX, mouseY)) {
            topping.dragging = true;
            topping.offsetX = mouseX - topping.x;
            topping.offsetY = mouseY - topping.y;
        }
    }
}

// Handle mouse dragged
function mouseDragged() {
    for (let topping of toppings) {
        if (topping.dragging) {
            topping.x = mouseX - topping.offsetX;
            topping.y = mouseY - topping.offsetY;
        }
    }
}

// Handle mouse released
function mouseReleased() {
    for (let topping of toppings) {
        topping.dragging = false;
    }
}
