'use strict'

var gulp = require('gulp');

gulp.task('refresh', function() {
    console.info('******************** REFRESH ***************************');
});

gulp.task('reload', function() {
    var browserSync = require('browser-sync');

    browserSync.reload();
});

// Watch with browsersync
gulp.task('live', ['browserSync', 'watch']);

gulp.task('watch', function() {
    var config = require('../config');

    // Scripts are automatically watched and rebundled by Watchify inside Browserify task
    gulp.watch(config.styles.sass, ['refresh', 'styles']);
    gulp.watch(config.styles.watch, ['refresh', 'styles']);

    // Demo files
    gulp.watch('demo/*.html', ['refresh', 'reload']);
    gulp.watch('demo/*.css', ['refresh', 'reload']);

});

