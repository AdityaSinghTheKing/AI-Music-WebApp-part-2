function setup(){
    canvas=createCanvas(300 , 300)
    canvas.center()
    video=createCapture(VIDEO)
    video.hide()
}

song1=""
song2=""

function preload(){
    song1=loadsong("music.mp3")
    song2=loadsong("music2.mp3")
}
function draw(){
    image(video , 0 , 0 , 300 , 300);
}