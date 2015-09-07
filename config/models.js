
// Modules
var	fs   = require('fs'),
	path = require('path');

// Initialize Models
module.exports = function ()
{
	fs.readdirSync(global.path.models).forEach(function (file)
	{
		var resource = path.join(global.path.models, file.replace(/\.js$/i, ''));
		require(resource);
	});
};