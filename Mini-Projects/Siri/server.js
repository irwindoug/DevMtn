var http = require('http');

http.createServer(function (req, res) {
    var messages = ["Hello there.", "I'm sorry, I cannot take any requests at this time.", "I can tell you how to do that."];

    var i = (function(){return Math.floor(Math.random()* 3);})();
    var myMessage = messages[i];

    res.writeHead(200, {
        'Connection': 'close',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'});

    res.end(JSON.stringify({message: myMessage}));


}).listen(8887);