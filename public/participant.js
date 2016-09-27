function setup(){
  createCanvas(400, 400);
  background(0);
  console.log("Ready to listen to Input -->");
}

function preload() {
  wow = loadImage("./wow.png");
  angry = loadImage("./angry.png");
  haha = loadImage("./haha.png");
  like = loadImage("./like.png");
  love = loadImage("./love.png");
  sad = loadImage("./sad.png");
}

function draw(){
  background(0);

  image(like,50,50,100,100)
  image(love,100,50,100,100)
  image(haha,150,50,100,100)
  image(wow,200,50,100,100)
  image(angry,250,50,100,100)
  image(sad,3000,50,100,100)
}

function mouseClicked() {
  if(mouseX>50&&mouseX<150&&mouseY>100&&mouseY<150){
    console.log("clicked on trigger_1");
    httpGet('/trigger_1');
  }

  if(mouseX>250&&mouseX<350&&mouseY>100&&mouseY<150){
    console.log("clicked on trigger_2");
    httpGet('/trigger_2');
  }
}
