
// Modules
var	path = require('path'),
	fs   = require('fs');

// Initialize Models
module.exports = function ()
{
	fs.readdirSync(global.path.models).forEach(function (file)
	{
		var resource = path.join(global.path.models, path.parse(file).name);
		require(resource);
	});
};