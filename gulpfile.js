var gulp = require('gulp'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    clean = require('gulp-clean'),
    cssmin = require('gulp-cssmin'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    imageminJpegtran = require('imagemin-jpegtran'),
    htmlmin = require('gulp-htmlmin'),
    inlinecss = require('gulp-inline-css');


gulp.task('default', ['scripts', 'style', 'image-optimise', 'min-html', 'inline-css']);

gulp.task('clean', function () {
    return gulp.src(['dist/*'])
        .pipe(clean());
});

gulp.task('scripts', function () {
    return gulp.src('src/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist'));
});

gulp.task('style', function () {
    return gulp.src('src/**/*.css')
        .pipe(cssmin())
        .pipe(gulp.dest('./dist'));
});

gulp.task('image-optimise', function () {
    return gulp.src('src/**/*.{jpg,png}')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant(), imageminJpegtran()]
        }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('min-html', function () {
    return gulp.src(['src/**/*.html', '!src/index.html'])
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./dist'));
});

gulp.task('inline-css', function () {
    return gulp.src('src/index.html')
        .pipe(inlinecss({
                applyStyleTags: true,
                applyLinkTags: true,
                removeStyleTags: true,
                removeLinkTags: true
        }))
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./dist'));
});
