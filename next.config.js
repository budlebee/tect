const debug = process.env.NODE_ENV !== 'production';
const withCSS = require('@zeit/next-css');
module.exports = withCSS({
  assetPrefix: !debug ? '/tect/' : '',
});
