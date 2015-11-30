import {join} from 'path';
import {APP_DEST, APP_BUILD} from '../config';

export = function buildJsVendorProd(gulp, plugins, option) {
  return function () {
    return gulp.src([
		join(APP_DEST,'lib/**', '*.js')
		])
      .pipe(plugins.concat('vendor.js'))
      // .pipe(plugins.uglify())
      .pipe(gulp.dest(join(APP_BUILD, 'scripts')));
  };
}
