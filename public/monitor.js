var socket = io('/terie');     //http://socket.io/docs/
var message_state = 0;
var buttons = [];

function button(y, imgtype) {
    this.xpos = 400;
    this.ypos = y;
    this.type = imgtype;
}

button.prototype.display = function() {
    image(this.type, this.xpos, this.ypos, 50, 50);
};

button.prototype.update = function() {
    var rando = random(25, 100);
    var speed = random(.25, 2);
    this.xpos = this.xpos-speed;
    this.ypos = this.ypos + sin(frameCount / rando);
};

function setup(){
    createCanvas(400, 400);
    background(255);
    frameRate(30);
    smooth();
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
    background(255); 
    
    if(message_state==0){
        
    }
    else if(message_state==1){
 
    }
    else if(message_state==2){
       
    }
    else if(message_state==3){
        
    }
    else if(message_state==4){
        
    }
    else if(message_state==5){
         
    }
   else if(message_state==6){
     
  }
    for(var i = 0; i < buttons.length; i++) {
         buttons[i].display();
         buttons[i].update();
    }
  
}

socket.on('like', function(){
    console.log("like fired");
    message_state=1;
    buttons.push(new button(25, like));
})

socket.on('love', function(){
    console.log("love");
    message_state=2;
    buttons.push(new button(50, love));
})

socket.on('haha', function(){
    console.log("haha");
    message_state=3;
    buttons.push(new button(75, haha));
})

socket.on('wow', function(){
    console.log("wow");
    message_state=4;
    buttons.push(new button(100, wow));
})

socket.on('angry', function(){
    console.log("angry");
    message_state=5;
    buttons.push(new button(125, angry));
})

socket.on('sad', function(){
    console.log("sad");
    message_state=6;
    buttons.push(new button(175, sad));
})

