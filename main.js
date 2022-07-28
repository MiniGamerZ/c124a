noseX = 0;
noseY = 0;
difference = 0;
rightWrist = 0;
leftWrist = 0;


function setup(){
    canvas = createCanvas(550,550);
    canvas.position(560,150);

    video = createCapture(VIDEO);
    video.size(550,500);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);

}

function modelLoaded(){
    console.log('Pose net is good to go');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}