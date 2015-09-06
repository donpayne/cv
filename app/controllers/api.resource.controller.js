
// Modules
var _ = require('underscore');

// API Controller
module.exports = function (model)
{
	return {
		post : function (req, res)
		{
			var doc = new model(req.body);

			doc.save(function (err)
			{
				if (err) return res.status(500).send(err);
				res.status(201);
				res.json(doc);
			});
		},
		get : function (req, res)
		{
			var filter = {};
			var order  = {};

			// Set and validate requested filters
			if (!_.isEmpty(req.query))
			{
				_.each(model.schema.paths, function (obj, prop)
				{
					if (req.query[prop] !== undefined)
						filter[prop] = req.query[prop];
				});
			}

			// Set Sorting Defaults
			if (model.schema.paths.id !== undefined) order.id = 1;
			else if (model.schema.paths.order !== undefined) order.order = 1;
			else if (model.schema.paths.date !== undefined) order.date = 1;
			else order._id = 1;

			model.find(filter).sort(order).exec(function (err, docs)
			{
				if (err) return res.status(500).send(err);

				// Create links
				var _docs = [];
				docs.forEach(function (doc, i)
				{
					doc = doc.toJSON();
					doc.links = {};
					doc.links.self = 'http://' + req.headers.host + req.baseUrl + '/' + doc._id;
					_docs.push(doc);
				});

				res.status(200);
				res.json(_docs);
			});
		},
		cacheId : function (req, res, next)
		{
			model.findById(req.params.id, function (err, doc)
			{
				if (err) return res.status(500).send(err);

				if (doc)
				{
					req.doc = doc;
					next();
				}
				else
				{
					res.status(404);
					res.send('Document not found.');
				}
			});
		},
		getById : function (req, res)
		{
			res.status(200).json(req.doc);
		},
		putById : function (req, res)
		{
			if (req.body._id === undefined)
				return res.status(500).send('Put object must contain an _id property.');

			// Remove old properties
			// req.doc is a constructor, so use _doc to remove properties
			for (var key in req.doc._doc)
			{
				if (req.body[key] === undefined)
					delete req.doc._doc[key];
			}

			// Add new properties
			for (var key in req.body)
				req.doc[key] = req.body[key];

			req.doc.save(function (err)
			{
				if (err) return res.status(500).send(err);
				res.status(200);
				res.json(req.doc);
			});
		},
		patchById : function (req, res)
		{
			if (req.body._id !== undefined)
				delete req.body._id;

			for (var key in req.doc)
			{
				if (req.body[key] !== undefined)
					req.doc[key] = req.body[key];
			}

			req.doc.save(function (err)
			{
				if (err) return res.status(500).send(err);
				res.status(200);
				res.json(req.doc);
			});
		},
		deleteById : function (req, res)
		{
			req.doc.remove(function (err)
			{
				if (err) return res.status(500).send(err);
				res.status(204);
				res.send('Removed.');
			});
		}
	};
}