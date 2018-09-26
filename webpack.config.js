let path = require('path');

module.exports = {

    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
            // loader: 'babel-loader'
        }]
    },

    entry: './src/index.js',

    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, './dist')
    },

    mode: 'development'
};


