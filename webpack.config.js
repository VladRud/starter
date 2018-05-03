const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ROOT_PATH = path.resolve(__dirname);
const CLIENT_INDEX_PATH = ROOT_PATH + '/client/index.html';
const NODE_ENV = process.env.NODE_ENV;

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
            }
        ]
    },
    devtool: NODE_ENV === 'development' ? 'eval' : 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: CLIENT_INDEX_PATH
        })
    ]
};