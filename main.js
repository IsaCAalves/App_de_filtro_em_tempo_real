noseX = 0
noseY = 0

function preload() {
  clownNose = loadImage('https://i.postimg.cc/g2PjQSQF/istockphoto-118709072-170667a.jpg')
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPose);
 }

 function modelLoaded() {
    console.log('PoseNet foi inicializado');
 }

 function gotPose(results)
 {
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
    }
 }


function draw() {
    image(video, 0, 0, 300, 300);
    fill(255,0,0);
    stroke(255,0,0);
    circle(noseX, noseY, 20);
    image(clownNose, noseX, noseY, 30, 30);
}

function takeSnapshot(){    
  save('myFilterImage.png');
}