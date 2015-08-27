
// Modules
var db = require('mongoose'),
	q  = require('q'),
	_  = require('underscore');

// Models
var models = 
{
	Traits      : db.model('Traits'),
	Specialties : db.model('Specialties'),
	Languages   : db.model('Languages'),
	Skills      : db.model('Skills'),
	Education   : db.model('Education'),
	Interests   : db.model('Interests')
};

module.exports.get = function (req, res, next)
{
	var names = _.keys(models);

	var promises = [];
	_.each(names, function (name)
	{
		promises.push(models[name].find({}).sort({ order: 1 }));
	});

	q.allSettled(promises).done(function (results)
	{
		var resume = {};
		_.each(names, function (name, i)
		{
			resume[name.toLowerCase()] = results[i];
		})

		res.render('index', { title: 'Don Payne', resume: resume });
	});
};