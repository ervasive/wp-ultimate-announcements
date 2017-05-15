'use strict';

var bs = require("browser-sync").create();
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var stripAnsi = require('strip-ansi');

var webpackConfig = require('../config/webpack.config');
var bundler = webpack(webpackConfig);

bundler.plugin('done', (stats) => {
  if (stats.hasErrors() || stats.hasWarnings()) {
    return bs.sockets.emit('fullscreen:message', {
      title: 'Webpack Error:',
      body: stripAnsi(stats.toString()),
      timeout: 100000
    });
  }

  bs.reload();
})

// Proxy php backend & reload on files changes
bs.init({
  proxy: 'localhost:8080',
  open: false,
  middleware: [
    webpackDevMiddleware(bundler, {
      publicPath: webpackConfig.output.publicPath,
      stats: { colors: true }
    })
  ],
  plugins: ['bs-fullscreen-message'],
  files: ['src/*.php']
})
