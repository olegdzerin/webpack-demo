const path = require('path');
 const HtmlWebpackPlugin = require('html-webpack-plugin');
 const { CleanWebpackPlugin } = require('clean-webpack-plugin');
  module.exports = {
    mode: 'development',
    entry: {
      app: './src/index.js',
      print: './src/print.js',
      exp: './src/exp.js'
    },
   plugins: [
     new CleanWebpackPlugin(),
    // new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
     new HtmlWebpackPlugin({
       title: 'Output Management',
     }),
   ],
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
  };