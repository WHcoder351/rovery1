canvas = document.getElementById("Canvas");
ctx = canvas.getContext("2d");
var NASA=["https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG","https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/rcam/RLB_486265291EDR_F0481570RHAZ00323M_.JPG","https://mars.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631300305227E03_DXXX.jpg","https://previews.123rf.com/images/cobalt/cobalt1907/cobalt190700030/127574708-mars-landscape-3d-render-of-imaginary-mars-planet-terrain-science-fiction-illustration-.jpg"];
var RN = Math.floor(Math.random()*4);
console.log (RN);
background_img = NASA[RN];
console.log(background_img);
RoverImage = "rover.png";
RovW=100;
RovH=90;
RovY = 10;
RovX = 10;

function add() {
    Ba1 = new Image();
    Ba1.onload = uploadBackground;
    Ba1.src = background_img;

    Ro1 = new Image();
    Ro1.onload = uploadRover;
    Ro1.src = RoverImage;
}

function uploadBackground() {
    ctx.drawImage(Ba1, 0,0, canvas.width, canvas.height);
}

function uploadRover() {
    ctx.drawImage(Ro1, RovX, RovY, RovW, RovH);
}

window.addEventListener("keydown", I);
function I(e){
    keyp = e.keyCode;
    if(keyp == '38') {
        up();
        console.log("up");
    }

    if(keyp == '40') {
        down();
        console.log("down");
    }

    if(keyp == '37') {
        left();
        console.log("left");
    }

    if(keyp == '39') {
        right();
        console.log("right");
    }
}
function up(){
    if (RovY >=0){
        RovY = RovY-10;
        uploadBackground();
            uploadRover();
            console.log("when up is pressed X="+RovX+" Y ="+RovY);
    }
}

function down(){
    if (RovY <=400){
        RovY = RovY+10;
        uploadBackground();
            uploadRover();
            console.log("when down is pressed X="+RovX+" Y ="+RovY);
    }
}

function left(){
    if (RovX >=0){
        RovX = RovX-10;
        uploadBackground();
            uploadRover();
            console.log("when left is pressed X="+RovX+" Y ="+RovY);
    }
}

function right(){
    if (RovX <=400){
        RovX = RovX+10;
        uploadBackground();
            uploadRover();
            console.log("when right is pressed X="+RovX+" Y ="+RovY);
    }
}