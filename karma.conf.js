module.exports = function(config) {

  config.set({
    basePath: '',

    plugins: [
      require('karma-systemjs'),
      require('karma-mocha'),
      require('karma-chai'),
      require('karma-sinon'),
      require('karma-chrome-launcher'),
      require('karma-htmlfile-reporter')
    ],

    frameworks: [
      'systemjs',
      'mocha',
      'chai',
      'sinon'
    ],

    systemjs: {
      // configFile: 'src/systemjs.config.js',
      config: {
        paths: {
          "typescript": "node_modules/typescript/lib/typescript.js",
          "systemjs": "node_modules/systemjs/dist/system.js",
          'system-polyfills': 'node_modules/systemjs/dist/system-polyfills.js',
          'es6-module-loader': 'node_modules/es6-module-loader/dist/es6-module-loader.js'
        },
        map: {
          app:                'src/app',
          accelerate:         'src/accelerate'
        },
        packages: {
          // 'test/unit': {
          //   defaultExtension: 'ts'
          // },
          'src/app': {
            main:             'main.ts',
            defaultExtension: 'ts'
          },
          'src/accelerate': {
            main:             'index.ts',
            defaultExtension: 'ts'
          }
        },
        transpiler: 'typescript'
      },
      serveFiles: [
        'src/**/*.ts',
      ]
    },

    files: [
      'src/**/*.spec.ts'
    ],

    exclude: [],

    preprocessors: [],

    reporters: ['progress', 'html'],

    // HtmlReporter configuration
    htmlReporter: {
      // Open this file to see results in browser
      outputFile: '_test-output/tests.html',

      // Optional
      pageTitle: 'Unit Tests',
      subPageTitle: __dirname
    },

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  })
};
