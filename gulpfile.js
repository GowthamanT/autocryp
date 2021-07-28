var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var uglifycss = require('gulp-uglifycss');
var uglify = require('gulp-uglify');
var pipeline = require('readable-stream').pipeline;

function compileSass() {
  return gulp.src('src/styles/Sass/styles.scss')
    .pipe(sass())
    .pipe(gulp.dest('src/styles/Css'));
}

function watchChanges() {
  gulp.watch('src/styles/Sass/**/*.scss', compileSass); 
}

function minifyCss() {
  return gulp.src('src/styles/Css/styles.css')
    .pipe(uglifycss())
    .pipe(gulp.dest('dist/'));
}

function minifyJs() {
  return pipeline(
    gulp.src('src/js/*.js'),
    uglify(),
    gulp.dest('dist/')
);
}

exports.minifyCss = minifyCss;
exports.minifyJs = minifyJs;
exports.watchChanges = watchChanges;
exports.default = gulp.series(compileSass, minifyCss, minifyJs, watchChanges);