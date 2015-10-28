var http = require('http');

var messages = ["Why","so","serious?"];

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    if (req.method == 'GET') {
        res.end(JSON.stringify({ messages }));
    }
    if (req.method == 'POST') {
        req.on('data', function (messages) {
            messages.push(data);
        });
        req.on('end', function () {
            console.log("Got POST data:");
            console.log(JSON.parse(messages));
        });
    }

}).listen(8080);