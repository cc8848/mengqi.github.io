
var video = document.querySelector('video');
var canvas = window.canvas = document.querySelector('canvas');
var imgdata=document.getElementById("imgdata");
imgdata.value = ''
canvas.width = 480;
canvas.height = 360;

var button = document.querySelector('button');
button.onclick = function() {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
  convertCanvasToImage(canvas)
};

var constraints = {
  audio: true,
  video: true
};

function successCallback(stream) {
  window.stream = stream; // make stream available to browser console
  video.srcObject = stream;
}

function errorCallback(error) {
  console.log('navigator.getUserMedia error: ', error);
}
navigator.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia || navigator.webkitGetUserMedia;
navigator.getUserMedia(constraints, successCallback, errorCallback);


function convertCanvasToImage(oCanvas) {
  imgdata.value=oCanvas.toDataURL();
  console.log(imgdata.value)
}
