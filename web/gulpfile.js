var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cssmin = require('gulp-cssmin'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    prefix = require('gulp-autoprefixer'),
    browserSync = require('browser-sync');

/**
 * Styles
 **/
gulp.task('scss', function() {
    gulp.src('_assets/scss/*.scss')
        .pipe(sass())
        .pipe(cssmin())
        .pipe(prefix({
            browsers: ['last 3 versions']
        }))
        .pipe(gulp.dest('css'))
        .pipe(browserSync.stream());
});


/**
 * Scripts
 **/
gulp.task('js', function() {
    gulp.src('_assets/js/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('js'));
});

/**
 *
 * Fonts
 **/
gulp.task('fonts', function() {
    gulp.src('_assets/fonts/*')
        .pipe(gulp.dest('fonts'));
});

/**
 *
 * Libs
 **/
gulp.task('lib', function() {
    gulp.src('_assets/lib/**')
        .pipe(gulp.dest('lib'));
});

gulp.task('watch', ['scss', 'js', 'fonts', 'lib'], function() {
    gulp.watch( '_assets/scss/**/*.scss' , ['scss']);
    gulp.watch( '_assets/js/**/*.js' , ['js']);
    gulp.watch( '*.html').on('change', browserSync.reload);
});
