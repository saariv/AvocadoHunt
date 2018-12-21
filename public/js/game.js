
//configuration for the game: type, size, physics, scene
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

'use strict';
//define game and its variables
var game = new Phaser.Game(config);

var player;
var avocados;
var bombs;
var platforms;
var cursors;
var score = 0;
var level = 1;
var gameOver = false;
var scoreText;
var music;




function preload ()
{	//load game assets
  this.load.image('factory', 'assets/images/factory.png');
  this.load.image('ground', 'assets/images/platform.png');
  this.load.image('jumppoint','assets/images/platform_small.png')
  this.load.image('avocado', 'assets/images/avocado.png');
  this.load.image('pineapple','assets/images/pineapple.png');
  this.load.image('bomb', 'assets/images/fire.png');
  this.load.image('lightning', 'assets/images/lightning.png');
  this.load.image('titlescreen','assets/images/titlescreen.png');
  this.load.image('startgame','assets/images/startgame.png');
  this.load.spritesheet('elon', 'assets/images/elon.png', { frameWidth: 40, frameHeight: 60 });
  this.load.image('thankyou','assets/images/thankyou.png');
  this.load.audio('peli','assets/audio/peli.mp3')
  this.load.audio('point','assets/audio/point.mp3')
  this.load.audio('gameover','assets/audio/gameover.mp3')
}

function create ()
{
    //play background music for the game
    let playSound = this.sound.add('peli');
    playSound.play();

    // background for the game
    this.add.image(400, 300, 'factory');

    //  The platforms group contains the ground and the 4 ledges we can jump on
    platforms = this.physics.add.staticGroup();

    //  Here we create the ground and scale it to fit the width of the game
    platforms.create(400, 568, 'ground').setScale(2).refreshBody();

    //  Let's create some jumppoints
    platforms.create(600, 400, 'ground');
    platforms.create(0, 300, 'ground');
    platforms.create(840, 220, 'ground');
    platforms.create(450,150,'jumppoint'); //smaller jumppoint area

    // The player and its settings
    player = this.physics.add.sprite(100, 450, 'elon');

    //  Player physics properties. Give the character a bounce.
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);


    //  player animations, turning, walking left and walking right (arrow keyboards)
    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('elon', { frames: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'turn',
        frames: [ { key: 'elon', frame: 4 } ],
        frameRate: 20
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('elon', { frames: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });

    //  Input Events
    cursors = this.input.keyboard.createCursorKeys();

    //  Avocados to collect, 12 in total (evenly distributed in the platform)
    avocados = this.physics.add.group({
        key: 'avocado',
        repeat: 11,
        setXY: { x: 12, y: 0, stepX: 70 }
    });

    avocados.children.iterate(function (child) {

        //  Give each avocado a slightly different bounce
        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

    });



    bombs = this.physics.add.group();

    //  Score and Level info, uppercorner of the game
    scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '40px', fill: '#FFFFFF' });
    levelText = this.add.text(16, 60, 'Level: 1', { fontSize: '40px', fill: '#FFFFFF' });

    //  Collide the player and the avocados with the platforms
    this.physics.add.collider(player, platforms);
    this.physics.add.collider(avocados, platforms);
    this.physics.add.collider(bombs, platforms);

    //  Checks to see if the player overlaps with any of the avocados, if he does call the collectavocado function
    this.physics.add.overlap(player, avocados, collectavocado, null, this);

    this.physics.add.collider(player, bombs, hitBomb, null, this);
}

function update ()
{
    if (gameOver)
    {
      return;
    }

    if (cursors.left.isDown)
    {
        player.setVelocityX(-160);

        player.anims.play('left', true);
    }
    else if (cursors.right.isDown)
    {
        player.setVelocityX(160);

        player.anims.play('right', true);
    }
    else
    {
        player.setVelocityX(0);

        player.anims.play('turn',true);
    }

    if (cursors.up.isDown && player.body.touching.down)
    {
        player.setVelocityY(-330);
    }
}
//collecting acovados = points for the game
function collectavocado (player, avocado)
{
    let playSound2 = this.sound.add('point');
    playSound2.play(); //short plop voice when avocado is picked

    avocado.disableBody(true, true);

    //  Update the score, each avocado is 15 points
    score += 15;
    scoreText.setText('Score: ' + score);

    if (avocados.countActive(true) === 0)
    {

        //  A new batch of avocados to collect and one bomb to the platform

        avocados.children.iterate(function (child) {

            child.enableBody(true, child.x, 0, true, true);

        });

        var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

        var bomb = bombs.create(x, 16, 'bomb');
        bomb.setBounce(1);
        bomb.setCollideWorldBounds(true);
        bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
        bomb.allowGravity = false;
        //Update level, every new bomb = new level
        level += 1;
        levelText.setText('Level: ' + level);




    }
}

function hitBomb (player, bomb)
{


    let playSound3 = this.sound.add('gameover');
    playSound3.play();

    this.physics.pause();

    player.setTint(0xff0000);

    player.anims.play('turn');
    alert('Game over!');
    gameOver = true;

}
