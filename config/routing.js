
// Modules
var fs   = require('fs'),
	path = require('path');

// Routing
module.exports = function (app)
{
	var folder = './app/routes';

	fs.readdir(folder, function (err, files)
	{
		if (err) return err;

		files.forEach(function (file)
		{
			var route    = parseRoute(file);
			var resource = '.' + folder + '/' + file;
			app.use(route, require(resource));

			if (route === '/index')
			{
				app.use('/', require(resource));
				app.use('/index.html', require(resource));
			}
		});
	});

	function parseRoute (file)
	{
		var name = path.parse(file).name.split('.');

		if (name.slice(-1)[0] === 'route')
			name.pop()

		return '/' + name.join('/');
	}
};