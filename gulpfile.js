const gulp = require("gulp");
const pug = require("gulp-pug");
const sass = require("gulp-sass");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const uglify = require("gulp-uglify");
const cssmin = require("gulp-cssmin");
const browserSync = require("browser-sync");
const del = require("del");

const paths =
{
  src: "src"
  , dst: "docs"
};

gulp.task("browser-sync", done => {
  browserSync({
    server: { baseDir: paths.dst }
  });
  gulp.watch(`${paths.src}/**/*.*`, gulp.task("reload"));
  done();
});

gulp.task('sass', done => {
  gulp.src([`${paths.src}/**/*.sass`])
    .pipe(plumber({
      errorHandler: notify.onError("Error: <%= error.message %>")
    }))
    .pipe(sass())
    .pipe(cssmin())
    .pipe(gulp.dest(paths.dst));
  done();
});

gulp.task("pug", done => {
  gulp.src(`${paths.src}/**/*.pug`)
    .pipe(plumber({
      errorHandler: notify.onError("Error: <%= error.message %>")
    }))
    .pipe(pug(
      {
        pretty: true
        , basedir: paths.src
      }
    ))
    .pipe(gulp.dest(paths.dst))
  done();
});

gulp.task('pug', done => {
  gulp.src(
    [`${paths.src}/**/*.pug`
      , `!${paths.src}/**/_*.pug`
    ]
  )
    .pipe(plumber({
      errorHandler: notify.onError("Error: <%= error.message %>")
    }))
    .pipe(pug({ pretty: true, basedir: paths.src }))
    .pipe(gulp.dest(paths.dst));
  done();
});

gulp.task('js', done => {
  gulp.src(`${paths.src}/**/*.js`)
    //.pipe(uglify())
    .pipe(gulp.dest(paths.dst));
  done();
});

gulp.task("other", done => {
  gulp.src(
    [`${paths.src}/**/*`
      , `!${paths.src}/**/*.pug`
      , `!${paths.src}/**/*.sass`
      , `!${paths.src}/**/*.js`
    ]
  )
    .pipe(plumber({
      errorHandler: notify.onError("Error: <%= error.message %>")
    }))
    .pipe(gulp.dest(paths.dst))
    .pipe(browserSync.stream());
  done();
});

gulp.task('watch', done => {
  gulp.watch(`${paths.src}/**/*.sass`).on('change', gulp.series('sass', browserSync.reload));
  gulp.watch(`${paths.src}/**/*.pug`).on('change', gulp.series('pug', browserSync.reload));
  gulp.watch(`${paths.src}/**/*.js`).on('change', gulp.series('js', browserSync.reload));
  gulp.watch(`${paths.src}/**/*`).on('change', gulp.series('other', browserSync.reload));
  done();
});

gulp.task('reload', done => {
  browserSync({ server: { baseDir: paths.dst } });
  done();
});

gulp.task('clean', done => {
  del.sync(`${paths.dst}/**`, `!${paths.dst}`);
  done();
});

gulp.task('default',
  gulp.parallel('pug', 'sass', 'js', 'other', 'watch', 'reload', done => { done(); })
);