var gulp = require('gulp');
var browserSync = require('browser-sync');
var proxy = require('http-proxy-middleware');
var express = require('express');
var app = express();

gulp.task('browser-sync', () => {
  browserSync.init({
    server: {
      baseDir: './www'
    }
  })
});

var option = {
  target: 'http://j.jimutour.com',
  changeOrigin: true,
  router: {
    'localhost/': 'localhost:3000/www/index.html'
  }
}

gulp.task('proxy', () => {
  app.use('/api', proxy(option));
  app.listen(3000);
});

gulp.task('default', ['browser-sync', 'proxy']);
