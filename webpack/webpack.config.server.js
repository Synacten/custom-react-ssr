const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'production',
  entry: './frontend/app/server.js',
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'server.js',
    publicPath: '/',
  },
  target: 'node',
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          ecma: 5,
          warnings: false,
          parse: {},
          compress: {},
          mangle: true,
          module: false,
          output: null,
          toplevel: false,
          nameCache: null,
          ie8: false,
          keep_classnames: undefined,
          keep_fnames: false,
          safari10: false,
        },
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
