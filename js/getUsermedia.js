alert(876)
window.onmessage = function(ev){
  if(ev.data = 'photo'){
     openVideo();
     window.parent.postMessage(imgdata.value,'http://localhost:8881/main.html')
  }
}
function openVideo(){
      var video = document.querySelector('video');
      var canvas = window.canvas = document.querySelector('canvas');
      var imgdata= document.getElementById("imgdata");
      var button = document.querySelector('button');
      var oDownload = document.getElementById("download");
      var imgStr = '';
      
      canvas.width = 480;
      canvas.height = 360;

      var constraints = {
        audio: true,
        video: true
      };

      function successCallback(stream) {
        window.stream = stream; 
        video.srcObject = stream;
      }

      function errorCallback(error) {
        console.log('navigator.getUserMedia error: ', error);
      }
      navigator.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia || navigator.webkitGetUserMedia;
      navigator.getUserMedia(constraints, successCallback, errorCallback);


      function convertCanvasToImage(oCanvas) {
        imgdata.value=oCanvas.toDataURL();

      }
      button.onclick = function() {
        alert(9080)
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
        convertCanvasToImage(canvas);
      };
      var timer = setInterval(function(){
        button.click()
      },5000)
      
}
