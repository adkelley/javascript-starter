const path = require ('path');
const HtmlWebpackPlugin = require ('html-webpack-plugin');
const CleanWebpackPlugin = require ('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    app: './src/index.js',
    print: './src/print.js',
  },
  plugins: [
    new HtmlWebpackPlugin ({
      title: 'Javascript Starter',
    }),
    new CleanWebpackPlugin (['dist']),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve (__dirname, 'dist'),
  },
};
