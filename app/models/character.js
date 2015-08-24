
// Mongoose
var mongoose = require('mongoose'),
	Schema   = mongoose.Schema;

var schema = new Schema(
{
	'text'               : { type: String },
	'order'              : { type: Number }
}, 
{ collection: 'character' });

// Expose out model as the module interface
mongoose.model('Character', schema, 'character');