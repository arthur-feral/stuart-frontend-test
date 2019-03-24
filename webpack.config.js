import HtmlWebpackPlugin from 'html-webpack-plugin'; // eslint-disable-line import/no-extraneous-dependencies
import TerserPlugin from 'terser-webpack-plugin'; // eslint-disable-line import/no-extraneous-dependencies
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin'; // eslint-disable-line import/no-extraneous-dependencies
import CopyWebpackPlugin from 'copy-webpack-plugin'; // eslint-disable-line import/no-extraneous-dependencies

const path = require('path');

const root = process.cwd();
const distPath = path.resolve(root, './public/');

module.exports = () => ({
  mode: 'development',
  entry: [
    './app/index.js',
  ],
  output: {
    path: distPath,
    filename: '[name].js',
    publicPath: '/',
  },
  context: root,
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          // core-desk files
          path.resolve(root, './app'),
        ],
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: './cache/babel',
          },
        },
      },
      {
        test: /\.m\.scss$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: true,
              url: false,
              modules: true,
              localIdentName: '[name]___[local]___[hash:base64:5]',
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        loaders: [
          'css-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: [
      '.js',
      '.json',
      '.jsx',
    ],
  },
  plugins: [
    new CopyWebpackPlugin(
      [
        {
          from: './app/assets/*',
          to: path.resolve(root, 'assets/'),
        },
      ],
    ),
    new HtmlWebpackPlugin({
      title: 'Stuart Frontend Test',
    }),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessorPluginOptions: {
          preset: [
            'default',
            {
              discardComments: {
                removeAll: true,
              },
            },
          ],
        },
      }),
    ],
  },
  devtool: 'source-map',
  devServer: {
    port: 8080,
    compress: true,
    hot: false,
    inline: false,
    overlay: {
      warnings: true,
      errors: true,
    },
    open: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
});
