var path = require('path');
var WebpackNotifierPlugin = require('webpack-notifier');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        'my-app': './src/main.ts'
    },

    output: {
        path: path.join(__dirname, '/public/dist'),
        filename: 'bundle.js'
    },

    resolve: {
        extensions: ['', '.ts', '.js'],
        modules: ['node_modules', 'bower_components']
    },

    devtool: 'source-map',

    module: {
        rules: [
            {
                test: /\.(png|jp(e*)g|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8000, // Convert images < 8kb to base64 strings
                        name: 'images/[hash]-[name].[ext]'
                    }
                }]
            }
        ],
        preLoaders: [
            { exclude: /node_modules/, loader: 'tslint', test: /\.ts$/ }
        ],
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    },

    node: {
      fs: "empty"
    },

    plugins: [
        new WebpackNotifierPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new CopyWebpackPlugin([
            { from:'src/app/images', to:'/public/dist/images' }
        ])
    ]
};
