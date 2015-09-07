
// Modules
var gulp      = require('gulp'),
    nodemon   = require('gulp-nodemon'),
    mocha     = require('gulp-mocha'),
    env       = require('gulp-env'),
    supertest = require('supertest');

gulp.task('default', function ()
{
    nodemon(
    {
        script : 'app.js',
        ext    : 'js',
        env    : { PORT: 3000 },
        ignore : [ './node_modules/**' ]
    })
    .on('restart', function ()
    {
        console.log('Restarting');
    });
});

gulp.task('test', function ()
{
    env({ vars: { ENV: 'development' } });
    gulp.src('./app/tests/*.js', { read: false })
        .pipe(mocha({ reporter: 'spec' }));
});