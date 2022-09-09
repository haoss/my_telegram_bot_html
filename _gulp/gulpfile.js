'use strict';

const gulp = require('gulp'),
      gulpif = require('gulp-if'),
      pug = require('gulp-pug'),
      emitty = require('emitty').setup('_pug', 'pug'),
      plumber = require('gulp-plumber'),
      browserSync = require('browser-sync'),
      scss = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer'),
      sourcemaps = require('gulp-sourcemaps'),
      plugins = require('gulp-load-plugins')(),
      cleanCSS = require('gulp-clean-css'),
      rimraf = require('rimraf'),
      rename = require('gulp-rename'),
      wait = require('gulp-wait2'),
      fs = require('fs')
;

// Pug
gulp.task('pug', () =>
  new Promise((resolve, reject) => {
    emitty.scan(global.emittyChangedFile).then(() => {
      gulp.src('_pug/*.pug')
        .pipe(plumber())
        .pipe(gulpif(global.watch, emitty.filter(global.emittyChangedFile)))
        .pipe(pug({
          pretty: '    '
        }))
        .pipe(gulp.dest('dist'))
        .on('end', resolve)
        .on('error', reject);
    });
  })
);

// Sass
gulp.task('scss', function () {
  return gulp.src('_scss/main.scss')
    .pipe(wait(1500))
    .pipe(plumber())
    .pipe(plugins.sourcemaps.init())
    .pipe(scss({

    }).on('error', scss.logError))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(cleanCSS())
    .pipe(rename('style.min.css'))
    .pipe(plugins.sourcemaps.write("/"))
    .pipe(gulp.dest('dist/css/'))
});

// Static server
gulp.task('browser-sync', function () {
  browserSync.init({
    server: {
      baseDir: "./"
    },
    notify: false,
    // reloadDelay: 3000
  });
});

// Your "watch" task
gulp.task('watch', () => {
  global.watch = true;

  gulp.watch(['_pug/**/*.pug'], gulp.series('pug'))
    .on('all', (event, filepath) => {
      global.emittyChangedFile = filepath;
    });
    gulp.watch('dist/*.html').on('change', browserSync.reload);

  gulp.watch('_scss/**/*.scss', gulp.series('scss'));
  gulp.watch('dist/js/*.js').on("change", browserSync.reload);
  gulp.watch('dist/css/*.css').on('change', browserSync.reload);
});

// Default
gulp.task('default', gulp.parallel('browser-sync', 'watch'));