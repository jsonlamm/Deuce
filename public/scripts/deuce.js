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

const ball = new Ball;
console.log('ball : ', ball)
ball.position.x = 28;
ball.position.y = 35;

// main canvas
context.fillStyle = '#999';
context.fillRect(0, 0, canvas.width, canvas.height);

// ball
context.fillStyle = '#f00';
context.fillRect(ball.position.x, ball.position.y, ball.size.x, ball.size.y);
