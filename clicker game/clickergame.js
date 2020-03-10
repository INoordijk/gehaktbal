let img;
let Money;
let swordfish;
let moneyPerClick;

function preload()
{
  img = loadImage('assets/sky.jpg');
  swordfish = loadImage('assets/swordfish.jpg');
}


function setup() {
  createCanvas(1080, 720);
  fill(255, 0, 0);
  image(img, 0, 0, 1080, 720);
  image(swordfish, 400, 250, 250, 200);
  Money = 0;
  moneyPerClick = 1;
}

function draw()
{
  textSize(32);
  text('Money: ' + Money, 460, 40);
}

function mouseClicked()
{
  if(mouseX > 400 && mouseX < 650 && mouseY > 250 && mouseY < 450)
  {
    Money = Money += moneyPerClick;
    
  }
}
