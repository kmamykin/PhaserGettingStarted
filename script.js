function preload() {
  this.load.image('paddle', 'assets/Pong Paddle.png');
  this.load.image('ball', 'assets/pixilart-drawing.png');
}

function create() {
  this.w = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)
  this.a = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
  this.s = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)
  this.d = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)

  this.paddle = this.physics.add.image(config.width / 2, config.height, 'paddle').setScale(6, 4);
  this.paddle.setCollideWorldBounds(true);

  this.ball = this.physics.add.image(config.width / 2, config.height / 2, 'ball').setScale(0.5, 0.5);
  this.ball.setCollideWorldBounds(true);
}

function update() {
  const hVelocity = 1000;
  let cursors = this.input.keyboard.createCursorKeys();
  if ((cursors.left.isDown || this.a.isDown) || (cursors.right.isDown || this.d.isDown)) this.paddle.setVelocityX(cursors.left.isDown || this.a.isDown ? -hVelocity : hVelocity);
  else this.paddle.setVelocityX(0);

  this.ball.setVelocityX(-100)
  this.ball.setVelocityY(100)
}

const config = {
  type: Phaser.AUTO,
  width: 500,
  height: 600,
  backgroundColor: '#000000',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        y: 0
      },
      debug: true
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

const game = new Phaser.Game(config);