const gulp = require('gulp')
const cleanCSS = require('gulp-clean-css')
const stylus = require('gulp-stylus')
const rename = require('gulp-rename')
const autoprefixer = require('gulp-autoprefixer')

gulp.task('css',function() {
  gulp.src('../src/styles/index.styl')
  .pipe(stylus())
  .pipe(autoprefixer({
    browsers: ['last 2 versions', 'ie > 8']
  }))
  .pipe(cleanCSS())
  .pipe(rename('ki.css'))
  .pipe(gulp.dest('../lib/styles'));
})

gulp.task('default', ['css']);
