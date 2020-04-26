class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.clearbutton = createButton('Clear drawing');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.clearbutton.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("Paint");
    this.title.position(250, 30);
    this.title.fill("white");
    this.input.position(250,400);
    this.button.position(260,400);
    this.clearbutton.position(50,400);

    if(this.clearbutton.mousePressed)(()=>{
      
      clearDrawing=null;
      player.name = this.input.value();
      

    });

  }
}





