const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const model = require("./model");
const path = require('path');

app.use(express.static(path.join(__dirname, '..', 'client')))

io.on('connection', (socket) => {
  socket.on('message', (msg) => {
      io.emit('message', msg);
  });
});

// New 
io.on('connection', (socket) => {
  socket.on('create', (data) => {
      model.create(data);
      io.emit('create', data);
  });
  socket.on('delete', (data) => {
      model.create(data);
      io.emit('delete', data);
  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});

