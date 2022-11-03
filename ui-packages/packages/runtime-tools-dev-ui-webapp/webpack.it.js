const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.dev.js');
const webpack = require('webpack');

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || '9000';

module.exports = common({DIST_DIR:'dist-it'});