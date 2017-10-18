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

const eyeBall = new Ball;
// console.log('ball : ', ball)
eyeBall.position.x = 20;
eyeBall.position.y = 30;


// main canvas
context.fillStyle = '#999';
context.fillRect(0, 0, canvas.width, canvas.height);

// ball
context.fillStyle = '#f00';
context.fillRect(eyeBall.position.x, eyeBall.position.y, eyeBall.size.x, eyeBall.size.y);

