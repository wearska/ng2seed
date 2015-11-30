import {join} from 'path';
import {APP_DEST, APP_BUILD} from '../config';

export = function buildJsBootstrapProd(gulp, plugins, option) {
  return function () {
    return gulp.src([
		join(APP_DEST,'bootstrap.js')
		])
      .pipe(plugins.uglify())
      .pipe(gulp.dest(join(APP_BUILD)));
  };
}
