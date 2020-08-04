const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlCriticalWebpackPlugin = require("html-critical-webpack-plugin");
const compressWebpack = require("compression-webpack-plugin");

module.exports = () => ({
    entry: "./withStyle/main.js",

    module: {
        rules: [
            {
                test: /\.html$/i,
                use: [{
                    loader: "html-loader",
                    options: {
                        attributes: false
                    }
                }]
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: [/\.(jp?g|png)$/i],
                use: [{
                    loader: "file-loader",
                    options: {
                        publicPath: "/dist/",
                        name: "[name].[ext]",
                        esModule: false,
                    }
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./withStyle/index.html",
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new HtmlCriticalWebpackPlugin({
            base: path.resolve('dist'),
            src: 'index.html',
            dest: 'index.html',
            inline: true,
            minify: true,
            extract: true,
            width: 1300,
            height: 900,
            penthouse: {
                blockJSRequests: false,
            }
        })
    ]
})