let img;
let Money;
let swordfish;
let moneyPerClick;
let playerLvl;
let playerClick;
let updateCost;

function preload()
{
  img = loadImage('assets/sky.jpg');
  swordfish = loadImage('assets/swordfish.jpg');
  upgreat = loadImage ('assets/upgreat.webp');
}


function setup() {
  createCanvas(1080, 720);
  fill(255, 0, 0);
  image(img, 0, 0, 1080, 720);
  image(swordfish, 400, 250, 250, 200);
  Money = 0;
  moneyPerClick = 1;
  image(upgreat, 300,300,300,300);
  playerClick = 1;
  playerLvl = 1;
  updateCost = 100;
}

function draw()
{
  fill(255, 0, 0);
  image(img, 0, 0, 1080, 720);
  image(swordfish, 400, 250, 250, 200);
  textSize(32);
  if(Money < 1000000){
      text('Money: ' + Money, 460, 40);
   }
  else if(Money <= 1000000000 && Money >= 1000000){
      
      
      text('Money: ' + (Money / 1000000) + 'M', 460, 40);
  }
    else {
        text('Big pepe', 460, 40);
    }
  image(upgreat, 30,100,100,100);
    
   if (updateCost == 100){
    console.log(poep);
       
    Text('Cost:'+ updateCost, 300, 40);
   }
  
}

function mouseClicked()
{
  if(mouseX > 400 && mouseX < 650 && mouseY > 250 && mouseY < 450)
  {
    Money += moneyPerClick;
    
  }
  if(mouseX > 30 && mouseX < 130 && mouseY > 100 && mouseY < 200)
  {
    playerLvl++;
    playerClick = playerLvl * 7;
    moneyPerClick += playerClick;
    
      console.log(moneyPerClick);
      console.log(playerLvl);
      console.log(playerClick);
      
  }
}
