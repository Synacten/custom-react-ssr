const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');

const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
  mode: 'development',
  entry: './src/client.js',
  devServer: {
    contentBase: './public',
    hot: true,
    port: 4200,
    host: 'localhost',
    open: true,
    historyApiFallback: true,
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist/public'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: './index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devtool: 'inline-source-map',
});
