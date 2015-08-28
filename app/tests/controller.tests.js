
// Rest API Controller Tests
var	should = require('should'),
	sinon  = require('sinon'),
	app    = require('../../app.js')
	db     = require('mongoose');

describe('Controller Tests: ', function ()
{
	describe('Get', function ()
	{
		it('should return a collection of documents', function ()
		{
			var req = {};

			var res = 
			{
				status : sinon.spy()
			};

			var controller = require('../controllers/api.resource.controller')(db.model('Skills'));
			controller.get(req, res);

			res.status.calledWith(200).should.equal(true, 'Bad status ' + res.status.args[0]);
		});
	});
});