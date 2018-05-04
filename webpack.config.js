const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ROOT_PATH = path.resolve(__dirname);
const CLIENT_INDEX_PATH = ROOT_PATH + '/client/index.html';
const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';
const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
    entry: './client/app/app.module',
    output: {
        filename: 'bundle.[hash].js',
        path: path.resolve(__dirname, 'dist/client')
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                exclude: CLIENT_INDEX_PATH,
                loader: `ngtemplate-loader?relativeTo=${ROOT_PATH}/client/app!html-loader`
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        "presets": ["es2015"]
                    }
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