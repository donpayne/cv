
// Modules
var db    = require('mongoose'),
	model = db.model('Skills');

// API Controller
module.exports = {
	post : function (req, res)
	{
		var doc = new model(req.body);
		doc.save(function (err)
		{
			if (err) return res.status(500).send(err);
			res.json(doc);
		});
	},
	get : function (req, res)
	{
		model.find({}, function (err, docs)
		{
			if (err) return res.status(500).send(err);
			res.json(docs);
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
				res.status(404).send('Document not found.');
			}
		});
	},
	getById : function (req, res)
	{
		res.json(req.doc);
	},
	putById : function (req, res)
	{
		for (var key in req.doc)
		{
			if (req.body[key] !== undefined)
				req.doc[key] = req.body[key];
		}

		req.doc.save(function (err)
		{
			if (err) return res.status(500).send(err);
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
			res.json(req.doc);
		});
	},
	deleteById : function (req, res)
	{
		req.doc.remove(function (err)
		{
			if (err) return res.status(500).send(err);
			res.status(204).send('Removed.');
		});
	}
};
