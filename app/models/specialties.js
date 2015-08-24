
// Mongoose
var mongoose = require('mongoose'),
	Schema   = mongoose.Schema;

var schema = new Schema(
{
	'title'              : { type: String },
	'description'        : { type: String },
	'icon'               : { type: String },
	'order'              : { type: Number }
}, 
{ collection: 'specialties' });

// Expose out model as the module interface
mongoose.model('Specialties', schema, 'specialties');