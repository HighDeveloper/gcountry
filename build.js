var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var concat = require('gulp-concat');
var config = require('./config');

gulp.task('concat-minify-js', function() {

    gulp.src(config.jsSourceFiles())
        .pipe(concat(config.jsLibFile))
        .pipe(gulp.dest(config.jsDemoFolder()))
        .pipe(gulp.dest(config.distributionFolder))
        .pipe(uglify())
        .pipe(rename({suffix: config.fileSuffix}))
        .pipe(gulp.dest(config.distributionFolder));
});

gulp.task('default', ['concat-minify-js']);