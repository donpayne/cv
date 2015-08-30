
// Modules
var	db = require('mongoose'),
	_  = require('underscore');

// API Controller
module.exports = function ()
{
	return {
		get : function (req, res)
		{
			var resources = [];
			_.each(db.models, function (model)
			{
				var resource = {};
				resource.resource = model.modelName.toLowerCase();
				resource.links = {};
				resource.links.self = 'http://' + req.headers.host + req.baseUrl + '/' + resource.resource;
				resources.push(resource);
			});

			res.status(200);
			res.json(resources);
		}
	};
}