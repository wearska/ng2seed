import {join} from 'path';
import {APP_SRC, APP_DEST, APP_BUILD, DEV_DEPENDENCIES, BUILD_DEPENDENCIES, APP_ASSETS} from '../config';
import {transformPath, templateLocals} from '../utils';

export = function buildIndexDev(gulp, plugins) {
  return function() {

    var injectStyles = gulp.src([
      join(APP_BUILD, '/styles/**/*.css')
    ], { read: false });

    var injectScripts = gulp.src([
      join(APP_BUILD, '/scripts/*.js'),
      join(APP_BUILD, '/**/*.js')
    ]);

    var injectOptions = {
      ignorePath: [APP_BUILD],
      addRootSlash: false
    };

    return gulp.src(join(APP_SRC, 'index.html'))
    // NOTE: There might be a way to pipe in loop.
      // .pipe(plugins.inject(injectStyles, injectOptions))
      // .pipe(plugins.inject(injectScripts, injectOptions))
      .pipe(plugins.inject(
        gulp.src(join(APP_BUILD, 'scripts/vendor.js'),
        {read: false}),
        {name: 'vendor', ignorePath: [APP_BUILD], addRootSlash: false}
        ))
      .pipe(plugins.inject(
        gulp.src(join(APP_BUILD, 'scripts/app.js'),
        {read: false}),
        {name: 'app', ignorePath: [APP_BUILD], addRootSlash: false}
        ))
      .pipe(plugins.inject(
        gulp.src(join(APP_BUILD, 'bootstrap.js'),
        {read: false}),
        {name: 'bootstrap', ignorePath: [APP_BUILD], addRootSlash: false}
        ))
      .pipe(plugins.inject(
        gulp.src(join(APP_BUILD, 'styles/vendor.css'),
        {read: false}),
        {name: 'vendor', ignorePath: [APP_BUILD], addRootSlash: false}
        ))
      .pipe(plugins.inject(
        gulp.src(join(APP_BUILD, 'styles/app.css'),
        {read: false}),
        {name: 'app', ignorePath: [APP_BUILD], addRootSlash: false}
        ))
      .pipe(gulp.dest(APP_BUILD));
  };
};
