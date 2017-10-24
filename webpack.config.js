var path = require('path');
var WebpackNotifierPlugin = require('webpack-notifier');
var webpack = require('webpack');

module.exports = {
    entry: {
        'my-app': './src/my-app/app.ts'
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
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" },
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
    ]
};
