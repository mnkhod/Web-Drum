const { src , dest , watch , series , parallel } = require('gulp')
const browser = require('browser-sync')
const postcss = require('gulp-postcss')
const nano = require('cssnano')
const prefix = require ('autoprefixer')
const uglify = require('gulp-uglify')
const sass = require('gulp-sass')


function scssTask(){
  return src('src/*.scss')
      .pipe(sass())
      .pipe(postcss([prefix(),nano()]))
      .pipe(dest('public'));
}

function jsTask(){
  return src('src/*.js')
      .pipe(uglify())
      .pipe(dest('public'));
}


function watchTask(){

  browser.init({
    server: { baseDir: './' },
    watch: true,
    files: ['public/*.*','/index.html']

  });

  watch(['./src/*.js' , './src/*.scss' ],series(parallel(scssTask,jsTask)));
}

exports.default = series(scssTask,jsTask,watchTask);

