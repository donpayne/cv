
// Modules
var mongoose = require('mongoose'),
	fs       = require('fs'),
	q        = require('q'),
	_        = require('underscore');

// Models
var db = 
{
	Traits      : mongoose.model('Traits'),
	Specialties : mongoose.model('Specialties'),
	Languages   : mongoose.model('Languages'),
	Skills      : mongoose.model('Skills'),
	Education   : mongoose.model('Education'),
	Interests   : mongoose.model('Interests')
};

module.exports.get = function (req, res, next)
{
	var promises = [
		db.Traits.find({}),
		db.Specialties.find({}).sort({ order: 1 }),
		db.Languages.find({}).sort({ order: 1 }),
		db.Skills.find({}).sort({ order: 1 }),
		db.Education.find({}).sort({ order: 1 }),
		db.Interests.find({}).sort({ order: 1 })
	];

	q.spread(promises, function (traits, specialties, languages, skills, education, interests)
	{
		var resume =
		{
			traits      : traits,
			specialties : specialties,
			languages   : languages,
			skills      : skills,
			education   : education,
			interests   : interests
		};

		res.render('index', { title: 'Don Payne', resume: resume });
	});
};