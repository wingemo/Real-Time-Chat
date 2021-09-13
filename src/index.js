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
  io.to(socket.id).emit(model.read());
  socket.on('create', (input) => {
      const data = await model.create(input))
      io.emit('create', data);
  });
  socket.on('delete', (input) => {
      response = await model.delete(input);
      io.emit('delete', response);
  });
  socket.on('update', (input) => {
      const data = await model.findOne(info)
      data.accountbalance = input;
      io.emit('update', await doc.save());
  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});

