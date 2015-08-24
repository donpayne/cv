
// Mongoose
var mongoose = require('mongoose'),
	Schema   = mongoose.Schema;

var schema = new Schema(
{
	'title'              : { type: String },
	'description'        : { type: String },
	'period'             : { type: String },
	'order'              : { type: Number }
}, 
{ collection: 'education' });

// Expose out model as the module interface
mongoose.model('Education', schema, 'education');