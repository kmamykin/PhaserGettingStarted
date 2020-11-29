function preload() {
  this.load.image('player', 'assets/Pong Paddle.png');
}

function create() {
  this.w = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)
  this.a = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
  this.s = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)
  this.d = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)

  this.player = this.physics.add.image(config.width / 2, config.height, 'player').setScale(6, 4);
  this.player.setCollideWorldBounds(true);
}

function update() {
  const hVelocity = 1000;
  let cursors = this.input.keyboard.createCursorKeys();
  if ((cursors.left.isDown || this.a.isDown) || (cursors.right.isDown || this.d.isDown)) this.player.setVelocityX(cursors.left.isDown || this.a.isDown ? -hVelocity : hVelocity);
  else this.player.setVelocityX(0);
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