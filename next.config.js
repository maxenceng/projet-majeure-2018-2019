const path = require('path');
const withSass = require('@zeit/next-sass');
const withFonts = require('next-fonts');

const globalSass = path.join(process.cwd(), 'src/assets/_common.scss');

module.exports = withFonts(withSass({
  webpack(config) {
    config.module.rules.push({
      test: /\.scss$/,
      enforce: 'pre',
      loader: 'sass-resources-loader',
      options: {
        resources: globalSass,
      },
    });
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
}));
