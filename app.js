
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
	debug          = require('debug')('cv:server');

// Application
var app = express();
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'jade');
app.set('views', __dirname + '/app/views');
// app.use(favicon(__dirname + '/public/img/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 
app.use(cookieParser());
app.use(methodOverride());
app.use(require('less-middleware')(path.join(__dirname, '/public/css')));
app.use(express.static(path.join(__dirname, 'public')));

// Configure App
require('./config/database')();
require('./config/routing')(app);

// development error handler
// will print stacktrace
if (app.get('env') === 'development') 
{
	app.use(function (err, req, res, next) 
	{
		res.status(err.status || 500);
		res.render('error', 
		{
			message: err.message,
			error: err
		});
	});

	// Compile Clientside Jade Templates
	require('./config/jade-compiler')();
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) 
{
	res.status(err.status || 500);
	res.render('error', 
	{
		message: err.message,
		error: {}
	});
});

// Create App Server
var server = http.createServer(app);
server.listen(app.get('port'));
server.on('error', onError);
server.on('listening', onListening);

// Event listener for HTTP server "error" event.
function onError (err) 
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
}

// Event listener for HTTP server "listening" event.
function onListening () 
{
	var addr = server.address();
	var bind = (typeof addr === 'string')? 'pipe ' + addr : 'port ' + addr.port;
	debug('Express server listening on port ' + bind);
}

module.exports = app;
