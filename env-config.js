const prod = process.env.NODE_ENV === 'production';

module.exports = {
  assetPrefix: prod === 'production' ? 'https://budlebee.github.io/tect' : '',
};
