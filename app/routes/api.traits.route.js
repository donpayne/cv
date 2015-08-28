
// Modules
var express    = require('express'),
	router     = express.Router(),
	db         = require('mongoose'),
	controller = require('../controllers/api.resource.controller')(db.model('Traits'));

// Routes
router.route('/')
	.get(controller.get)
	.post(controller.post);

// Middleware to get document from the db
router.use('/:id', controller.cacheId);

router.route('/:id')
	.get(controller.getById)
	.put(controller.putById)
	.patch(controller.patchById)
	.delete(controller.deleteById);

module.exports = router;
