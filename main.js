filterX = 0;
filterY = 0;

function preload(){
    filter = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}

function setup(){
    canvas= createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length >  0)
    {
        console.log(results);
        filterX = results[0].pose.nose.x;
        filterY = results[0].pose.nose.y;
        console.log("nose x = " + filterX)
        console.log("nose y = " + filterY)
    }
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(filter,filterX-30,filterY,60,30)
}

function take_snapshot(){
    save('kris.png');
}