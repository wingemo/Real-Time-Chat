$( document ).ready(function() {
  var socket = io();
  socket.on('message', function(msg) {
      $('textarea').val($('textarea').val()+msg+'\r\n');
  });
  $('button').click(function() {
      socket.emit('message', $('input').val());
  });
});
