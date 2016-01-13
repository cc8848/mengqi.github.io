
var video = document.querySelector('video');
var canvas = window.canvas = document.querySelector('canvas');
var dlButton = document.getElementById("downloadImageBtn");  
canvas.width = 480;
canvas.height = 360;

var button = document.querySelector('button');
button.onclick = function() {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
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

function convertCanvasToImage() {
	var image = new Image();
	image.src = canvas.toDataURL("image/png");
	return image;
}
convertCanvasToImage()