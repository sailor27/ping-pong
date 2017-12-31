var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('myTask', function(){
  console.log('hello gulp');
});

gulp.task('jsBrowserify', function(){
	console.log('t');
	return browserify({ entries: ['./js/ping-pong-interface.js'] })
	.bundle()
	.pipe(source('app.js'))
	.pipe(gulp.dest('./build/js'));
});
