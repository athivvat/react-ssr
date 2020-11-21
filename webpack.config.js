const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
    // Tells webpack to use its built-in optimizations.
    mode: 'development', 
    // The entry point of the bundle.
    entry: {
        client: [
            './src/client.js'
        ]
    },
    // Where the output files will be placed.
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js',
    },
    // Configure all the loaders that will be used to transform all the specified file types.
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                include: [path.resolve(__dirname, 'src')],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src', 'index.html')}),
    ],
    // Tell webpack to put all the vendors to the separate vendor.js file
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    chunks: 'initial',
                    name: 'vendor',
                    test: module => /node_nodules/.test(module.resource),
                    enforce: true,
                }
            }
        }
    },
    devtool: 'cheap-module-source-map',
};

module.exports = config;