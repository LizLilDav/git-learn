var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
	minifyCSS = require('gulp-minify-css');
	var rename = require("gulp-rename");

gulp.task('default', function() {
  gulp.src('css/*.css')
    .pipe(concatCss('anotherStyle.css'))
    .pipe(minifyCSS())
     .pipe(rename("newStyle.min.css))
    .pipe(gulp.dest('css'));
});