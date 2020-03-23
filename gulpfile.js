const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const watch = require('gulp-watch');

gulp.task('sass-compile', function() {
  return gulp
    .src('./scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./css/'));
});

gulp.task('icons', function() {
  return gulp
    .src('node_modules/@fortawesome/fontawesome-free/webfonts/*')
    .pipe(gulp.dest('./webfonts/'));
});

gulp.task('watch', function() {
  gulp.watch('./scss/**/*.scss', gulp.series('sass-compile', 'icons'));
});
