var express = require('express');
var app = express();
var mydata= "";
const translate = require('google-translate-api');

var http = require('http'); //the variable doesn't necessarily have to be named http
http.createServer(function(req, res) {});


// Socket connection
/* Creates new HTTP server for socket */
var socketServer = require('http').createServer(app);
var io = require('socket.io')(socketServer);
/* Listen for socket connection on port 3002 */
socketServer.listen(3002, function(){
  console.log('Socket server listening on : 3002');
});
/* This event will emit when client connects to the socket server */
io.on('connection', function(data){
  
translate('Ik spreek Engels', {to: 'en'}).then(res => {
    console.log(res.text);
    

    mydata = res.text;
    
    data.send(mydata);

    //=> I speak English 

    console.log(res.from.language.iso);
    //=> nl 
}).catch(err => {
    console.error(err);
});



});
/* Create HTTP server for node application */
var server = http.createServer(app);
/* Node application will be running on 3000 port */






 




server.listen(3000);