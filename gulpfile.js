const gulp = require("gulp");
const sass = require("gulp-sass");
const plumber = require("gulp-plumber");
const browserSync = require("browser-sync");
const notify = require("gulp-notify");
const pug = require("gulp-pug");

gulp.task("default", ["browser-sync", "sass", "pug", "other", "watch"]);

gulp.task("watch", () => {
  gulp.watch(["src/**"], () => {
    gulp.start(["sass", "pug", "other"]);
  });
});

gulp.task("browser-sync", () => {
  browserSync({
    server: {
      baseDir: "docs"
    }
  });
  gulp.watch("src/**/*.*", ["reload"]);
});

gulp.task("sass", () => {
  gulp.src("src/**/*.sass")
    .pipe(plumber({
      errorHandler: notify.onError("Error: <%= error.message %>")
    }))
    .pipe(sass())
    .pipe(gulp.dest("docs"))
    .pipe(browserSync.stream())
});

gulp.task("pug", () => {
  const option =
    { pretty: true
    , basedir: "src"
    };
  gulp.src("src/**/*.pug")
    .pipe(plumber({
      errorHandler: notify.onError("Error: <%= error.message %>")
    }))
    .pipe(pug(option))
    .pipe(gulp.dest("docs"))
});

gulp.task("other", () => {
  gulp.src(["src/**/*.*", "!src/**/*.pug", "!src/**/*.sass"])
    .pipe(plumber({
      errorHandler: notify.onError("Error: <%= error.message %>")
    }))
    .pipe(gulp.dest("docs"))
    .pipe(browserSync.stream())
});

gulp.task("reload", () => {
  browserSync.reload();
});