/* eslint-disable import/no-unresolved */
import { join, resolve } from 'path';

import HtmlWebpackPlugin from 'html-webpack-plugin';

export const entry = './src/index.js';
export const devServer = {
  static: {
    directory: join(__dirname, 'public'),
  },
  port: 9000,
};
export const output = {
  filename: 'main.js',
  path: resolve(__dirname, 'dist'),
};
export const plugins = [
  new HtmlWebpackPlugin({
    template: 'src/index.html',
  }),
];
