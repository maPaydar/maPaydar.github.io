var gulp = require('gulp');
var webpack = require('webpack-stream');

/*
  this task : to do polifily app.js
*/
gulp.task('app-bootstrap', function() {
    return gulp.src('app/src/bootstrap.js')
        .pipe(webpack({
            watch: true,
            optimizeMinimize: true,
            output: {
                filename: 'bootstrapDist.js',
            },
        }))
        .pipe(gulp.dest('app/src'));
});

gulp.task('default', ['app-bootstrap'])
