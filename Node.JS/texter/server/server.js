'use strict'

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var twilio = require('./twilio.js');

app.use(express.static(__dirname + '/../public'));
app.use(bodyParser.json());

app.post('/send-text/:to', function (req, res) {
    var to = req.params.to;
    var message = req.body.message;
    console.log({ to: to, message: message });
    twilio.send(to, message, function (err, message) {
        if (err) {
            console.log('Twilio Error', err)
            res.send(400)
        } else {
            console.log('twilio success:', message.sid)
            res.send()
        }
    })
    res.send();
})

var port = 3000
app.listen(port, function () {
  console.log('Server listening at http://localhost:' + port)
})
