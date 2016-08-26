'use strict';

var gulp = require('gulp');

gulp.task('prod', function(cb) {

    var runSequence = require('run-sequence');

    cb = cb || function() {
    };

    global.isProd = true;

    runSequence(['styles'], cb);

});
