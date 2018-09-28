// import http from 'http';
const http = require('http');

const app = http.createServer(function(req, res){
    console.log('前端来请求服务了');

    //发送http请求头:
    //http状态码 200
    //内容类型: text/plain
    res.writeHead(200, {'Content-Type': 'text/html'});

    //发送响应内容
    res.end('hello,world');
})
//让 APP监听8080端口.启动的时候打印一句话
app.listen('8080',function(){
    console.log('开启8080端口 ')
})