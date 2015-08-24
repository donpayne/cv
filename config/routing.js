
// Modules
var fs = require('fs');

// Routing
module.exports = function (app)
{
	var folder = './app/routes';

	fs.readdir(folder, function (err, files)
	{
		if (err) return err;

		files.forEach(function (file)
		{
			var route    = '/' + file.split('.')[0];
			var resource = ['.' + folder, file].join('/');

			app.use(route, require(resource));

			if (route === '/index')
			{
				app.use('/', require(resource));
				app.use(route + '.html', require(resource));
			}
		});
	});
};