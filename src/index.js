const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const path = require('path');

// It serves static file (index.html)
app.use(express.static(path.join(__dirname, '..', 'client')))

io.on('connection', (socket) => {
  socket.on('message', (msg) => {
      io.emit('message', msg);
  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});

