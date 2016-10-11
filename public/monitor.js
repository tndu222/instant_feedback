var socket = io('/terie');     //http://socket.io/docs/
var message_state = 0;
var buttons = [];

var like_count = 0, love_count = 0, haha_count=0, wow_count=0, angry_count=0, sad_count=0;

function button(y, imgtype) {
    this.xpos = width;
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
    createCanvas(windowWidth, (windowWidth / 16) * 9);
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
    background(198,198,198,255);
    fill(255, 102, 153);
    text_size=40;

    image(like, windowWidth/2-220, .85*windowHeight, 40, 40);
    text(like_count, windowWidth/2-180, .85*windowHeight);

    image(love, windowWidth/2-140, .85*windowHeight, 40, 40);
    text(love_count, windowWidth/2-100, .85*windowHeight);

    image(haha, windowWidth/2-60, .85*windowHeight, 40, 40);
    text(haha_count, windowWidth/2-20, .85*windowHeight);

    image(wow, windowWidth/2+20, .85*windowHeight, 40, 40);
    text(haha_count, windowWidth/2+60, .85*windowHeight);

    image(angry, windowWidth/2+100, .85*windowHeight, 40, 40);
    text(angry_count, windowWidth/2+140, .85*windowHeight);

    image(sad, windowWidth/2+180, .85*windowHeight, 40, 40);
    text(sad_count, windowWidth/2+220, .85*windowHeight);

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
    like_count++;
})

socket.on('love', function(){
    console.log("love");
    message_state=2;
    buttons.push(new button(50, love));
    love_count++;
})

socket.on('haha', function(){
    console.log("haha");
    message_state=3;
    buttons.push(new button(75, haha));
    haha_count++;
})

socket.on('wow', function(){
    console.log("wow");
    message_state=4;
    buttons.push(new button(100, wow));
    wow_count++;
})

socket.on('angry', function(){
    console.log("angry");
    message_state=5;
    buttons.push(new button(125, angry));
    angry_count++;
})

socket.on('sad', function(){
    console.log("sad");
    message_state=6;
    buttons.push(new button(175, sad));
    sad_count++;
})
