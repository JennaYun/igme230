/*
IGME-101
JennaYun
Mini Project 2
10/30/2017
*/

var dice;
var dieArray = [];
var addButton;
var subButton;
var rollButton; 
var click = 0;
var xIncrease = 0;
var canvasColor;
var sum = 0;
var padding = 90;

function setup() {
  createCanvas(600, 600);
  canvasColor = color(255, 104, 0);
  background(canvasColor);
  textFont("Arial");
  fill(50);
  noStroke();
  //variables for string to appear in buttons 
  var addition = "+";
  var subtraction = "--";
  var roll = "Roll All ";
  //adding objects
  dice = new Die();
  addButton = new Button(150,300,40,40,addition)
  subButton = new Button(200,300,40,40,subtraction);
  rollButton = new Button(300,300,160,40,roll);
    
  textSize(28);
  //code to add num values inside all array index
  //for (var i=0; i<dieArray.length; i++){ 
    //sum += dieArray[i];
    //}
    //text("Sum = " + sumArray(),200,400);
       // text(this.Number,100, 300);
  }



function draw () {
background(canvasColor);
    addButton.appear();
    subButton.appear();
    rollButton.appear();
for(var i = 0; i < dieArray.length; i++){
    dieArray[i].appear();
}
    sumArray();
    
    
}



function sumArray () {
    //use dieArray.length    
    //use a for loop (i counter) to cycle through array

    textSize(28);
    //fill(200,0,0);
   // background(canvasColor);
 
    
    var sum = 0;
    for ( var i=0; i < dieArray.length ; i++) {

    sum = sum + dieArray[i].Number;
    
    }
    text("Sum = " + sum,200,400);
    
    
    //return (sum);
}



class Button {
    constructor (x,y,width,height,text) {
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    this.text=text;
    this.fillColor=color(93, 27, 0);
    this.pressColor=color(30, 170, 0);
    this.appear();
  }
    
  appear() {
    //draws button
    fill(this.fillColor);
    rect(this.x,this.y,this.width,this.height,5);
    textSize(30);
    fill(240);
    //draws die text
    text(this.text, this.x+this.width/5, this.y+(this.height/1.3));
  }
  switch() { //switches color upon mousePress
    fill(this.pressColor);
    rect(this.x,this.y,this.width,this.height,5);
  }
}








function mousePressed () {
    //if mouse coordinates are within addition boundary
    if (mouseX>=150 && mouseX<=190 && mouseY>=300 && mouseY<=340 && click <= 4) {
        dieArray.push(new Die( padding * (click + 1),200,60,60,1));
        dieArray[click].appear();
        addButton.switch();
        click++;
    } 
    //if mouse coordinates are within subtraction boundary
    if (mouseX>=200 && mouseX<=240 && mouseY>=300 && mouseY<=340) {
        dieArray[dieArray.length-1].erase();
        dieArray.pop();
        subButton.switch();
        click--;
    }
    //if mouse coordinates are within roll all boundary
    if (mouseX>=300 && mouseX<=460 && mouseY>300 && mouseY<=340){
        for (let n = 0; n < 5; n++) {
            dieArray[n].roll();
        }
        rollButton.switch();
    }
    //long complicated way if mouse coordinates are within die boundaries, not sure how else to roll each die 
    if (mouseX>=90 && mouseX<=150 && mouseY>=200 && mouseY <= 260) {
        dieArray[0].roll();
    } else if (mouseX>=180 && mouseX<=240 && mouseY>=200 && mouseY <= 260) {
        dieArray[1].roll();
    } else if (mouseX>=270 && mouseX<=330 && mouseY>=200 && mouseY <= 260) {
        dieArray[2].roll();
    } else if (mouseX>=360 && mouseX<=420 && mouseY>=200 && mouseY <= 260) {
        dieArray[3].roll();
    } else if (mouseX>=450 && mouseX<=510 && mouseY>=200 && mouseY <= 260) {
        dieArray[4].roll();
    }
}


function mouseReleased () {
    //return addition button color to initial color 
    if (mouseX>=150 && mouseX<=190 && mouseY>=300 && mouseY<=340) {
        addButton.appear();
        
    }
    //return subtraction button color to initial color
    if (mouseX>=200 && mouseX<=240 && mouseY>=300 && mouseY<=340) {
        subButton.appear();
    }
    //return roll all button color to initial color
    if (mouseX>=300 && mouseX<=460 && mouseY>300 && mouseY<=340){
        rollButton.appear();
    }
}








class Die {
  constructor (x,y,width,height,Number) {
    this.x=x; //+xIncrease;
   // xIncrease=xIncrease+90; //xdecrease variable? 
    this.y=y;
    this.width=width;
    this.height=height;
    this.Number=int(random(1,7));
    this.fillColor=color(93, 27, 0);
  }
  appear() { //draw method
    //draws die
    fill(this.fillColor);
    rect(this.x,this.y,this.width,this.height,5); 
    textSize(42);
    fill(240);
    //draws die text
    //this.Number=int(random(1,7));
    text(this.Number,this.x+this.width/3.5, this.y+(this.height/1.3));
  }
  erase() { //erases or hides button upon subtraction button
    fill(canvasColor);
    rect(this.x+this.width,this.y,this.width + 30,this.height + 30,5);
  }
  roll() {
    fill(this.fillColor);
    rect(this.x,this.y,this.width,this.height,5);   
    this.Number=int(random(1,7));
    textSize(42);
    fill(240);
    text(this.Number,this.x+this.width/3.5, this.y+(this.height/1.3));
  } 
  /*sum() {
    textSize(28);
    //code to add num values inside all array index
    var s = 0;
    for (var s=0; i<dieArray.length; i++){
        s += dieArray[i];
    }
  }
  
  */
}


//deleted "Your total is" on the bottom
//switched the background color

// number