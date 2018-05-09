var gulp = require('gulp');
var del = require('del');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

/**
* clean
*/
gulp.task('clean', function() {
  return del('dist');
});

/*
* ngJwt
*/
gulp.task('src', function() {
  return gulp.src('src/ngJwt.js')
  .pipe(gulp.dest('dist'));
});

/*
* Minified js
*/
gulp.task('minified', function() {
  return gulp.src('src/ngJwt.js')
  .pipe(uglify({preserveComments: 'all'}))
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(gulp.dest('dist'));
})

/**
* build
*/
gulp.task('build', gulp.series('clean', gulp.parallel('src', 'minified')));
