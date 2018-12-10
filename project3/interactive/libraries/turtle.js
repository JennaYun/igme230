// Turtle for p5js -- Nancy Doubleday 2017

/*-----Turtle commands:----------
makeTurtle(x, y)    make a turtle at x, y, facing right, pen down
forward(p)          move forward p pixels
back(p)             move backwards p pixels
moveTo(x, y)        move to position(x, y)
left(deg)           turn left d degrees
right(deg)          turn right d degrees
penUp()             pen up (won't draw)
penDown()           pen down (will draw)
setPenColor(color)  set pen (stroke of turtle) to a color 
setWeight(w)        set line width to w
setAngle(deg)       turn to this absolute direction in degrees
addPoint(x, y)      for filled shapes, collect points
endTurtleShape(closed, a [b, c, d]) call to complete shape when all points are collected/ 
                    parameters: true or false for closed, and 1-4 values for fill color  
---variables---
x           x position of drawing point
y           y position of drawing point
angle       in degrees, clockwise
isDown   boolean - is the pen down?
color       current color of the drawing pen (valid p5.js color)
weight      thickness in pixels 
*/



function Turtle(theX, theY) {
    /*----------------------------------
    *** TURTLE VARIABLES ***
    -----------------------------------*/
    this.x = theX;
    this.y = theY;
    this.angle = 0.0;
    this.isDown = true;
    this.color = 0;
    this.weight = 1;

    // for fills
    var vertices = [];

    /*----------------------------------
    *** TURTLE FUNCTIONS ***
    -----------------------------------*/
    // --- basic movement commands ---

    // move in the direction the turtle is facing
    this.forward = function (p) {
        var rad = radians(this.angle);
        var newX = this.x + cos(rad) * p;
        var newY = this.y + sin(rad) * p;
        this.moveTo(newX, newY);
    };

    // move away from directio turtle is facing
    this.back = function (p) {
        this.forward(-p);
    };

    // move to an absolute position
    //if the pen is down, it will draw!
    this.moveTo = function (x, y) {
        if (this.isDown) {
            stroke(this.color);
            strokeWeight(this.weight);
            line(this.x, this.y, x, y);
        }
        this.x = x;
        this.y = y;

    };

    //turn left by deg degrees
    this.left = function (deg) {
        this.angle -= deg;
    };

    //turn right by deg degrees 
    this.right = function (deg) {
        this.angle += deg;
    };

    this.setAngle = function (deg) {
        this.angle = deg;
    };

    //make the pen draw
    this.penDown = function () {
        this.isDown = true;
    };

    // the pen will not draw when it moves
    this.penUp = function () {
        this.isDown = false;
    };

    //set the color. may have up to 4 args
    this.setPenColor = function (args) {
        switch (arguments.length) {
            case 1:
                this.color = arguments[0];
                break;
            case 2:
                this.color = color(arguments[0], arguments[1]);
                break;
            case 3:
                this.color = color(arguments[0], arguments[1], arguments[2]);
                break;
            case 4:
                this.color = color(arguments[0], arguments[1], arguments[2], arguments[3]);
                break;
        }

    };

    //set the line thickness
    this.setWeight = function (w) {
        this.weight = w;
    };

    // collect vertices for a filled shape
    this.addPoint = function (a, b) {
        vertices.push([a, b]);
    };

    // draws filled shape 
    this.endTurtleShape = function (args) {
        var col = color(0);
        switch (arguments.length) {

            case 2:
                col = color(arguments[1]);
                break;
            case 3:
                col = color(arguments[1], arguments[2]);
                break;
            case 4:
                col = color(arguments[1], arguments[2], arguments[3]);
                break;
            case 5:
                col = color(arguments[1], arguments[2], arguments[3], arguments[4]);
                break;
            default:
                alert("You need 2-5 arguments for endTurtleShape");
                break;
        }

        fill(col);
        beginShape();
        for (var i = 0; i < vertices.length; i++) {
            vertex(vertices[i][0], vertices[i][1]);
        };
        if (arguments[0] == true) endShape(CLOSE);
        else endShape();
        vertices = [];
    };

}
