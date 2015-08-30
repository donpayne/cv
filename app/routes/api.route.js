
// Modules
var express    = require('express'),
	router     = express.Router(),
	controller = require('../controllers/api.controller')();

// Routes
router.route('/')
	.get(controller.get);

module.exports = router;
