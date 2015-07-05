'use strict';

var browserify = require('browserify'),
    connect = require('gulp-connect'),
    gulp = require('gulp'),
    ngAnnotate = require('gulp-ng-annotate'),
    source = require('vinyl-source-stream'),
    uglify = require('gulp-uglify'),
    streamify = require('gulp-streamify'),
    del = require('del'),
    vinylPaths = require('vinyl-paths'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');

var liveReload = true;
var SASS_FILES = 'app/sass/**/*.scss';

gulp.task('sass', function() {
    return gulp.src(SASS_FILES)
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 3 versions', 'ie 8', 'ie 9'],
            cascade: false
        }))
        .pipe(gulp.dest('app/css'));
});

gulp.task('clean', function() {
    return gulp.src(['app/ngmin/!**!/!*.*', 'app/dist/!**!/!*.*'])
    .pipe(vinylPaths(del));
});

gulp.task('browserify', function() {
  return browserify('app/js/app.js')
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest('app/dist'))
  .pipe(connect.reload());
});

gulp.task('ngmin', function() {
  return gulp.src([
    'app/js/**/*.js'
  ])
  .pipe(ngAnnotate())
  .pipe(gulp.dest('app/ngmin'));
});

gulp.task('browserify-min', ['ngmin'], function() {
  return browserify('app/ngmin/app.js')
  .bundle()
  .pipe(source('app.min.js'))
  .pipe(streamify(uglify({ mangle: false })))
  .pipe(gulp.dest('app/dist'));
});

gulp.task('server', ['browserify'], function() {
  connect.server({
    root: 'app',
    livereload: liveReload
  });
});

gulp.task('watch', function() {
  gulp.start('server');
  gulp.watch(['app/js/**/*.js'], ['fast']);
  gulp.watch(SASS_FILES, ['sass']);
});

gulp.task('fast', ['clean'], function() {
  gulp.start('browserify');
});

gulp.task('default', ['clean'], function() {
  liveReload = false;
  gulp.start('browserify', 'browserify-min');
});
