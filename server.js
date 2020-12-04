var express = require('express');
const app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var path = require('path');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

http.listen(5500, () => {
  console.log('listening on *:5500');
});