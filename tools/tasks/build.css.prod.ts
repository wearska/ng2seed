import {join} from 'path';
import {APP_SRC, APP_BUILD} from '../config';

export = function buildCssProd(gulp, plugins, option) {
  return function () {
    return gulp.src(join(APP_SRC, '**', '*.css'))
      .pipe(plugins.concat('app.css'))
      .pipe(plugins.minifyCss())
      .pipe(gulp.dest(join(APP_BUILD, 'styles')));
  };
}
