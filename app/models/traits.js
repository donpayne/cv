
// Mongoose
var mongoose = require('mongoose'),
	Schema   = mongoose.Schema;

var schema = new Schema(
{
	'title'              : { type: String },
	'description'        : { type: String },
	'order'              : { type: Number }
}, 
{ collection: 'traits' });

// Expose out model as the module interface
mongoose.model('Traits', schema, 'traits');