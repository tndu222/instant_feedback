var like_count = 0, love_count = 0, haha_count = 0, wow_count = 0, angry_count = 0, sad_count = 0;

function setup(){
  createCanvas(400, 650);
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

  image(like,150,20,100,100)
  image(love,150,120,100,100)
  image(haha,150,220,100,100)
  image(wow,150,320,100,100)
  image(angry,150,420,100,100)
  image(sad,150,520,100,100)
}
//like
function mouseClicked() {
    if(mouseX>150&&mouseX<250&&mouseY>20&&mouseY<120){
        console.log("like!");
        like_count++;
        httpGet('/like');
    }
//love
    if(mouseX>150&&mouseX<250&&mouseY>120&&mouseY<220){
        console.log("love!");
        love_count++;
        httpGet('/love');
    }
//haha
    if(mouseX>150&&mouseX<250&&mouseY>220&&mouseY<320){
        console.log("haha");
        haha_count++;
        httpGet('/haha');
    }
//wow
    if(mouseX>150&&mouseX<250&&mouseY>320&&mouseY<420){
        console.log("wow");
        wow_count++;
        httpGet('/wow');
    }
//angry
    if(mouseX>150&&mouseX<250&&mouseY>420&&mouseY<520){
        console.log("angry");
        angry_count++;
        httpGet('/angry');
    }
//sad
    if(mouseX>150&&mouseX<250&&mouseY>520&&mouseY<620){
        sad_count++;
        console.log("sad: " + sad_count);
        httpGet('/sad');
        
    }
}
