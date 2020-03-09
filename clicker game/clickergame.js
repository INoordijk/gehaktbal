let img;
let score = 0;

function preload()
{
  img = loadImage('assets/sky.jpg');
}


function setup() {
  createCanvas(1080, 720);
  fill(255, 0, 0);
  image(img, 0, 0);
}

function draw()
{
  textSize(50);
  text('score: ' + score, 10, 30);
}
