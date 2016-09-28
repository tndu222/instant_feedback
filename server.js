//a very very simple server

var express = require('express');
var app = express();
var server = app.listen(8080, function () {
  console.log("Meow");
})
var io = require('socket.io')(server);    //http://socket.io/docs/

app.use(express.static('public'));

io.sockets.on('connection', function (socket) {
  console.log("Client ID"+socket.id+" connected");

  app.get('/like', function(request,response){
    // response.json({"status":"success"});
    response.sendStatus(200);
    console.log("like!");
    socket.emit('like');
  })

  app.get('/love', function(request,response){
    // response.json({"status":"success"});
    response.sendStatus(200);
    console.log("love!");
    socket.emit('love');
  })

  app.get('/haha', function(request,response){
    // response.json({"status":"success"});
    response.sendStatus(200);
    console.log("haha!");
    socket.emit('haha');
  })

  app.get('/wow', function(request,response){
    // response.json({"status":"success"});
    response.sendStatus(200);
    console.log("wow!");
    socket.emit('wow');
  })
  app.get('/angry', function(request,response){
    // response.json({"status":"success"});
    response.sendStatus(200);
    console.log("angry!");
    socket.emit('angry');
  })
    app.get('/sad', function(request,response){
    // response.json({"status":"success"});
    response.sendStatus(200);
    console.log("sad!");
    socket.emit('sad');
  })
});