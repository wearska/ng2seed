import {join} from 'path';
import {APP_DEST, APP_BUILD} from '../config';

export = function buildJsProd(gulp, plugins, option) {
  return function () {
    return gulp.src([
		join(APP_DEST, '**', '*.js'),
		join('!' + APP_DEST, 'bootstrap.js'),
		join('!' + APP_DEST, '/lib/*')
		])
      .pipe(plugins.concat('app.js'))
      .pipe(plugins.uglify())
      .pipe(gulp.dest(join(APP_BUILD, 'scripts')));
  };
}
