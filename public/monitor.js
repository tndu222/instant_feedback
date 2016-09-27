var socket = io('http://127.0.0.1:8081');     //http://socket.io/docs/
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
    text("Under Construction", 100, 100);
  }
  else if(message_state==1){
    text("Trigger 1", 100, 100);
  }
  else if(message_state==2){
    text("Trigger 2", 100, 100);
  }
  else if(message_state==3){
    text("Trigger 3", 100, 100);
  }
  else if(message_state==4){
    text("Trigger 4", 100, 100);
  }
  else if(message_state==5){
    text("Trigger 5", 100, 100);
  }
}

socket.on('trigger_1', function(){
  console.log("trigger 1 listener fired");
  message_state=1;
})

socket.on('trigger_2', function(){
  console.log("trigger 2 listener fired");
  message_state=2;
})

socket.on('trigger_3', function(){
  console.log("trigger 3 listener fired");
  message_state=3;
})

socket.on('trigger_4', function(){
  console.log("trigger 4 listener fired");
  message_state=4;
})

socket.on('trigger_5', function(){
  console.log("trigger 5 listener fired");
  message_state=5;
})
