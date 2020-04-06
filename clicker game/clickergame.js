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
let cesnaCost;
let totalCesna;
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
  cesnaCost = 40;
  totalCesna = 0;
  updateDone = 1;

  Money = getItem('Money');
  totalCesna = getItem('totalCesna');
  moneyPerSec = getItem('MoneyPerSec');
  cesnaCost = getItem('cesnaCost');
  moneyPerClick = getItem('MoneyPerClick');
  updateCost = getItem('updateCost');
  playerClick = getItem('playerClick');
  playerLvl = getItem('playerLvl');
}

function draw()
{
  fill(255, 0, 0);
  image(img, 0, 0, 1080, 720);
  image(swordfish, 400, 250, 250, 200);
  image(cesna, 1100, 0, 200, 100);
  textSize(32);
  totalCesna; 
  cesnaCost;
  Money;
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


  image(upgreat, 30, 100, 100, 100);
    
   if (updateCost == 100){
    console.log('poep');
       
    text('Cost:'+ updateCost, 300, 40);
   }
  text('cost: ' + round(cesnaCost), 1150, 80, textSize(14));

  Money += moneyPerSec/60;
  console.log(totalCesna);
  console.log(cesnaCost);

  image(upgreat, 30,100,100,100);

       
    text('Cost:' + updateCost, 35, 250);
  
   Money += moneyPerSec/60;

   storeItem('Money', Money);
   storeItem('totalCesna', totalCesna);
   storeItem('MoneyPerSec', moneyPerSec);
   storeItem('cesnaCost', cesnaCost);
   storeItem('MoneyPerClick', moneyPerClick);
   storeItem('updateCost', updateCost);
   storeItem('playerClick', playerClick);
   storeItem('playerLvl', playerLvl);

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
        
  }
  }
  if(mouseX > 1100 && mouseX < 1300 && mouseY > 0 && mouseY < 100 && Money >= cesnaCost)
  {
    Money -= cesnaCost;
    totalCesna += 1;
    cesnaCost *= 1.3;
    moneyPerSec += totalCesna / totalCesna;
  }
}

