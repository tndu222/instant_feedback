var socket = io('/terie');     //http://socket.io/docs/
var message_state = 0;

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

    background(255,255,255,255);
    
    fill(255, 102, 153);

    //image(wow, -frameCount+400, 100, 100, 100);
    textSize(20);

  //a very simple state machine
    if(message_state==0){
        text("Nothing to See Here", 100, 100);
    }
    else if(message_state==1){
        //text("like", 100, 100);
        image(like, -frameCount+400, 100, 100, 100);
    }
    else if(message_state==2){
        //text("love", 100, 100);
        image(like, -frameCount+400, 100, 100, 100);
    }
    else if(message_state==3){
       // text("haha", 100, 100);
        image(haha, -frameCount+400, 100, 100, 100);
    }
    else if(message_state==4){
       // text("wow", 100, 100);
        image(wow, -frameCount+400, 100, 100, 100);
    }
    else if(message_state==5){
        //text("angry", 100, 100);
        image(angry, -frameCount+400, 100, 100, 100);
    }
   else if(message_state==6){
       //text("sad", 100, 100);
       image(sad, -frameCount+400, 100, 100, 100);
  }
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
