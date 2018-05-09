const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ROOT_PATH = path.resolve(__dirname);
const CLIENT_INDEX_PATH = ROOT_PATH + '/client/index.html';
const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';
const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
  entry: './client/app/app',
  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, 'dist/client')
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        exclude: CLIENT_INDEX_PATH,
        loader: `ngtemplate-loader?relativeTo=${ROOT_PATH}/client!html-loader`
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            "presets": ["es2015"],
            "plugins": ["angularjs-annotate"]
          }
        }
      },
      {
        test: /\.(eot|ttf|woff|woff2|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: "assets/fonts/[name].[ext]"
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: "assets/images/[name].[hash].[ext]"
            }
          }
        ],
      },
      {
        test: /favicon\.ico$/,
        loader: 'url-loader',
        query: {
          limit: 1,
          name: '[name].[ext]',
        }
      }
    ]
  },
  devtool: IS_DEV ? 'eval' : 'source-map',
  mode: IS_DEV ? 'development' : 'production',
  plugins: [
    new HtmlWebpackPlugin({
      template: CLIENT_INDEX_PATH
    }),
    new LiveReloadPlugin({})
  ]
};