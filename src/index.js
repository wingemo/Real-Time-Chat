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
      io.emit('create', await model.create(input));
  });
  socket.on('delete', (input) => {
      response = await model.delete(input);
      io.emit('delete', response);
  });
  socket.on('update', (input) => {
      const doc = await model.findOne(info)
      doc.slug = input;
      await doc.save()
      io.emit('update', response);
  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});

