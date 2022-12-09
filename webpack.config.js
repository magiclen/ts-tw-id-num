const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    entry: "./src/lib.ts",
    output: {
        clean: true,
        filename: "tw-id-num.min.js",
        library: "TWIDNum",
        libraryTarget: "umd",
        globalObject: "this",
    },
    module: {
        rules: [
            {
                test: /\.ts$/i,
                use: [
                    {
                        loader: "babel-loader",
                        options: { presets: ["@babel/preset-env"] },
                    },
                    { loader: "ts-loader" },
                ],
            },
            {
                test: /\.js$/i,
                use: {
                    loader: "babel-loader",
                    options: { presets: ["@babel/preset-env"] },
                },
            },
        ],
    },
    optimization: { minimizer: [new TerserPlugin({ extractComments: false, terserOptions: { format: { comments: false } } })] },
    resolve: { extensions: [".ts", ".js"] },
};
