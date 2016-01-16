var oBtn = document.getElementById('videoBtn');
var oIframe = document.getElementById('ifr');
oBtn.onclick = function(){
  openVideo()
}
function openVideo(){
      var video = oIframe.contentWindow.document.querySelector('video');
      var canvas = window.canvas = oIframe.contentWindow.document.querySelector('canvas');
      var imgdata= oIframe.contentWindow.document.getElementById("imgdata");
      var button = oIframe.contentWindow.document.querySelector('button');
      var oDownload = oIframe.contentWindow.document.getElementById("download");
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
      
      var socket = null;
      button.onclick = function() {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
        convertCanvasToImage(canvas);
        socket = io.connect('http://localhost:8881');
        socket.on('hello',function(data){
            alert(data)
        })
        socket.emit('showImg',imgdata.value);
      };
      var timer = setInterval(function(){
        button.click()
      },5000)
}
