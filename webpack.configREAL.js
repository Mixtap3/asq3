'use strict';

var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'src', 'main.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  module: {
    loaders: [
      {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    },{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }, {
      test: /\.json?$/,
      loader: 'json-loader'
    },{
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({loader: 'css-loader', fallback: 'style-loader'})
    },{
      test: /\.(woff|woff2|eot|ttf|png|jpg|gif)$/, 
      loader: 'url-loader?limit=10000' 
    },{
      test: /\.svg$/,
      loader: 'svg-loader?pngScale=2'     
    }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        context: __dirname,
        debug: true,
        sassLoader: {
          includePaths: ['node_modules'],
        }
//        postcss: [autoprefixer],
      }
    }),
    //new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
   // new webpack.NoErrorsPlugin(),
   // new webpack.DefinePlugin({
     // 'process.env.NODE_ENV': JSON.stringify('development')
   // })
    new CopyWebpackPlugin([
      { from: 'src/views/index.html', to: 'index.html' },
      // { from: 'src/assets/favicon.ico', to: 'assets/favicon.ico' },
    ]),
    new ExtractTextPlugin("styles.css"), 
  ]
};
