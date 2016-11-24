var ball, lives;
var cursors;
var leftKey;
var scrollback;
var rect, rects;
var score = 0;
var txt;
var game = new Phaser.Game(780, 420, Phaser.AUTO, null, {
    preload: preload, create: create, update: update
});
function preload() {
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    //game.stage.backgroundColor = '#eee';
    game.load.image('scrollback', 'img/background-cloud.jpg');
    game.load.image('ball', 'img/ball.png');
    game.load.image('rect','img/rect.png');

}
function create() {
    
    game.physics.startSystem(Phaser.Physics.ARCADE);
    cursors = game.input.keyboard.createCursorKeys();
    //game.physics.arcade.checkCollision.down = false;
    scrollback = game.add.tileSprite(0,0,780,420,'scrollback');
    txt = game.add.text(0,0,"Score: "+ score);
    txt.fontSize = 24;
    txt.fill = "white";
    ballAttrs();
    rects = this.game.add.group();
    rects.enableBody = true;
    rect = game.add.sprite(150, 155, 'rect');
    rect2 = game.add.sprite(350, 355, 'rect');
    rect3 = game.add.sprite(320, 560, 'rect');
    rect.anchor.set(0.5,1);
    game.physics.enable(rect3,Phaser.Physics.ARCADE);

    // var top = 67;
    // for (i = 0; i <= 5; i++) {
    //   createLedge(getRandomLeft(), top);
    //   top += 67;
    // }
    
}
function update() {
    score += .2;
    txt.setText("Score: "+ parseInt(score));
    game.physics.arcade.collide(rect3, ball);
    //scrollback.tilePosition.y += 2;
    //ball.x = game.input.x || game.world.width*0.5;
    if (cursors.left.isDown)
    {
      ball.body.velocity.x = -150;
      ball.scale.x = 1;
    }
    else if (cursors.right.isDown)
    {
      ball.body.velocity.x = 150;
      ball.scale.x = -1;
    }
    ball.y += 1;
    rect.y -= 1;
    rect2.y -= 1;
    rect3.y -= 1;

   

}

function randomRects(){
    // for(var i=0; i<200; i++){
    //     rect = game.add.sprite(150, 155, 'rect');
    // }
}

function ballAttrs(){
    
    ball = game.add.sprite(game.world.width/2, game.world.height/2-10, 'ball');
    game.physics.enable(ball, Phaser.Physics.ARCADE);
    //ball.body.velocity.y = 150;
    //ball.body.gravity.y= 100;
    ball.body.collideWorldBounds = true;
    
    //no se que hace el anchor
    ball.anchor.set(0.5);
    
    ball.body.bounce.set(1);
    ball.checkWorldBounds = true;
    ball.outOfBoundsKill = true;
    ball.body.allowGravity = false;


};

function rectAttrs(){

};

