var mongoose = require('mongoose')

var schema = new mongoose.Schema ({
	"title": { type: String, maxlength: 120, require:true },
	"author": { type: String, maxlength: 80, require: true },
	"genre": { type: String, lowercase: true, enum: ['how-to', 'unknown', 'biography'] },
	"pages": { type: Number, min: 1 },
	"checked_out": { type: Boolean, default: false }
})

module.exports = mongoose.model('Book', schema);