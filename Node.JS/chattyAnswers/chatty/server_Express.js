var express = require('express');
var bodyParser = require('body-parser');
var app = express();

function Message(user, image, text){
	this.user = user;
	this.image = image;
	this.text = text;
	this.timestamp = Date.now();
}


var messages = [{message: "hello"}];

app.use(bodyParser.json());

app.use(function(request, response, next){
	response.header('Access-Control-Allow-Origin', '*');
	response.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
	response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
})

app.get('/', function(request, response){
	response.json(messages);
	response.send();
});

app.post('/', function(request, response) {
	var msg = request.body;
	console.log(msg);
	messages.push(msg);
	response.send();
})



app.listen(8599);