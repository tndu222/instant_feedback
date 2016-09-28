var socket = io('http://127.0.0.1:8080');     //http://socket.io/docs/
var message_state = 0;

function setup(){
  createCanvas(400, 400);
  background(0);
}

function draw(){

  background(0);
  textSize(20);
  fill(255, 102, 153);

  //a very simple state machine
  if(message_state==0){
    text("Nothing to See Here", 100, 100);
  }
  else if(message_state==1){
    text("like", 100, 100);
  }
  else if(message_state==2){
    text("love", 100, 100);
  }
  else if(message_state==3){
    text("haha", 100, 100);
  }
  else if(message_state==4){
    text("wow", 100, 100);
  }
  else if(message_state==5){
    text("angry", 100, 100);
  }
   else if(message_state==6){
    text("sad", 100, 100);
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
