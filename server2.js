var http = require('http');
//加载fs模块
var fs = require('fs');
//加载socket包
var io = require('socket.io')
//设定此目录为主目录(根目录)
var documentRoot = __dirname;
console.log(documentRoot)

var httpServer = http.createServer(function(req, res) {

    var url = req.url;
    //console.log(url);

    var file = documentRoot + url;
    console.log(file);

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

}).listen(80,'https://mengqizhang.github.io');

var socket = io.listen(httpServer);
//当一个客户端连接进来时就会触发一个connect事件对象，并且把当前连接的socket对象传入回调函数中
socket.sockets.on('connection',function(socket){
    //console.log('yilianjie')
    //事件发送器，发送到客户端 socket.emit(事件名称，数据)
    socket.emit('hello', '你好');
    socket.on('tranfmorm', function(data){
        console.log(data)
    });
})