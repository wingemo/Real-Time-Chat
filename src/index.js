const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

/**
 * Initialize constant with an array of strings.
 * Loop through each item in the array and print
 * it to the console.
 */
app.get('/', function (req, res) {
  res.send('hello world')
})

/**
 * Initialize constant with an array of strings.
 * Loop through each item in the array and print
 * it to the console.
 */
io.on('connection', (socket) => {
  io.to(socket.id).emit(await model.find());
  socket.on('create', (input) => {
      const data = await model.create(input));
      io.emit('create', data);
  });
  socket.on('delete', (input) => {
      response = await model.delete(input);
      io.emit('delete', response);
  });
  socket.on('update', (input) => {
      const data = await model.findOne(input);
      data.accountbalance = input;
      io.emit('update', await doc.save());
  });
});

/**
 * Initialize constant with an array of strings.
 * Loop through each item in the array and print
 * it to the console.
 */
server.listen(3000, () => {
  console.log('listening on *:3000');
});

