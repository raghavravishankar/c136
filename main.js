status = "";

function preload() {
    video = createVideo(480, 380);
    video.hide();
}

function setup() {
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380,380);
    }

    function draw() {
        image(video, 0, 0, 380, 380);
    }

    function start() {
        ObjectDetector = ml5.objectDetector('cocossd', modelLoaded);
        document.getElementById("status").innerHTML = "Status : Detecting Objects";
        object_name = document.getElementById("object_name").value;
    }

    function modelLoaded() {
            console.log("Model Loaded!");
            status = true;
    }