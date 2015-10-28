var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var mongoose = require('mongoose')
var BooksController = require('./controllers/BooksController')

// Express
var app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());

//Endpoints

//CREATE
app.post('/books', BooksController.create)
//READ
app.get('/books', BooksController.read)

//UPDATE
app.put('/books/:id', BooksController.update)

//DELETE
app.delete('/books/:id', BooksController.delete)

//Connection
var port = 3000;
var mongoURI = 'mongodb://localhost:27017/biblioteca'

mongoose.connect(mongoURI);
mongoose.connection.once('open', function(){
    console.log("Connected to mongoDB at: ", mongoURI)
})

app.listen(port, function () {
    console.log("listening on port: ", port);
});