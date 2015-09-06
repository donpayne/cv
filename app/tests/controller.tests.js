
// Rest API Controller Tests
var should   = require('should'),
	request  = require('supertest'),
	_        = require('underscore'),
	app      = require('../../app.js'),
	db       = require('mongoose'),
	Model    = db.model('Skills'),
	agent    = request.agent(app);

// Test Suite
describe('Skills', function()
{
	it('should be able to get skills', function (done) 
	{
		agent.get('/api/skills')
			.expect(200)
			.end(function (err, res)
			{
				should.not.exist(err);
				res.body.should.be.Array();
				done();
			});
	});

	var RESOURCE = 
	{
		"title": "TEST",
		"description": "This is a TEST",
		"rate": 3,
		"order": 8
	};

	it('should allow a resource to be posted and return the resource', function (done)
	{
		agent.post('/api/skills')
			.set('Accept', 'application/json')
			.send(RESOURCE)
			.expect(201)
			.expect('Content-Type', 'application/json; charset=utf-8')
			.end(function (err, res)
			{
				should.not.exist(err);
				res.body.should.have.property('title', 'TEST');
				res.body.should.have.property('description', 'This is a TEST');
				res.body.should.have.property('rate', 3);
				res.body.should.have.property('order', 8);

				// Store _id for delete method
				RESOURCE._id = res.body._id;
				done();
			});
	});

	it('should allow a resource to be get by id', function (done)
	{
		agent.get('/api/skills/' + RESOURCE._id)
			.expect(200)
			.end(function (err, res)
			{
				should.not.exist(err);
				res.body.should.have.property('title', 'TEST');
				res.body.should.have.property('description', 'This is a TEST');
				res.body.should.have.property('rate', 3);
				res.body.should.have.property('order', 8);
				done();
			});
	});

	it('should allow a resource to be put by id', function (done)
	{
		var PUT = _.extend({}, RESOURCE);
		PUT.title = "TEST PUT";

		if (PUT.description !== undefined)
			delete PUT.description;

		agent.put('/api/skills/' + RESOURCE._id)
			.set('Accept', 'application/json')
			.send(PUT)
			.expect(200)
			.expect('Content-Type', 'application/json; charset=utf-8')
			.end(function (err, res)
			{
				should.not.exist(err);
				res.body.should.have.property('title', 'TEST PUT');
				res.body.should.not.have.property('description');
				done();
			});
	});

	it('should require put methods to send an _id property', function (done)
	{
		var PUT = _.extend({}, RESOURCE);
		
		if (PUT._id !== undefined)
			delete PUT._id;

		agent.put('/api/skills/' + RESOURCE._id)
			.set('Accept', 'application/json')
			.send(PUT)
			.expect(500)
			.expect('Content-Type', 'application/json; charset=utf-8')
			.end(function (err, res)
			{
				should.exist(err);
				res.error.text.should.equal('Put object must contain an _id property.');
				done();
			});
	});

	it('should allow a resource to be patched by id', function (done)
	{
		var PATCH = 
		{
			"title" : "TEST PATCH"
		};

		agent.patch('/api/skills/' + RESOURCE._id)
			.set('Accept', 'application/json')
			.send(PATCH)
			.expect(200)
			.expect('Content-Type', 'application/json; charset=utf-8')
			.end(function (err, res)
			{
				should.not.exist(err);
				res.body.should.have.property('title', 'TEST PATCH');
				done();
			});
	});

	it('should allow a resource to be deleted', function (done)
	{
		agent.delete('/api/skills/' + RESOURCE._id)
			.expect(204)
			.end(function (err, res)
			{
				should.not.exist(err);
				done();
			});
	});

	after(function (done)
	{
		Model.remove({ _id: RESOURCE._id }).exec();
		done();
	});
});