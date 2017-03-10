// 请求依赖，其中 path 为 nodejs 的内部模块，不需要安装
// express 和 body-parser 为第三方模块，需要手动安装（package.json里的 dependencies 字段）
var express = require('express'),
	path = require('path'),
	bodyParser = require('body-parser');

// 创建 express 实例
var app = express();

// 设置改项目的静态文件目录，即改服务启动后，如：访问 http://localhost:8008/img/bg.jpg
// 其实指向的是 UEditor_prism/public/img/bg.jpg 文件
app.use(express.static(path.join(__dirname, 'public')));

// 解析 http 传输的内容
app.use(bodyParser.urlencoded({ extended: true }));

// 收到 来自 http://localhost:8008/editor 的 post 请求时，会做如下处理
app.post('/editor', function(req, res, next){
	console.log(req.body);
	res.send(req.body.content);
});

// 最后启动服务，监听在 8008 端口
app.listen('8008', function(){
	console.log('Server listening on port 8008!');
});
