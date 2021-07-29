canvas=document.getElementById("myCanvas");

ctx=canvas.getContext("2d");

bg="mars.jpg";
roverimage="rover.png"
rover_width=100;
rover_height=90;
rover_X=10
rover_Y=10

function add(){
    bgtag=new Image();
    bgtag.onload=uploadbg;
    bgtag.src=bg;

    rovertag=new Image();
    rovertag.onload=uploadrover;
    rovertag.src=roverimage;
}

function uploadbg() {
    ctx.drawImage(bgtag,0,0,canvas.width,canvas.height)
}

function uploadrover() {
    ctx.drawImage(rovertag,rover_X,rover_Y,rover_width,rover_height)
}

window.addEventListener("keydown", mykeydown)

function mykeydown(e){
    keyPressed=e.keyCode

    if(keyPressed=="38"){
        up();
    }

    if(keyPressed=="40"){
        down();
    }

    if(keyPressed=="37"){
        left();
    }

    if(keyPressed=="39"){
        right();
    }
}

function up(){
    if(rover_Y >= 0){
        rover_Y=rover_Y-10;

        uploadbg();
        uploadrover();
    }
}


function down(){
    if(rover_Y <= 500){
        rover_Y=rover_Y+10;

        uploadbg();
        uploadrover();
    }
}


function left(){
    if(rover_X >= 0){
        rover_X=rover_X-10;

        uploadbg();
        uploadrover();
    }
}


function right(){
    if(rover_X <= 700){
        rover_X=rover_X+10;

        uploadbg();
        uploadrover();
    }
}