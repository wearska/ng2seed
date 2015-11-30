import {readFileSync} from 'fs';
import {argv} from 'yargs';


// --------------
// Configuration.
export const ENV                  = argv['env']         || 'dev';
export const DEBUG                = argv['debug']       || false;
export const PORT                 = argv['port']        || 5555;
export const LIVE_RELOAD_PORT     = argv['reload-port'] || 4002;
export const DOCS_PORT            = argv['docs-port']   || 4003;
export const APP_BASE             = argv['base']        || '/';

export const APP_TITLE            = 'My Angular2 App';

export const APP_SRC              = 'app';
export const ASSETS_SRC           = `${APP_SRC}/assets/**/*`;

export const TOOLS_DIR            = 'tools';
export const TEST_DEST            = 'test';
export const DOCS_DEST            = 'docs';
export const APP_BUILD            = 'build';
export const STYLES_BUILD         = `${APP_BUILD}/styles`;
export const SCRIPTS_BUILD        = `${APP_BUILD}/scripts`;
export const APP_DEST             = `dist/${ENV}`;
export const ASSETS_DEST          = `${APP_DEST}/assets`;
export const CSS_DEST             = `${APP_DEST}/css`;
export const FONTS_DEST           = `${APP_DEST}/fonts`;
export const LIB_DEST             = `${APP_DEST}/lib`;
export const VERSION              = appVersion();

export const VERSION_NPM          = '3.0.0';
export const VERSION_NODE         = '4.0.0';


export const DEV_DEPENDENCIES = [
  { src: 'systemjs/dist/system-polyfills.js', dest: LIB_DEST },

  { src: 'es6-shim/es6-shim.min.js',    dest: LIB_DEST, inject: 'shims' },
  { src: 'reflect-metadata/Reflect.js', dest: LIB_DEST, inject: 'shims' },
  { src: 'systemjs/dist/system.src.js', dest: LIB_DEST, inject: 'shims' },

  // Faster dev page load
  { src: 'angular2/bundles/angular2.dev.js', dest: LIB_DEST, inject: 'libs' },
  { src: 'angular2/bundles/router.dev.js', dest: LIB_DEST, inject: 'libs' },
  { src: 'angular2/bundles/http.dev.js', dest: LIB_DEST, inject: 'libs' },

  { src: 'bootstrap/dist/css/bootstrap.css', dest: CSS_DEST, inject: true },

  { src: 'bootstrap/dist/fonts/glyphicons-halflings-regular.eot',   dest: FONTS_DEST},
  { src: 'bootstrap/dist/fonts/glyphicons-halflings-regular.svg',   dest: FONTS_DEST},
  { src: 'bootstrap/dist/fonts/glyphicons-halflings-regular.ttf',   dest: FONTS_DEST},
  { src: 'bootstrap/dist/fonts/glyphicons-halflings-regular.woff',  dest: FONTS_DEST},
  { src: 'bootstrap/dist/fonts/glyphicons-halflings-regular.woff2', dest: FONTS_DEST}
];
export const BUILD_DEPENDENCIES = [
  // Css
  { src: 'styles/app.css', dest: STYLES_BUILD, inject: true  },
  { src: 'styles/vendor.css', dest: STYLES_BUILD, inject: 'vendor'  },
  // Js
  { src: 'scripts/app.js', dest: SCRIPTS_BUILD, inject: true },
  { src: 'scripts/vendor.js', dest: SCRIPTS_BUILD, inject: 'vendor' },
];

DEV_DEPENDENCIES.forEach(d => d.src = require.resolve(d.src));
// BUILD_DEPENDENCIES.forEach(d => d.src = require.resolve(d.src));

export const APP_ASSETS = [
  { src: `${ASSETS_DEST}/main.css`, inject: true, dest: ASSETS_DEST }
];

export const SYSTEM_CONFIG = {
  defaultJSExtensions: true,
  paths: {
    '*': `${APP_BASE}node_modules/*`
  }
};


// --------------
// Private.
function appVersion(): number|string {
  var pkg = JSON.parse(readFileSync('package.json').toString());
  return pkg.version;
}
