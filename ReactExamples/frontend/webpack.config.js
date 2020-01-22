module.exports = {
    entry: "./src/index.js",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(css)$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader'
                ],
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.css']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    }
};