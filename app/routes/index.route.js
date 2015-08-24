
// Modules
var express = require('express'),
	router  = express.Router(),
	ctrl    = require('../controllers/index.controller');

// Homepage
router.get('/', ctrl.get);

module.exports = router;
