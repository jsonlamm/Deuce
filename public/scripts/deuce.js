class Vector
{
  constructor(x = 0, y = 0)
  {
    this.x = x;
    this.y = y;
  }
}

class Rect
{
  constructor(width, height)
  {
    this.position = new Vector;
    this.size = new Vector(width, height);
  }
}

class Ball extends Rect
{
  constructor()
  {
    super(10, 10);
    this.velocity = new Vector;
  }
}
const canvas = document.getElementById('deuce');
const context = canvas.getContext('2d');

const eyeBallL = new Ball;
console.log('eyeBallL : ', eyeBallL)
eyeBallL.position.x = 28;
eyeBallL.position.y = 35;

const eyeBallR = new Ball;
eyeBallR.position.x = eyeBallL.position.x * 5;
eyeBallR.position.y = eyeBallL.position.y;

const mouth = new Rect;
console.log('mouth : ', mouth)
mouth.position.x = 15;
mouth.position.y = 125;
mouth.size.x = 150;
mouth.size.y = 20;


// main canvas
context.fillStyle = '#999';
context.fillRect(0, 0, canvas.width, canvas.height);

// ball
context.fillStyle = '#f00';
context.fillRect(eyeBallL.position.x, eyeBallL.position.y, eyeBallL.size.x, eyeBallL.size.y);
context.fillStyle = '#f00';
context.fillRect(eyeBallR.position.x, eyeBallR.position.y, eyeBallR.size.x, eyeBallR.size.y);

context.fillStyle = '#000';
context.fillRect(mouth.position.x, mouth.position.y,mouth.size.x,mouth.size.y);