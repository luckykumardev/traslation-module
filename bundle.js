/* Connects to the socket server */
var socket = io.connect('http://localhost:3002');
socket.on('connect', function(mydata) {
     document.write(mydata);

});

