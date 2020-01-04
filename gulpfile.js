var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var browserSync = require("browser-sync");
var notify = require("gulp-notify");
var pug = require("gulp-pug");

gulp.task("default", ["sass", "browser-sync", "pug", "js", "watch"]);

gulp.task("watch", () => {
    gulp.watch(["./src/**"], () => {
        gulp.start(["sass", "pug", "js"]);
    });
});

gulp.task("browser-sync", () => {
    browserSync({
        server: {
            baseDir: "./docs"
        }
    });
    gulp.watch("./src/**/*.js", ["reload"]);
    gulp.watch("./docs/**/*.html", ["reload"]);
});

gulp.task("sass", () => {
    gulp.src("./src/**/*.sass")
        .pipe(plumber({
            errorHandler: notify.onError("Error: <%= error.message %>")
        }))
        .pipe(sass())
        .pipe(gulp.dest("./docs"))
        .pipe(browserSync.stream())
});

gulp.task("pug", () => {
    var option = {
        pretty: true,
        basedir: "src"
    }
    gulp.src("./src/**/*.pug")
        .pipe(plumber({
            errorHandler: notify.onError("Error: <%= error.message %>")
        }))
        .pipe(pug(option))
        .pipe(gulp.dest("./docs"))
});

gulp.task("js", () => {
    gulp.src("./src/**/*.js")
        .pipe(plumber({
            errorHandler: notify.onError("Error: <%= error.message %>")
        }))
        .pipe(gulp.dest("./docs"))
        .pipe(browserSync.stream())
});

gulp.task("reload", () => {
    browserSync.reload();
});