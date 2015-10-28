var Book = require('../models/Book')

module.exports = {
    create: function (req, res) {
        Book.create(req.body, function (err, result) {
            if (err) {
                res.send(err);
            } else {
                res.json(result);
            }
        })
    },
    read : function (req, res) {
        Book.find().sort('title').exec(function (err, result) {
            if (err) {
                res.send(err);
            } else {
                res.json(result);
            }
        })
    },
    update: function (req, res) {
        Book.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, result) {
            if (err) {
                res.send(err);
            } else {
                res.json(result);
            }
        })
    },
    delete: function (req, res) {
        Book.findByIdAndRemove(req.params.id, function(err, result){
            if (err) {
                res.send(err);
            } else {
                res.json(result);
            }
        })
    }
}