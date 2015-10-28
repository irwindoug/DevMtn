var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongojs = require('mongojs');

//Mongo
var db = mongojs('products');
var Bird = db.collection('birds');

//Express
var app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());
//Endpoints

//CREATE
app.post('/api/sighting', function (req, res) {
    console.log("Yeah");
	// Bird.insert(req.body, function (err, result) {
    //     if (err) {
    //         res.send(err);
    //     } else {
    //         res.json(result);
    //     }
    // })
})
//READ
app.get('/api/sighting?region=america&species=redrobin', function (req, res) {
    // Bird.find({}, function (err, result) {
    //     if (err) {
    //         res.send(err);
    //     } else {
    //         res.json(result);
    //     }
    // })
})

//UPDATE
app.put('/api/sighting?id=09evasd09jhahs9d8h9vh', function (req, res) {
    // Bird.update({ _id: mongojs.ObjectId(req.params.id) }, req.body, function (err, result) {
    //     if (err) {
    //         res.send(err);
    //     } else {
    //         res.json(result);
    //     }
    // })
})

//DELETE
app.delete('/api/sighting?id=09evasd09jhahs9d8h9vh', function (req, res) {
    // Bird.remove(req.body, function(err, result){
    //     if (err) {
    //         res.send(err);
    //     } else {
    //         res.json(result);
    //     }
    // })
})

//Connection
var port = 3000;
app.listen(port, function(){
	console.log("Listening on port: " + port);
})