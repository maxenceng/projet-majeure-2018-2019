/**
 * Custom config file, based on package next-images
 * source: https://github.com/twopluszero/next-images/blob/master/index.js
 * Goal: Avoid transforming SVG files into base64 images
 */


module.exports = (nextConfig = {}) => Object.assign(
  {},
  Object.assign({ inlineImageLimit: 8192, assetPrefix: '' }, nextConfig),
  {
    webpack(config, options) {
      const { isServer } = options;
      if (!options.defaultLoaders) {
        throw new Error(
          'This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade',
        );
      }
      config.module.rules.push({
        test: /\.(jpe?g|png|gif|ico|webp)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: nextConfig.inlineImageLimit,
              fallback: 'file-loader',
              publicPath: `${nextConfig.assetPrefix}/_next/static/images/`,
              outputPath: `${isServer ? '../' : ''}static/images/`,
              name: '[name]-[hash].[ext]',
            },
          },
        ],
      });
      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options);
      }
      return config;
    },
  },
);
