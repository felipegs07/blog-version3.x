const { series, src, dest, parallel } = require('gulp');
const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

    let paths = {
        img: {
            src: './images/*',
            dest: './assets/img'
        },
        scripts: {
            src: './javascript/*.js',
            dest: './assets/js'
        },
        sass: {
            src: './_sass/main.scss',
            watch:'./_sass/**/*.scss',
            dest: './assets/css'
        }
    }

    function js(){
        return src(paths.scripts.src)
            .pipe(babel({
                presets: [
                    ['@babel/env', {
                        modules:false
                    }]
                ]
            }))
            .pipe(uglify())
            .pipe(dest(paths.scripts.dest))
    }

    function img(){
        return src(paths.img.src)
            .pipe(imagemin({optimizationLevel: 5}))
            .pipe(dest(paths.img.dest))
    }

    function css(){
        return src(paths.sass.src)
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(dest(paths.sass.dest))  
    }


    function watch(){
        gulp.watch(paths.scripts.src, js);
        gulp.watch(paths.img.src, img);
        gulp.watch(paths.sass.watch, css)
    }

exports.js = js;
exports.img = img;
exports.watch = watch;
exports.css = css;
exports.default = parallel(js, img, css);
