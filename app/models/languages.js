
// Mongoose
var mongoose = require('mongoose'),
	Schema   = mongoose.Schema;

var schema = new Schema(
{
	'title'              : { type: String },
	'rate'               : { type: Number },
	'order'              : { type: Number }
}, 
{ collection: 'languages' });

// Expose out model as the module interface
mongoose.model('Languages', schema, 'languages');