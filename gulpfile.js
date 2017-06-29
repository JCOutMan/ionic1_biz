var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var proxy = require('http-proxy-middleware');
var express = require('express');
var app = express();

gulp.task('browser-sync', () => {
// 静态服务器
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('http-proxy', () => {
  app.use('/api', proxy({target:'http://www.example.org/api', changeOrigin:true}));
  app.get('/', '')
  app.listen(3000);
})

gulp.task('default', ['browser-sync', 'http-proxy']);