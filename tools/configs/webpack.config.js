'use strict'

var webpack = require('webpack')
var path = require('path')
var paths = require('./paths')

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: './src/js/src/script1',
  output: {
    path: path.resolve(__dirname, 'src/js'),
    filename: 'app.js',
    publicPath: '/wp-content/plugins/wp-ultimate-announcements/js/'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  }
}
