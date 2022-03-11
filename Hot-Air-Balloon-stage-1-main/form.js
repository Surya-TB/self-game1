class Form{
    constructor() {
        this.input = createInput("").attribute("placeholder", "Enter your name");
        this.playButton = createButton("Play");
        //this.input=createInput("Enter Your Name")
       // this.titleImg = createImg("./assets/title.png", "game title");
       // this.greeting = createElement("h2");
      }
display(){
    this.playButton.class ("play_button")
    this.input.class("name_text")
    this.input.position(600,400);
    this.playButton.position(600,500)
    //console.log("display is getting called")
    this.handleMousePressed();
}
handleMousePressed() {
    //console.log(gameState)
    this.playButton.mousePressed(() => {
        gameState=PLAY
        //console.log(gameState)
        console.log("pressed")
        console.log("gameSate has change to play")
        this.input.hide();
    this.playButton.hide();
    })
    
}
}
