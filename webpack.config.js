const path = require('path')
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    entry: {
        'hBar': './src/index.js',
        'hBar.min': './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
        library: 'hBar',
        libraryTarget: 'umd',
        libraryExport: 'default',
    },
    mode: process.env.NODE_ENV,
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'style-loader'},
                    { loader: "css-loader", options: { importLoaders: 1, } },
                    { loader: 'postcss-loader' },
                ],
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,// Set loaders to transform files.
                use: {
                  loader: 'babel-loader',
                  options: {
                      presets: ['@babel/preset-env'],

                  }
                }
              },
        ],
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            include: /\.min\.js$/
        })]
    },
    plugins: [],
}
