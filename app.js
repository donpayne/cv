
// Modules
var express        = require('express'),
	jade           = require('jade'),
	bodyParser     = require('body-parser'),
	cookieParser   = require('cookie-parser'),
	favicon        = require('serve-favicon'),
	logger         = require('morgan'),
	methodOverride = require('method-override'),
	http           = require('http'),
	path           = require('path'),
	debug          = require('debug')(global.appname + ':server');

// Env Variables
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Global Variables
global.appname = 'cv';
global.root    = __dirname;
global.path    =
{
    'config'        : 
    {
    	'init'          : path.join(global.root, 'config', 'init'),
	    'env'           : path.join(global.root, 'config', 'env'),
	    'models'        : path.join(global.root, 'config', 'models'),
	    'routes'        : path.join(global.root, 'config', 'routes')
    },
    'controllers'   : path.join(global.root, 'app', 'controllers'),
    'models'        : path.join(global.root, 'app', 'models'),
    'routes'        : path.join(global.root, 'app', 'routes'),
    'views'         : path.join(global.root, 'app', 'views'),
    'jade-compiler' : path.join(global.root, 'app', 'jade-compiler'),
    'public'        : path.join(global.root, 'public'),
    'bower'         : path.join(global.root, 'bower_components')
};

// Application
var app = express();
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'jade');
app.set('views', global.path.views);
app.use(favicon(path.join(global.path.public, 'img', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 
app.use(cookieParser());
app.use(methodOverride());
app.use(express.static(global.path.public));
app.use(express.static(global.path.bower));
app.use(require('less-middleware')(path.join(global.path.public, 'css')));

// Configure App
require(global.path.config.init)(app);

// development error handler
// will print stacktrace
if (app.get('env') === 'development') 
{
	app.use(function (err, req, res, next) 
	{
		res.status(err.status || 500);
		res.render('error', 
		{
            status  : err.status,
			message : err.message,
			error   : err
		});
	});

	// Compile Clientside Jade Templates
	require(global.path['jade-compiler'])();
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) 
{
	res.status(err.status || 500);
	res.render('error', 
	{
		status  : err.status,
		message : err.message,
		error   : {}
	});
});

module.exports = app;

// Create App Server
var server = http.createServer(app);
server.listen(app.get('port'));

// Event listener for HTTP server "error" event.
server.on('error', function (err) 
{
	if (err.syscall !== 'listen')
		throw err;

	var port = app.get('port');
	var bind = (typeof port === 'string')? 'Pipe ' + port : 'Port ' + port;

	// handle specific listen errors with friendly messages
	switch (err.code) 
	{
		case 'EACCES':
			console.error(bind + ' requires elevated privileges');
			process.exit(1);
			break;
		case 'EADDRINUSE':
			console.error(bind + ' is already in use');
			process.exit(1);
			break;
		default:
			throw err;
	}
});

// Event listener for HTTP server "listening" event.
server.on('listening', function () 
{
	var addr = server.address();
	var bind = (typeof addr === 'string')? 'pipe ' + addr : 'port ' + addr.port;
	debug('Express server listening on port ' + bind);
});
