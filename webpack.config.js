require('dotenv').config();
require('@babel/polyfill');
const DotenvPlugin = require('webpack-dotenv-plugin');
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  plugins: [
    new DotenvPlugin({
      sample: './.env',
      path: './.env'
    })
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      { test: /\.node$/, use: 'node-loader' },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
        }
    }
    ]
  },
  node: { fs: 'empty' },
};
