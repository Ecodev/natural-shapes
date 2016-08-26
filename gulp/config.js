'use strict';

module.exports = {
    bundleName : 'natural-shapes',
    dist: {
        root: 'dist'
    },
    styles: {
        sass: 'demo/style.scss',
        dest: 'demo',
        watch: 'dist/**/*.scss',
        prodSourcemap: false
    },
    browsersync: {
        browserPort: 3000,
        UIPort: 3001,
        proxy: 'natural-shapes.lan/demo',
        host: 'natural-shapes.lan',
        open: 'external'
    },
};
