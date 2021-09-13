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
  socket.on('create', (input) => {
      response = await model.create(input);
      io.emit('create', response);
  });
  socket.on('delete', (input) => {
      response = await model.delete(input);
      io.emit('delete', response);
  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});

