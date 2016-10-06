//a very very simple server

var express = require('express');
var app = express();
var server = app.listen(8000, function () {
  console.log("Meow");
})
   //http://socket.io/docs/

app.use(express.static('public'));

var io = require('socket.io')(server);
var terese = io.of('/terie')

io.sockets.on('connection', function (socket) {
  console.log("Client ID"+socket.id+" connected");

  app.get('/like', function(request,response){
    // response.json({"status":"success"});
    response.sendStatus(200);
    console.log("like!");
    terese.emit('like');
  })

  app.get('/love', function(request,response){
    // response.json({"status":"success"});
    response.sendStatus(200);
    console.log("love!");
    terese.emit('love');
  })

  app.get('/haha', function(request,response){
    // response.json({"status":"success"});
    response.sendStatus(200);
    console.log("haha!");
    terese.emit('haha');
  })

  app.get('/wow', function(request,response){
    // response.json({"status":"success"});
    response.sendStatus(200);
    console.log("wow!");
    terese.emit('wow');
  })
  app.get('/angry', function(request,response){
    // response.json({"status":"success"});
    response.sendStatus(200);
    console.log("angry!");
    terese.emit('angry');
  })
    app.get('/sad', function(request,response){
    // response.json({"status":"success"});
    response.sendStatus(200);
    console.log("sad!");
    terese.emit('sad');
  })
});
