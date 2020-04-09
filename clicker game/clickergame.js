let img;
let Money;
let swordfish;
let moneyPerClick;
let playerLvl;
let playerClick;
let upgreat;
let cesna;
let spitfire;
let moneyPerSec;
let updateCost;
let cesnaCost;
let totalCesna;
let updateDone;
let spitfireCost;
let totalSpitfire;


function preload()
{
  img = loadImage('assets/sky.jpg');
  swordfish = loadImage('assets/swordfish.jpg');
  upgreat = loadImage('assets/upgreat.webp');
  cesna = loadImage('assets/cesna.jpg');
  spitfire = loadImage('assets/spitfire.jpg');
}


function setup() 
{
  createCanvas(1400, 720);
  fill(255, 0, 0);
  image(img, 0, 0, 1080, 720);
  image(swordfish, 400, 250, 250, 200);
  image(spitfire, 1100, 110, 200, 100);
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
  spitfireCost = 130;
  totalSpitfire = 0;

  Money = getItem('Money');
  totalCesna = getItem('totalCesna');
  moneyPerSec = getItem('MoneyPerSec');
  cesnaCost = getItem('cesnaCost');
  moneyPerClick = getItem('MoneyPerClick');
  updateCost = getItem('updateCost');
  playerClick = getItem('playerClick');
  playerLvl = getItem('playerLvl');
  spitfireCost = getItem('spitfireCost');
  totalSpitfire = getItem('totalSpitfire');
}

function draw()
{
  fill(255, 0, 0);
  image(img, 0, 0, 1080, 720);
  image(swordfish, 400, 250, 250, 200);
  image(cesna, 1100, 0, 200, 100);
  image(spitfire, 1100, 110, 200, 100);
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
  text('cost: ' + round(cesnaCost), 1150, 80, textSize(14));
  text('cost: ' + round(spitfireCost), 1150, 190, textSize(14));

  Money += moneyPerSec/60;
  console.log(totalCesna);
  console.log(cesnaCost);
  console.log(spitfireCost);

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
   storeItem('spitfireCost', spitfireCost);
   storeItem('totalSpitfire', totalSpitfire);
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
    cesnaCost *= 1.2;
    moneyPerSec += totalCesna / totalCesna;
  }

  if(mouseX > 1100 && mouseX < 1300 && mouseY > 110 && mouseY < 210 && Money >= spitfireCost)
  {
    Money -= spitfireCost;
    totalSpitfire++;
    spitfireCost *= 1.2;
    moneyPerSec += 4;
  }

}
