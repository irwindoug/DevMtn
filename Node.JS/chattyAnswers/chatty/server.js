var http = require('http');
var server = http.createServer();
server.listen(8599);

var messages = [];

function AddMessage(msg){
	messages.push(msg);
}

server.on('request', function(request, response) {
	response.writeHead(200,  {
		'Connection': 'close',
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
		'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
	});
			
	if(request.method === 'GET') {
		response.end(JSON.stringify({messages: messages}));
	} else if(request.method === 'POST') {
		var postData = '';
		request.on('data', function(chunk) {
			postData += chunk;
			response.end(JSON.stringify({message: 'continue'}));
		});
		request.on('end', function() {
			var myData = JSON.parse(postData);
			myData.timestamp = Date.now();
			console.log("Got Data: ", myData);
			AddMessage(myData);
			var str = JSON.stringify({message: 'done'});
			response.end(str);
		})
	} else if(request.method === "OPTIONS"){

			response.end(JSON.stringify({message: 'some message'}));		
	} else {
		response.end(JSON.stringify({message: 'some blank message'}));
	}
	
})