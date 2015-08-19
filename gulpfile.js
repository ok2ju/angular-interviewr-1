var browserify = require('browserify'),
    gulp = require('gulp'),
    ngAnnotate = require('gulp-ng-annotate'),
    source = require('vinyl-source-stream'),
    uglify = require('gulp-uglify'),
    streamify = require('gulp-streamify'),
    del = require('del'),
    vinylPaths = require('vinyl-paths'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create(),
    nodemon = require('gulp-nodemon');

var SASS_FILES = 'app/sass/**/*.scss';
var BROWSER_SYNC_RELOAD_DELAY = 500;

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
  .pipe(gulp.dest('app/dist'));
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

gulp.task('fast', ['clean'], function() {
  gulp.start('browserify');
});

gulp.task('default', ['clean'], function() {
  gulp.start('browserify', 'browserify-min');
});

//------------------------

gulp.task('js-watch', ['fast'], browserSync.reload);
gulp.task('sass-watch', ['sass'], browserSync.reload);

gulp.task('nodemon', function (cb) {
  var called = false;

  return nodemon({

    // nodemon expressjs server
    script: 'client.js',

    // watch core server file(s) that require server restart on change
    watch: ['app.js']
  })
  .on('start', function onStart() {
    // ensure start only got called once
    if(!called) { cb(); }
    called = true;
  })
  .on('restart', function onRestart() {
    // reload connected browsers after a slight delat
    setTimeout(function reload() {
      browserSync.reload({
        stream: false
      });
    }, BROWSER_SYNC_RELOAD_DELAY);
  });
});

gulp.task('serve', ['nodemon'], function() {
  browserSync.init({
    proxy: "http://localhost:8000",
    port: 4000,
  });

  gulp.watch(['app/js/**/*.js'], ['js-watch']);
  gulp.watch(SASS_FILES, ['sass-watch']);
  gulp.watch(['app/**/*.html']).on('change', browserSync.reload);
});
