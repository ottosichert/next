const debug = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),
  devtool: debug ? 'inline-sourcemap' : null,
  devServer: debug ? {
    hot: true,
    inline: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000,
      ignored: /node_modules/,
    },
    contentBase: 'src',
  } : null,
  entry: './client',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
    ],
  },
  resolve: {
    alias: {
      Package: __dirname,
      Utils: path.join(__dirname, 'src/utils'),
      Store: path.join(__dirname, 'src/store'),
      Components: path.join(__dirname, 'src/components'),
    },
  },
  output: {
    path: path.join(__dirname, 'src'),
    filename: 'bundle.min.js',
  },
  plugins: debug ? [
    new webpack.HotModuleReplacementPlugin(),
  ] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
