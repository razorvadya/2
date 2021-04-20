const gulp = require('gulp');
const sass = require('gulp-dart-sass');
const terser = require('gulp-terser');
const htmlmin = require('gulp-htmlmin');

const image = require('gulp-image');
 
gulp.task('sass', function () {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./scss/**/*.scss', ['sass']);
});

gulp.task('js', function () {
  return gulp.src('./src/js/*.js')
    .pipe(terser())
    .pipe(gulp.dest('./build/js'));
});

gulp.task('html', () => {
  return gulp.src('src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./build/'));
});

 
gulp.task('image', function () {
  return gulp.src('./src/images/**/*')
    .pipe(image())
    .pipe(gulp.dest('./build/images'));
});

gulp.task('default', gulp.series(['image', 'sass', 'js', 'html']));