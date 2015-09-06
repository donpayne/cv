
// Modules
var	mongoose = require('mongoose'),
	fs       = require('fs'),
	path     = require('path');

// DB Connection
module.exports = function ()
{
	var db = mongoose.connect('mongodb://localhost:27017/cv');

	var folder = './app/models';
	fs.readdirSync(folder).forEach(function (file)
	{
		var resource = '.' + folder + '/' + file.replace(/\.js$/i, '');
		require(resource);
	});

	return db;
};