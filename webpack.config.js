const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "hBar.js",
        library: 'hBar',
        libraryTarget: 'umd',
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
                    { loader: 'postcss-loader', },
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
    plugins: [],
}
