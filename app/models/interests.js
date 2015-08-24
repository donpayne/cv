
// Mongoose
var mongoose = require('mongoose'),
	Schema   = mongoose.Schema;

var schema = new Schema(
{
	'title'              : { type: String },
	'order'              : { type: Number }
}, 
{ collection: 'interests' });

// Expose out model as the module interface
mongoose.model('Interests', schema, 'interests');