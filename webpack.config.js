const webpack = require('webpack');
const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);
const { merge } = require("webpack-merge");
const presetConfig = require("./build-utils/loadPresets");


module.exports = ({ mode, presets } = { mode: "production", presets: [] }) => {
    return merge({
        mode,
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
                }
            ]
        },
        plugins: [
            new webpack.ProgressPlugin()
        ]
    },
        modeConfig(mode),
        presetConfig({ mode, presets })
    );
};