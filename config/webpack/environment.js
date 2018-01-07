const { environment } = require('@rails/webpacker');

environment.loaders.append('eslint', {
  test: /\.js$/,
  use: {
    loader: 'eslint-loader',
    options: {
      failOnError: process.env.NODE_ENV !== 'production',
    },
  },
});

module.exports = environment;
