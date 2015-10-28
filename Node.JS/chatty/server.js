
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())

var messages = ["Why", "so", "serious?"];

app.use(express.static(__dirname))

app.get('/', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(messages);
});

app.post('/', function (req, res) {
    console.log(req.body);
    messages.push(req.body);
    res.send(req.body);
});

var server = app.listen(8000);