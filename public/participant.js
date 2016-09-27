function setup(){
  createCanvas(400, 650);
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

  image(like,150,20,100,100)
  image(love,150,120,100,100)
  image(haha,150,220,100,100)
  image(wow,150,320,100,100)
  image(angry,150,420,100,100)
  image(sad,150,520,100,100)
}

function mouseClicked() {
  if(mouseX>150&&mouseX<250&&mouseY>20&&mouseY<120){
    console.log("clicked on trigger_1");
    httpGet('/trigger_1');
  }

  if(mouseX>150&&mouseX<250&&mouseY>120&&mouseY<220){
    console.log("clicked on trigger_2");
    httpGet('/trigger_2');
  }
  if(mouseX>150&&mouseX<250&&mouseY>220&&mouseY<320){
    console.log("clicked on trigger_3");
    httpGet('/trigger_3');
  }

  if(mouseX>150&&mouseX<250&&mouseY>320&&mouseY<420){
    console.log("clicked on trigger_4");
    httpGet('/trigger_4');
  }
  if(mouseX>150&&mouseX<250&&mouseY>420&&mouseY<520){
    console.log("clicked on trigger_5");
    httpGet('/trigger_5');
  }

}
