const compressWebpack = require("compression-webpack-plugin");

module.exports = () => ({
    plugins: [new compressWebpack()]
})