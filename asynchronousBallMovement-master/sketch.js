var ball;
var db, refer;
var position;


function setup(){
    createCanvas(500,500);
    db = firebase.database();
    refer = db.ref('ball_sprite/');
    refer.on('value', read_pos);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    position = ball;
    console.log(db);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y
    refer.update({
        x:ball.x,
        y:ball.y
    })
}

function read_pos(data){
    ball_sprite = data.val();
    ball.x = position.x ;
    ball.y = position.y ;
}


