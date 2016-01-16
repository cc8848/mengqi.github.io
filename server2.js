var https = require('https');
//加载fs模块
var fs = require('fs');
//加载socket包
var io = require('socket.io');
var query = require("querystring");
var url = require('url');
var i=1;
//设定此目录为主目录(根目录)
var documentRoot = __dirname;

var options = {
  ca: fs.readFileSync("./tls/ca.pem"),
  cert: fs.readFileSync("./tls/certificate.pem"),
};
//创建服务器
var httpServer = https.createServer();
httpServer.on('request',function(req, res) {
    var url = req.url;
    var file = documentRoot + url;
    fs.readFile(file, function(err, data) {
        if (err) {
            res.writeHeader(404, {
                'content-type' : 'text/html;charset="utf-8"'
            });
            res.write('<h1>404</h1><p>页面不存在</p>');
            res.end();
        } else {
            res.writeHeader(200, {
                'content-type' : 'text/html;charset="utf-8"'
            });
            res.write(data);
            res.end();
        }
    });

});
httpServer.listen(8881,'https://mengqizhang.github.io');
var socket = io.listen(httpServer);
//当一个客户端连接进来时就会触发一个connect事件对象，并且把当前连接的socket对象传入回调函数中
socket.sockets.on('connection',function(socket){
    //事件发送器，发送到客户端 socket.emit(事件名称，数据)
    socket.emit('hello', '您好，您已开启摄像头，请认真作答');
    socket.on('showImg',function(data){
        var base64Data = data.replace(/^data:image\/\w+;base64,/, "");
        var dataBuffer = new Buffer(base64Data, 'base64');
        var filename =  '.png';
        fs.exists(filename,function(isExists){
            if(!isExists){
                fs.writeFile(filename,dataBuffer,function(err){
                    if(err){
                        console.log('第1个图片创建错误')
                    }else{
                        console.log('第1个图片创建成功')
                    }
                })
            }else{
                i++;
                fs.writeFile(filename,dataBuffer,function(err){
                    if(err){
                        console.log('第'+i+'个图片创建错误')
                    }else{
                        console.log('第'+i+'个图片创建成功')
                    }
                })
            }
        });
    })
    
})
