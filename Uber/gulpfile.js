const gulp = require('gulp'); //константы, в вызывают установленные пакеты
const browserSync = require('browser-sync'); //константы, в вызывают установленные пакеты
const sass = require('gulp-sass'); //константы, в вызывают установленные пакеты
const cleanCSS = require('gulp-clean-css'); //константы, в вызывают установленные пакеты
const autoprefixer = require('gulp-autoprefixer'); //константы, в вызывают установленные пакеты
const rename = require("gulp-rename"); //константы, в вызывают установленные пакеты

gulp.task('server', function() { //задача с запуском функции лайв-сервера

    browserSync({
        server: {
            baseDir: "src" //берутся файлы из папки src
        }
    });

    gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('styles', function() {
    return gulp.src("src/sass/**/*.+(scss|sass)")
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(rename({ suffix: '.min', prefix: '' }))
        .pipe(autoprefixer())
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});

gulp.task('watch', function() {
    gulp.watch("src/sass/**/*.+(scss|sass)", gulp.parallel('styles'));
})

gulp.task('default', gulp.parallel('watch', 'server', 'styles'));