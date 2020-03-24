let img;
let Money;
let swordfish;
let moneyPerClick;
let playerLvl;
let playerClick;
let upgreat;
let cesna;
let moneyPerSec;
let updateCost;
let updateDone;


function preload()
{
  img = loadImage('assets/sky.jpg');
  swordfish = loadImage('assets/swordfish.jpg');
  upgreat = loadImage('assets/upgreat.webp');
  cesna = loadImage('assets/cesna.jpg');
}


function setup() 
{
  createCanvas(1400, 720);
  fill(255, 0, 0);
  image(img, 0, 0, 1080, 720);
  image(swordfish, 400, 250, 250, 200);
  Money = 100;
  moneyPerClick = 1;
  image(upgreat, 30, 100, 100, 100);
  playerClick = 1;
  playerLvl = 1;
  image(cesna, 1100, 0, 200, 100);
  moneyPerSec = 0;
  updateCost = 100;
  updateDone = 1;
}

function draw()
{
  fill(255, 0, 0);
  image(img, 0, 0, 1080, 720);
  image(swordfish, 400, 250, 250, 200);
  image(cesna, 1100, 0, 200, 100);
  textSize(32);
  if(Money < 1000000)
    {
      text('Money: ' + round(Money), 460, 40);
    }
  else if(Money <= 1000000000 && Money >= 1000000)
    { 
      text('Money: ' + (round(Money) / 1000000) + 'M', 460, 40);
    }
    else 
    {
        text('Big pepe', 460, 40);
    }

  image(upgreat, 30, 100, 100, 100);
  text('money per second: ' + moneyPerSec, 430, 60, textSize(20));

  image(upgreat, 30,100,100,100);

       
    text('Cost:' + updateCost, 35, 250);
  
   Money += moneyPerSec/60;
}

function mouseClicked()
{
  if(mouseX > 400 && mouseX < 650 && mouseY > 250 && mouseY < 450)
  {
    Money += moneyPerClick;
    
  }
  if(mouseX > 30 && mouseX < 130 && mouseY > 100 && mouseY < 200)
  {
      
    if (Money >= updateCost) {
        
    Money -= updateCost;
    playerLvl++;
    playerClick = playerLvl * 20;
    moneyPerClick += playerClick;
    updateDone += 1;
    updateCost = updateCost * updateDone;
        
    
      
    if( updateDone = 3){
        updateDone = 1
    }
        
        
    console.log( updateCost);
    console.log(moneyPerClick);
  }

  if(mouseX > 1100 && mouseX < 1300 && mouseY > 0 && mouseY < 100)
  {
    moneyPerSec += 1;
  }
 }
}

