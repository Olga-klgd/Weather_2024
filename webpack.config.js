/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
