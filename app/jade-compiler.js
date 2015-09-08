
// Modules
var	jade = require('jade'),
	path = require('path'),
	fs   = require('fs'),
	q    = require('q');

// Jade Compiling
module.exports = function (folder, namespace)
{
	// folder    : must be the path to the client side .jade files
	// namespace : optional, and will default to 'jade'

	// File System Watcher
	fs.readdir(folder, function (err, files)
	{
		if (err) throw err;

		files.forEach(function (file)
		{
			fs.watchFile(path.join(folder, file), function (curr, prev)
			{
				// File has changed
				if (curr !== prev) setTimeout(function () { compiler(); }, 1000);
			});
		});
	});

	function compiler ()
	{
		fs.readdir(folder, function (err, files)
		{
			if (err) throw err;

			var templates = [];
			q.fcall(function ()
			{
				files.forEach(function (file)
				{
					// Compile the each template
					var template = path.parse(file).name;
					templates.push(compileTemplate(file));
				});
			})
			.then(function ()
			{
				console.log('Compiled Jade Templates');
				fs.writeFileSync(path.join(global.path.public, 'js/_components/jade-templates.js'), templates.join(''));
			});
		});
	}

	function compileTemplate (file)
	{
		var template = path.parse(file).name;
		namespace = namespace || 'jade';
		namespace = 'window.' + namespace;

		return namespace + '[\'' + template + '\'] = ' + jade.compileFileClient(path.join(folder, file), { name: template }) + ';\n\n';
	}
};