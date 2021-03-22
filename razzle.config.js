'use strict';
const LoadableWebpackPlugin = require("@loadable/webpack-plugin");



const path = require("path");

module.exports = {

  modifyWebpackOptions(opts) {
    const options = opts.options.webpackOptions;
    options.postCssOptions.plugins.unshift(require("tailwindcss"));
    return options;
  },

  modifyWebpackConfig(opts) {
    const config = opts.webpackConfig;

    // add loadable webpack plugin only
    // when we are building the client bundle
    if (opts.env.target === "web") {
      const filename = path.resolve(__dirname, "build");

      // saving stats file to build folder.
      // Without this, stats files will go into
      // build/public folder
      config.plugins.push(
        new LoadableWebpackPlugin({
          outputAsset: false,
          writeToDisk: { filename },
        })
      );

      config.output.filename = opts.env.dev
        ? 'static/js/[name].js'
        : 'static/js/[name].[chunkhash:8].js';

      config.optimization = Object.assign(
        {},
        config.optimization,
        {
          runtimeChunk: true,
          splitChunks: {
            cacheGroups: {
              commons: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendors',
              },
            },
            chunks: 'all',
            name: opts.env.dev,
          }
        },
      );

    }

    return config;
  },

};
