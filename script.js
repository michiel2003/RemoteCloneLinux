var BallYDir = '-';
var BallXDir = '-';

var scoreP1 = 0;
var scoreP2 = 0;

var bounces = 1;
var speed = 12;

function BallHandler() {
    var pong1 = [parseInt(document.getElementById("pong1").style.top), parseInt(document.getElementById("pong1").style.top) - 100, parseInt(document.getElementById("pong1").style.left), parseInt(document.getElementById("pong1").style.left) + 10];
    var pong2 = [parseInt(document.getElementById("pong2").style.top), parseInt(document.getElementById("pong2").style.top) - 100, parseInt(document.getElementById("pong2").style.left), parseInt(document.getElementById("pong2").style.left) + 10];
    var Ballx = parseInt(document.getElementById("ball").style.left.substring(0, 3));
    var Bally = parseInt(document.getElementById("ball").style.top.substring(0, 3));
    if (BallYDir == '+') {
        Bally = Bally + 2;
    }
    if (BallYDir == '-') {
        Bally = Bally - 2;
    }
    if (BallXDir == '+') {
        Ballx = Ballx + 2;
    }
    if (BallXDir == '-') {
        Ballx = Ballx - 2;
    }
    document.getElementById("ball").style.top = Bally + "px"
    document.getElementById("ball").style.left = Ballx + "px"
    hitdetect();
    pong2hit();
    pong1hit();
    windetect();
    if(bounces%10 == 0){
        bounces++;
        speed--;
    }
    setTimeout(BallHandler, speed);
}

function hitdetect(){
    var Ballx = parseInt(document.getElementById("ball").style.left.substring(0, 3));
    var Bally = parseInt(document.getElementById("ball").style.top.substring(0, 3));
    if (Bally <= 0) {
        BallYDir = '+'
    }
    if (Bally >= 580) {
        BallYDir = '-';
    }    
}

function pong2hit(){
    var pongTL = parseInt(document.getElementById("pong2").style.top);
    var pongBL = pongTL + 100;
    var Ballx = parseInt(document.getElementById("ball").style.left);
    var Bally = parseInt(document.getElementById("ball").style.top);
    if(Ballx >= 770){
        if(Bally >= pongTL){
            if(Bally <= pongBL){
                BallXDir ='-';
                bounces++;
            }
        }
    }
}

function pong1hit(){
    var pongTL = parseInt(document.getElementById("pong1").style.top);
    var pongBL = pongTL + 100;
    var Ballx = parseInt(document.getElementById("ball").style.left);
    var Bally = parseInt(document.getElementById("ball").style.top);
    if(Ballx <= 10){
        if(Bally >= pongTL){
            if(Bally <= pongBL){
                BallXDir = '+';
                bounces++;
            }
        }
    }
}

function windetect(){
    var Ballx = parseInt(document.getElementById("ball").style.left);
    var Bally = parseInt(document.getElementById("ball").style.top);
    if(Ballx >= 800){
        scoreP1++;
        console.log("score: " + scoreP1 + "-" + scoreP2)
        document.getElementById("score").innerHTML = scoreP1 + "     -       " + scoreP2;
        document.getElementById("ball").style.left = 380 + "px";
        document.getElementById("ball").style.top = 280 + "px";
    }
    if(Ballx <= 0){
        scoreP2++;
        console.log("score: " + scoreP1 + "-" + scoreP2)
        document.getElementById("score").innerHTML = scoreP1 + "     -       " + scoreP2;
        document.getElementById("ball").style.left = 380 + "px";
        document.getElementById("ball").style.top = 280 + "px";
    }
}

document.addEventListener("keydown", keyDownHandler, false);


function keyDownHandler(e){
    var keyCode = e.keyCode;
    if(keyCode==38){
        var newpos = (parseInt(document.getElementById("pong1").style.top)-10);
        if(newpos > 0){
            document.getElementById("pong1").style.top = newpos + "px"
        }
    }
    if(keyCode==40){
        var newpos = (parseInt(document.getElementById("pong1").style.top)+10);
        if (newpos < 480) {
            document.getElementById("pong1").style.top = newpos + "px"
        }
    }
    if(keyCode==98){
        var newpos = (parseInt(document.getElementById("pong2").style.top)+10);
        if (newpos < 480) {
            document.getElementById("pong2").style.top = newpos + "px"
        }
    }
    if(keyCode==104){
        var newpos = (parseInt(document.getElementById("pong2").style.top)-10);
        if(newpos > 0){
            document.getElementById("pong2").style.top = newpos + "px"
        }
    }
}
