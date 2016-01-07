'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');

var browserSync = require('browser-sync').create();

gulp.task('serve', ['sass3'], function() {

    browserSync.init({
        server: ""
    });

    gulp.watch("app/sass/*.scss", ['sass3']).on('change', browserSync.reload);
    gulp.watch("*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass3', function() {
    return gulp.src("app/sass/*.scss")
        .pipe(sass())
        .pipe(prefix('last 2 versions'))
        .pipe(cssnano())
        .pipe(gulp.dest("app/css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);