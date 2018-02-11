var app = require('express')();
var server = require('http').Server(app);
const io = require('socket.io')(server);
var path = require('path');

var log = require('./logger');

server.listen(8080);

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname +'/views/client.html'));
});

io.on('connection', function (socket) {
  log.info("Successful Connection");
  socket.emit('user_message', { hello: 'world' });
  socket.on('user_message', function (data) {
    log.debug(data);
    socket.emit('doctor_message', {message: 'I read you loud and clear'});
  });
});

log.info("I\'m running");
