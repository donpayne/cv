
// Dependencies
var jade = require('jade');
var fs   = require('fs');
var q    = require('q');

// Jade Compiling
module.exports = function ()
{
	var folder = './app/views/client';

	var compiler = function ()
	{
		var p = q.defer();
		fs.readdir(folder, function (err, files)
		{
			if (err) throw err;

			var templates = [];
			files.forEach(function (file)
			{
				// Compile the template to a function string
				var template = (file.split('.'))[0];
				templates.push(jade.compileFileClient(folder + '/' + file, { name: template }));
			});

			p.resolve(templates);
		});

		// Maybe you want to compile all of your templates to a templates.js file and serve it to the client
		p.promise.then(function (templates)
		{
			console.log('Compiled Jade Templates');
			fs.writeFileSync('./public/js/jade-templates.js', templates.join('\n\n'));
		});
	};

	// File System Watcher
	fs.readdir(folder, function (err, files)
	{
		if (err) throw err;

		files.forEach(function (file)
		{
			fs.watchFile(folder + '/' + file, function (curr, prev)
			{
				// File has changed
				if (curr !== prev) setTimeout(function () { compiler(); }, 1000);
			});
		});
	});
};