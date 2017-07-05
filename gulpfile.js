var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var proxy = require('http-proxy-middleware');
var express = require('express');
var sass = require('gulp-sass');
var app = express();
var dirname = './www';
var bwSyncLs = [
    dirname + '/scss/*',
    dirname + '/pages/*/*'
]

gulp.task('sass:watch', () => {
    gulp.watch(dirname + '/scss/*', ['sass']);
});

gulp.task('sass', () => {
    gulp.src(dirname + '/scss/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        })
            .on('error', sass.logError))
        .pipe(gulp.dest(dirname + '/css'));
})

var option = {
    target: 'http://j.jimutour.com',
    changeOrigin: true
}

gulp.task('browser-sync', () => {
    browserSync.init({
        server: {
            baseDir: dirname,
            middleware: proxy('/businessapi', option)

        }
    });

    gulp.watch(bwSyncLs).on('change', browserSync.reload);
});


gulp.task('proxy', () => {
    app.use('/api', proxy(option));
    app.listen(3001);
});

gulp.task('default', ['sass', 'sass:watch', 'browser-sync']);
