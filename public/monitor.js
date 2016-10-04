var socket = io('/terie');     //http://socket.io/docs/
var message_state = 0;
var buttons = [];
var y_thing = 100;

function setup(){
  createCanvas(400, 400);
  background(0);
     
}

function preload() {
    wow = loadImage("images/wow.png");
    angry = loadImage("images/angry.png");
    haha = loadImage("images/haha.png");
    like = loadImage("images/like.png");
    love = loadImage("images/love.png");
    sad = loadImage("images/sad.png");
}



function draw(){
    if(frameCount > 400) {
        frameCount = frameCount - Math.floor(frameCount / 400) * 400;
    }
   
    background(255,255,255,255);
    
    fill(255, 102, 153);

    //image(wow, -frameCount+400, 100, 100, 100);
    textSize(20);
    
  //a very simple state machine
    if(message_state==0){
        //text("Nothing to See Here", 100, 100);
    }
    else if(message_state==1){
        //text("like", 100, 100);
        add_button(like);
        
        //image(like, -frameCount+400, 100, 100, 100);
    }
    else if(message_state==2){
        //text("love", 100, 100);
        add_button(love);
        //image(like, -frameCount+400, 100, 100, 100);
    }
    else if(message_state==3){
       // text("haha", 100, 100);
        add_button(haha);
        //image(haha, -frameCount+400, 100, 100, 100);
    }
    else if(message_state==4){
       // text("wow", 100, 100);
        add_button(wow);
        //image(wow, -frameCount+400, 100, 100, 100);
    }
    else if(message_state==5){
        //text("angry", 100, 100);
        add_button(angry);
        //image(angry, -frameCount+400, 100, 100, 100);
    }
   else if(message_state==6){
       //text("sad", 100, 100);
       add_button(sad);
       //image(sad, -frameCount+400, 100, 100, 100);
  }
    for(var i = 0; i < buttons.length; i++) {
        buttons[i].display();
        buttons[i].update();
    }
}


function add_button(type) {
    var newButton = {
        type: type,
        //final_x: random(0,400),
        //final_y: random(0,400),
        init_x: 400,
        init_y: 100,
        display: function() {
            image(type, this.init_x, this.init_y, 100, 100);
        },
        update: function() {
            this.init_x = 400-frameCount ;
        }
    };
    buttons.push(newButton);
        
}



socket.on('like', function(){
  console.log("like fired");
  message_state=1;
})

socket.on('love', function(){
  console.log("love");
  message_state=2;
})

socket.on('haha', function(){
  console.log("haha");
  message_state=3;
})

socket.on('wow', function(){
  console.log("wow");
  message_state=4;
})

socket.on('angry', function(){
  console.log("angry");
  message_state=5;
})

socket.on('sad', function(){
  console.log("sad");
  message_state=6;
})

