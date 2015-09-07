
// Modules
var path = require('path');

module.exports = function (app)
{
	// Environment
	require(path.join(global.path.config.env, process.env.NODE_ENV))();

	// Models
	require(global.path.config.models)();

	// Routes
	require(global.path.config.routes)(app);
};