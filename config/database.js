
// Modules
var mongoose = require('mongoose');

// DB Connection
module.exports = function ()
{
	var db = mongoose.connect('mongodb://localhost:27017/cv');
	require('../app/models/traits');
	require('../app/models/education');
	require('../app/models/interests');
	require('../app/models/languages');
	require('../app/models/skills');
	require('../app/models/specialties');

	return db;
};