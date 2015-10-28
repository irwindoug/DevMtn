var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

var port = 8080
app.listen(port, function () {
    console.log('Server listening at http://localhost:' + port)
})