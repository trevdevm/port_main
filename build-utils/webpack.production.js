const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlCriticalWebpackPlugin = require("html-critical-webpack-plugin");
const CompressWebpack = require("compression-webpack-plugin");
const LoadablePlugin = require('@loadable/webpack-plugin');

module.exports = () => ({
    name: "portFront",
    entry: "./devPort/main.js",
    target: "web",

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
                use: ["isomorphic-style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            importLoaders: 1
                        }
                    }]
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
    output: {
        filename: "[id].bundle.js",
        publicPath: "/dist/"
    },
    plugins: [
        new LoadablePlugin(),
        new HtmlWebpackPlugin({
            template: "./devPort/index.html",
        }),
        new CompressWebpack({
            exclude: [/\.html$/i, /\.json$/i]
        })
    ]
})