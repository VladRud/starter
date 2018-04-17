const path = require('path');
const ROOT_PATH = path.resolve(__dirname);

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: `ngtemplate-loader?relativeTo=${ROOT_PATH}/src!html-loader`
            }
        ]
    }
};