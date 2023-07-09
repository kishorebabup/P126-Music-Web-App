audio_Peter = ;
audio_Harry = ;

leftWristX = 0;
leftWristY = 0;

rightWristX = 0;
rightWristY = 0;

function setup(){
  canvas = createCanvas(600, 500);
  canvas.center();

  video = createCapture(VIDEO);
  video.hide();  

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotResult);
}

function preload(){
 audio = loadSound("");
}

function draw(){
  image(video, 0, 0, 600, 500);
}

function play(){
    audio.play();
    audio.setVolume(1);
    audio.rate(1);
}

function modelLoaded(){
  console.log("PoseNet is Initialised");
}

function gotResult(results){
  if (results.length > 0){
    console.log(results);
  }

  leftWristX = results[0].pose.leftWrist.x;
  leftWristY = results[0].pose.leftWrist.y;

  rightWristX = results[0].pose.rightWrist.x;
  rightWristY = results[0].pose.rightWrist.y;
}