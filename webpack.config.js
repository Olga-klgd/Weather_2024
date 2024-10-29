/* eslint-disable import/no-extraneous-dependencies */
import { join, resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

export const entry = './src/js/index.js';
export const devServer = {
  static: {
    directory: join(__dirname, 'src/style'),
  },
  compress: true,
  port: 9000,
};
export const output = {
  path: resolve(__dirname, 'dist'),
  filename: 'index.js',
};
export const plugins = [
  new HtmlWebpackPlugin({
    template: 'src/index.html',
  }),
  new CopyWebpackPlugin({
    patterns: [
      { from: resolve(__dirname, 'src/style'), to: 'style' },
    ],
  }),
];
