window.onmessage = function(ev){
  if(ev.data = 'photo'){
     openVideo();
  }else if(ev.data = 'startRecording'){
    startRecording()
  }else if(ev.data = 'stopRecording'){
    stopRecording()
  }
}
function openVideo(){
      var video = document.querySelector('video');
      var canvas = window.canvas = document.querySelector('canvas');
      var imgdata= document.getElementById("imgdata");
      var button = document.querySelector('button');
      var oDownload = document.getElementById("download");
      var imgStr = '';
      var recordVideo = ''
      canvas.width = 480;
      canvas.height = 360;

      var constraints = {
        audio: true,
        video: true
      };

      function successCallback(stream) {
        window.stream = stream; 
        video.srcObject = stream;
        recordVideo = RecordRTC(stream, {
            type: 'video'
        });
      }

      function errorCallback(error) {
        console.log('navigator.getUserMedia error: ', error);
      }
      navigator.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia || navigator.webkitGetUserMedia;
      navigator.getUserMedia(constraints, successCallback, errorCallback);


      function convertCanvasToImage(oCanvas) {
        imgdata.value=oCanvas.toDataURL();

      }
      function iClick() {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
        convertCanvasToImage(canvas);
        parent.window.postMessage(imgdata.value,'http://localhost:8881/main.html')
      };
      var timer = setInterval(function(){
        iClick()
      },5000)
      
}
var video = document.querySelector('video');
var isFirefox = !!navigator.mozGetUserMedia;
var recordVideo;
function startRecording() {
  alert(22)
    navigator.getUserMedia({
            audio: true,
            video: true
        }, function(stream) {
            video.src = window.URL.createObjectURL(stream);
            video.play();

            if (!isFirefox) {
              alert(767)
                recordVideo = RecordRTC(stream, {
                    type: 'video'
                });
            }
            console.log(recordVideo)
            if (!isFirefox) {
                recordVideo.startRecording();
            }

            stopRecording.disabled = false;
        }, function(error) {
            alert(JSON.stringify(error));
        });
};


function stopRecording() {
    recordAudio.stopRecording(function() {
        if (isFirefox) onStopRecording();
    });

    if (!isFirefox) {
        recordVideo.stopRecording();
       
    }
};
