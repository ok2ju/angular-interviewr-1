var browserify = require('gulp-browserify'),
    gulp = require('gulp'),
    ngAnnotate = require('gulp-ng-annotate'),
    source = require('vinyl-source-stream'),
    uglify = require('gulp-uglify'),
    streamify = require('gulp-streamify'),
    del = require('del'),
    vinylPaths = require('vinyl-paths'),
    sourcemaps = require('gulp-sourcemaps'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create();

const babelify = require('babelify');
const url = require('url');
const fs = require('fs');

const SASS_FILES = 'app/src/sass/**/*.scss';
const JS_FILES = 'app/src/**/*.js';
const HTML_FILES = 'app/**/*.html';
const ASSETS_TARGET = 'dist/assets';
const BROWSER_SYNC_RELOAD_DELAY = 500;

gulp.task('html', function() {
  gulp.src(HTML_FILES)
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream());
});

gulp.task('copy-static', function() {
  return gulp.src('./app/assets/**/*')
    .pipe(gulp.dest(ASSETS_TARGET));
});

gulp.task('sass', ['copy-static'], function() {
    return gulp.src(SASS_FILES)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 3 versions', 'ie 8', 'ie 9'],
            cascade: false
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest(`${ASSETS_TARGET}/css`))
        .pipe(browserSync.stream());
});

gulp.task('clean', function() {
    return gulp.src(['dist/!**!/!*.*'])
    .pipe(vinylPaths(del));
});

gulp.task('browserify', function() {
  gulp.src('app/src/app.js')
  .pipe(browserify({
    shim: {
      angular: {
        path: './node_modules/angular/angular.js',
        depends: {jquery: 'jQuery'},
        exports: 'angular'
      }
    },
    transform: babelify
  }))
  .pipe(gulp.dest('dist'))
  .pipe(browserSync.stream());
});

gulp.task('ngmin', function() {
  return gulp.src([
    'app/src/**/*.js'
  ])
  .pipe(ngAnnotate())
  .pipe(gulp.dest('app/ngmin'));
});

gulp.task('browserify-min', ['ngmin'], function() {
  return browserify('app/ngmin/app.js')
  .bundle()
  .pipe(source('app.min.js'))
  .pipe(streamify(uglify({ mangle: false })))
  .pipe(gulp.dest('dist'));
});

gulp.task('serve', ['browserify', 'sass', 'html'], function() {
  const defaultFile = 'dist/index.html';
  browserSync.init({
    server: {
      baseDir: './',
      index: './' + defaultFile,
      middleware: function(req, res, next) {
        const urlObject = url.parse(req.url);
        const fileName = urlObject.href.split(urlObject.search).join('');
        const fileExists = fs.existsSync(__dirname + fileName);
        if (!fileExists && fileName.indexOf("browser-sync-client") < 0) {
            req.url = "/" + defaultFile;
        }
        return next();
      }
    },
    port: 4000
  });

  gulp.watch(JS_FILES, ['browserify']);
  gulp.watch(SASS_FILES, ['sass']);
  gulp.watch(HTML_FILES, ['html']);
});
