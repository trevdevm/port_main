const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlCriticalWebpackPlugin = require("html-critical-webpack-plugin");
const compressWebpack = require("compression-webpack-plugin");
const LoadablePlugin = require('@loadable/webpack-plugin');
const nodeExternals = require("webpack-node-externals");

module.exports = () => ({
    mode: "production",
    name: "portBack",
    target: "node",
    externals: [nodeExternals()],
    entry: {
        "App": "./devPort/components/App/App.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/(node_modules|bower_components)/, /public/],
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-react",
                            "@babel/preset-env"
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                use: ["isomorphic-style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
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
        path: "/home/trevdevm/code/webpack/port_main/server/",
        filename: "[name].js"
    }
})