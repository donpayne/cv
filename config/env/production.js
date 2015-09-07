
// Modules
var	mongoose = require('mongoose');

// DB Connection
module.exports = function ()
{
	return mongoose.connect('mongodb://localhost:27017/cv');
};