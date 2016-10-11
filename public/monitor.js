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
    image(this.type, this.xpos, this.ypos, windowHeight/15, windowHeight/18);
};

button.prototype.update = function() {
    var rando = random(25, 100);
    var speed = random(.25, 2);
    this.xpos = this.xpos-speed;
    this.ypos = this.ypos + sin(frameCount / rando);
};

function setup(){
    createCanvas(windowWidth, windowHeight);
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
    background(400,400,400,255);
    fill(255, 102, 153);
    textSize(windowHeight/30);

    image(like, .3*windowWidth, .85*windowHeight, windowHeight/25, windowHeight/25);
    text(like_count, .33*windowWidth, .88*windowHeight);

    image(love, .37*windowWidth, .85*windowHeight, windowHeight/25, windowHeight/25);
    text(love_count, .4*windowWidth, .88*windowHeight);

    image(haha, .44*windowWidth, .85*windowHeight, windowHeight/25, windowHeight/25);
    text(haha_count, .47*windowWidth, .88*windowHeight);

    image(wow, .51*windowWidth, .85*windowHeight, windowHeight/25, windowHeight/25);
    text(wow_count, .54*windowWidth, .88*windowHeight);

    image(angry, .58*windowWidth, .85*windowHeight, windowHeight/25, windowHeight/25);
    text(angry_count, .61*windowWidth, .88*windowHeight);

    image(sad, .65*windowWidth, .85*windowHeight, windowHeight/25, windowHeight/25);
    text(sad_count, .68*windowWidth, .88*windowHeight);

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
    buttons.push(new button(7/60*windowHeight, like));
    like_count++;
})

socket.on('love', function(){
    console.log("love");
    message_state=2;
    buttons.push(new button(14/60*windowHeight, love));
    love_count++;
})

socket.on('haha', function(){
    console.log("haha");
    message_state=3;
    buttons.push(new button(21/60*windowHeight, haha));
    haha_count++;
})

socket.on('wow', function(){
    console.log("wow");
    message_state=4;
    buttons.push(new button(28/60*windowHeight, wow));
    wow_count++;
})

socket.on('angry', function(){
    console.log("angry");
    message_state=5;
    buttons.push(new button(35/60*windowHeight, angry));
    angry_count++;
})

socket.on('sad', function(){
    console.log("sad");
    message_state=6;
    buttons.push(new button(.7*windowHeight, sad));
    sad_count++;
})
