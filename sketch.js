var canvas;


var database;
var position;
var clearDrawing;
var form;
let value = 0;
var pointer;

function setup(){
  canvas = createCanvas(500,500);
  fill(value);
  database = firebase.database();
  
  drawing =[];

}

function draw(){
 
  background(51);
  
  mouseDragged();
  mousePressed();
  drawSprites();
  }
  
   function mouseDragged() {
        
    pointer=createSprite(250,20,20,20);
    pointer.shapeColor="white";
    pointer.x = mouseX;
    pointer.y = mouseY;
    }
    function mousePressed(){
      if(clearDrawing){
       drawing=[]; 
      }
    }