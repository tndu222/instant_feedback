
function setup(){
  createCanvas(400, 520);
  background(0);
  console.log("Ready to listen to Input -->");
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
  background(0);

  image(like,150,5,80,80)
  image(love,150,90,80,80)
  image(haha,150,175,80,80)
  image(wow,150,260,80,80)
  image(angry,150,345,80,80)
  image(sad,150,430,80,80)
}
//like
function mouseClicked() {
    if(mouseX>150&&mouseX<250&&mouseY>5&&mouseY<80){
        console.log("like!");
        
        httpGet('/like');
    }
//love
    if(mouseX>150&&mouseX<250&&mouseY>85&&mouseY<165){
        console.log("love!");
     
        httpGet('/love');
    }
//haha
    if(mouseX>150&&mouseX<250&&mouseY>175&&mouseY<250){
        console.log("haha");
     
        httpGet('/haha');
    }
//wow
    if(mouseX>150&&mouseX<250&&mouseY>260&&mouseY<335){
        console.log("wow");
      
        httpGet('/wow');
    }
//angry
    if(mouseX>150&&mouseX<250&&mouseY>345&&mouseY<420){
        console.log("angry");
      
        httpGet('/angry');
    }
//sad
    if(mouseX>150&&mouseX<250&&mouseY>430&&mouseY<500){
        console.log("sad");
        httpGet('/sad');
        
    }
}
