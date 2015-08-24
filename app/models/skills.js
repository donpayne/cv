
// Mongoose
var mongoose = require('mongoose'),
	Schema   = mongoose.Schema;

var schema = new Schema(
{
	'title'              : { type: String },
	'description'        : { type: String },
	'rate'               : { type: Number },
	'order'              : { type: Number }
}, 
{ collection: 'skills' });

// Expose out model as the module interface
mongoose.model('Skills', schema, 'skills');