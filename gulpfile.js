const gulp = require("gulp");
const pug = require("gulp-pug");
const sass = require("gulp-sass")(require("sass"));
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const babel = require("gulp-babel");
const cssmin = require("gulp-cssmin");
const browserSync = require("browser-sync");
const del = require("del");
const paths = {
  src: "src",
  dst: "docs",
};

const sass_ = done => {
  gulp
    .src([`${paths.src}/**/*.sass`])
    .pipe(plumber({
      errorHandler: notify.onError("Error: <%= error.message %>")
    }))
    .pipe(sass())
    .pipe(cssmin())
    .pipe(gulp.dest(paths.dst));
  done();
};

const pug_ = done => {
  gulp
    .src([
      `${paths.src}/**/*.pug`,
      `!${paths.src}/**/_*.pug`,
    ])
    .pipe(plumber({
      errorHandler: notify.onError("Error: <%= error.message %>")
    }))
    .pipe(pug({ pretty: true, basedir: paths.src }))
    .pipe(gulp.dest(paths.dst));
  done();
};

const js = done => {
  gulp
    .src(`${paths.src}/**/*.js`)
    /*.pipe(babel({
      presets: [
        ["@babel/preset-env", {
          "targets": {
            "node": "current"
          }
        }],
      ],
      plugins: [
        //"@babel/plugin-proposal-pipeline-operator",
        //"@babel/plugin-proposal-do-expressions",
        //"@babel/plugin-transform-runtime",
      ],
    }))*/
    .pipe(gulp.dest(paths.dst));
  done();
};

const other = done => {
  gulp
    .src([
      `${paths.src}/CNAME`,
      `${paths.src}/**/*.woff2`,
      `${paths.src}/**/*.ttf`,
      `${paths.src}/**/*.*`,
      `${paths.src}/**/*`,
      `!${paths.src}/**/*.pug`,
      `!${paths.src}/**/*.sass`,
      `!${paths.src}/**/*.js`,
    ])
    .pipe(plumber())
    .pipe(gulp.dest(paths.dst))
    .pipe(browserSync.stream());
  done();
};

const watch = done => {
  gulp.watch(`${paths.src}/**/*.sass`).on('change', gulp.series(sass_, browserSync.reload));
  gulp.watch(`${paths.src}/**/*.pug`).on('change', gulp.series(pug_, browserSync.reload));
  gulp.watch(`${paths.src}/**/*.js`).on('change', gulp.series(js, browserSync.reload));
  gulp.watch(`${paths.src}/**/*.*`).on('change', gulp.series(other, browserSync.reload));
  gulp.watch(`${paths.src}/**/*`).on('change', gulp.series(other, browserSync.reload));
  done();
};

const reload = done => {
  browserSync({ server: { baseDir: paths.dst } });
  done();
};

const clean = done => {
  del.sync(`${paths.dst}/**`, `!${paths.dst}`);
  done();
};

exports.default =
  gulp.series(
    clean,
    gulp.parallel(pug_, sass_, js, other, watch, reload, done => done())
  );
