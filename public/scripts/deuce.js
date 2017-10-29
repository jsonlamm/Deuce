class Vector {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
}

class Rect {
  constructor(width, height) {
    this.position = new Vector;
    this.size = new Vector(width, height);
  }
}

class Ball extends Rect {
  constructor() {
    super(10, 10);
    this.velocity = new Vector;
  }
}
const canvas = document.getElementById('deuce');
const context = canvas.getContext('2d');

const ball = new Ball;
console.log('ball : ', ball)
ball.position.x = 10;
ball.position.y = 10;

ball.velocity.x = 100;
ball.velocity.y = 50;


let prevTime;
function callback(milliseconds) {
  if (prevTime) {
    // Dividing by 1000 for convenience
    updater((milliseconds - prevTime) / 1000);
  }
  prevTime = milliseconds
  requestAnimationFrame(callback)
  // Remember to call callback!
}

function updater(timeChange) {
  ball.position.x += ball.velocity.x * timeChange;
  ball.position.y += ball.velocity.y * timeChange;

  // TODO: Need to adjust canvas width
  if (ball.position.x > canvas.width - 10 || ball.position.x <= 0) {
    ball.velocity.x = -ball.velocity.x;
  }
  if (ball.position.y > canvas.height - 10 || ball.position.y <= 0) {
    ball.velocity.y = -ball.velocity.y;
  }

  // Redraw all components
  // main canvas
  context.fillStyle = '#999';
  context.fillRect(0, 0, canvas.width, canvas.height);

  // ball
  context.fillStyle = '#f00';
  context.fillRect(ball.position.x, ball.position.y, ball.size.x, ball.size.y);
}

callback();
