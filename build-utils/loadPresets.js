const { merge } = require("webpack-merge");


const presetConfig = env => {
    if (env.presets) {
        const { presets } = env;
        /** @type {string[]} */
        const mergedPresets = [].concat(...[presets]);
        const mergedConfigs = mergedPresets.map(
            presetName => require(`./presets/webpack.${presetName}`)(env)
        )

        return merge({}, ...mergedConfigs);
    }

    return merge({});
}

module.exports = presetConfig;