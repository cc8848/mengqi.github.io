alert(8888888)
window.addEventListener('messge',function(ev){
  console.log('ss')
},false)
// function openVideo(){
//       var video = oIframe.contentWindow.document.querySelector('video');
//       var canvas = window.canvas = oIframe.contentWindow.document.querySelector('canvas');
//       var imgdata= oIframe.contentWindow.document.getElementById("imgdata");
//       var button = oIframe.contentWindow.document.querySelector('button');
//       var oDownload = oIframe.contentWindow.document.getElementById("download");
//       var imgStr = '';
      
//       canvas.width = 480;
//       canvas.height = 360;

//       var constraints = {
//         audio: true,
//         video: true
//       };

//       function successCallback(stream) {
//         window.stream = stream; 
//         video.srcObject = stream;
//       }

//       function errorCallback(error) {
//         console.log('navigator.getUserMedia error: ', error);
//       }
//       navigator.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia || navigator.webkitGetUserMedia;
//       navigator.getUserMedia(constraints, successCallback, errorCallback);


//       function convertCanvasToImage(oCanvas) {
//         imgdata.value=oCanvas.toDataURL();

//       }
      
// }
