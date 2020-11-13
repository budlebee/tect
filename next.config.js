/*
const debug = process.env.NODE_ENV !== 'production';
const withCSS = require('@zeit/next-css');
module.exports = withCSS({
  assetPrefix: !debug ? '/tect' : '',
});
*/
// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)
const withCSS = require('@zeit/next-css');
const debug = process.env.NODE_ENV !== 'production';

module.exports = withCSS({
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/techtree/physics': { page: '/techtree/physics' },
      '/techtree/math': { page: '/techtree/math' },
      '/techtree/economy': { page: '/techtree/economy' },
      '/techtree/electricalengineering': {
        page: '/techtree/electricalengineering',
      },
      '/techtree/chemistry': { page: '/techtree/chemistry' },
      '/techtree/biochemistry': { page: '/techtree/biochemistry' },
      '/techtree/russia': { page: '/techtree/russia' },
      '/techtree/cs': { page: '/techtree/cs' },
      '/techtree/earthsystem': { page: '/techtree/earthsystem' },
      '/articles/main': { page: '/articles/main' },
      '/articles/1': { page: '/articles/1' },
    };
  },
  //assetPrefix: '',
  assetPrefix: !debug ? '' : '',
  webpack: (config, { dev }) => {
    // Perform customizations to webpack config
    // console.log('webpack');
    // console.log(config.module.rules, dev);
    config.module.rules = config.module.rules.map((rule) => {
      if (rule.loader === 'babel-loader') {
        rule.options.cacheDirectory = false;
      }
      return rule;
    });
    // Important: return the modified config
    return config;
  },
});
