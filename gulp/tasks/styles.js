'use strict';

var gulp = require('gulp');

gulp.task('styles', function() {

    var config = require('../config');
    var gulpif = require('gulp-if');
    var sourcemaps = require('gulp-sourcemaps');
    var sass = require('gulp-sass');
    var handleErrors = require('../util/handleErrors');
    var browserSync = require('browser-sync');
    var autoprefixer = require('gulp-autoprefixer');
    var rename = require('gulp-rename');

    var createSourcemap = !global.isProd || config.styles.prodSourcemap;
    var output = global.isProd ? 'compressed': 'expanded';

    console.log(config.styles.sass);

    return gulp.src(config.styles.sass)
               // .pipe(gulpif(createSourcemap, sourcemaps.init()))
               .pipe(sass({
                   sourceComments: !global.isProd,
                   outputStyle: output
               }))
               .on('error', handleErrors)
               .pipe(autoprefixer('last 2 versions', '> 1%', 'ie 8'))
               .on('error', handleErrors)
               // .pipe(gulpif(createSourcemap, sourcemaps.write(global.isProd ? './' : null)))
               .pipe(gulp.dest(config.styles.dest))
               .pipe(browserSync.stream({once: true}));

});
