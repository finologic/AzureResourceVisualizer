/// <reference path="../typings/gulp/gulp.d.ts" />

var gulp = require('gulp');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');

module.exports = function(options) {
  gulp.task('typescript', function () {
    gulp.src('typings/**/*.ts')
    .pipe(gulp.dest(options.tmp + '/typings'));
    
    
    var tsResult = gulp.src('src/**/*.ts')
      .pipe(sourcemaps.init())
      .pipe(gulp.dest(options.tmp + '/serve'))
      .pipe(ts({
          noImplicitAny: false,
          target: 'ES5'
        }));
    return tsResult.js
      .pipe(sourcemaps.write({includeContent:false, sourceRoot: '/'}))
      .pipe(gulp.dest(options.tmp + '/serve'))
      ;
  });
}